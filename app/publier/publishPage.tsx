"use client";

import { useState } from "react";
import { createAd, uploadAdImage } from "@/services/ads.service";

type FormState = {
  title: string;
  description: string;
  price: string;
  cityId: string;
  categoryId: string;
};

export default function PublishPage() {
  const [form, setForm] = useState<FormState>({
    title: "",
    description: "",
    price: "",
    cityId: "",
    categoryId: "",
  });

  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const createdAd = await createAd({
        title: form.title,
        description: form.description,
        price: Number(form.price),
        cityId: 1,
        categoryId: 1,
          brand: "",
          model: "",
          conditionState:  "USED",
          district: "",
          phoneContact: "",
          whatsappContact: "",
          voiceQueryText: "",
      });

      const adId = createdAd.id;

      if (!adId) {
        throw new Error("L'identifiant de l'annonce créée est introuvable.");
      }

      for (const image of images) {
        await uploadAdImage(adId, image);
      }

      setMessage("Annonce créée avec succès.");
      setForm({
        title: "",
        description: "",
        price: "",
        cityId: "",
        categoryId: "",
      });
      setImages([]);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Erreur lors de la création de l'annonce."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
      <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-6 shadow-sm md:p-8">
        <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
          Publier une annonce
        </h1>
        <p className="mt-2 text-slate-500">
          Ajoute les informations principales de ton annonce.
        </p>

        {message && (
          <div className="mt-6 rounded-2xl bg-green-50 px-4 py-3 text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Titre
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Ex: Iphone 14 Pro Max"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Décris ton produit..."
              rows={5}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400"
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Prix
              </label>
              <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="Ex: 250000"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Ville
              </label>
              <input
                name="cityId"
                value={form.cityId}
                onChange={handleChange}
                placeholder="Ex: Nouakchott"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Catégorie
            </label>
            <select
              name="categoryId"
              value={form.categoryId}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400"
              required
            >
              <option value="">Choisir une catégorie</option>
              <option value="IMMOBILIER">Immobilier</option>
              <option value="VEHICULES">Véhicules</option>
              <option value="MAISON">Maison</option>
              <option value="ELECTRONIQUE">Electronique</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Images
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImagesChange}
              className="block w-full rounded-2xl border border-slate-200 px-4 py-3"
            />

            {images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {images.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="h-28 w-full object-cover"
                    />
                    <p className="truncate px-2 py-2 text-xs text-slate-500">
                      {file.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Publication en cours..." : "Publier l'annonce"}
          </button>
        </form>
      </div>
    </main>
  );
}