"use client";

import { useEffect, useState } from "react";
import { getAdById } from "@/services/ads.service";
import { Ad } from "@/types/ad";
import { formatPrice, getAdMainImage } from "@/lib/ad-utils";

type Props = {
  params: Promise<{ id: string }>;
};

export default function AdDetailPage({ params }: Props) {
  const [adId, setAdId] = useState<string>("");
  const [ad, setAd] = useState<Ad | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const resolveParamsAndLoad = async () => {
      try {
        const { id } = await params;
        setAdId(id);

        const data = await getAdById(id);
        setAd(data);
      } catch (err: any) {
        setError(
          err?.response?.data?.message ||
            err?.message ||
            "Impossible de charger l'annonce."
        );
      } finally {
        setLoading(false);
      }
    };

    resolveParamsAndLoad();
  }, [params]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-slate-500">Chargement de l'annonce...</p>
        </div>
      </main>
    );
  }

  if (error || !ad) {
    return (
      <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
        <div className="mx-auto max-w-4xl rounded-[32px] bg-red-50 p-8 text-red-700 shadow-sm">
          {error || `Annonce ${adId} introuvable.`}
        </div>
      </main>
    );
  }

  const mainImage = getAdMainImage(ad);

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-[32px] bg-white shadow-sm">
          {mainImage ? (
            <img
              src={mainImage}
              alt={ad.title}
              className="h-[420px] w-full object-cover"
            />
          ) : (
            <div className="flex h-[420px] items-center justify-center bg-slate-100 text-7xl text-slate-300">
              🖼️
            </div>
          )}
        </div>

        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <h1 className="text-4xl font-black text-slate-900">{ad.title}</h1>

          <p className="mt-4 text-3xl font-bold text-green-600">
            {formatPrice(ad.price)}
          </p>

          <p className="mt-3 text-slate-500">📍 {ad.city}</p>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-900">Description</h2>
            <p className="mt-3 leading-7 text-slate-600">
              {ad.description || "Aucune description disponible."}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white">
              Contacter
            </button>

            <button className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-semibold text-slate-700">
              Ajouter aux favoris
            </button>
          </div>
        </div>
      </div>

      {ad.images && ad.images.length > 1 && (
        <div className="mx-auto mt-8 max-w-7xl rounded-[32px] bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Galerie</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {ad.images.map((image, index) => (
              <img
                key={image.id ?? index}
                src={image.url}
                alt={`${ad.title} ${index + 1}`}
                className="h-40 w-full rounded-2xl object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}