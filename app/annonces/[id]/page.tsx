"use client";

import { useEffect, useState } from "react";
import { getAdById } from "@/services/ads.service";
import { Ad } from "@/app/types/ad";
import { formatPrice, getAdMainImage, toAbsoluteImageUrl } from "@/lib/ad-utils";

type Props = {
  params: Promise<{ id: string }>;
};

export default function AdDetailPage({ params }: Props) {
  const [ad, setAd] = useState<Ad | null>(null);
  const [adId, setAdId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const loadAd = async () => {
      try {
        const { id } = await params;
        setAdId(id);

        const data = await getAdById(id);
        setAd(data);

        const mainImage = getAdMainImage(data);
        setSelectedImage(mainImage);
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

    loadAd();
  }, [params]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-white p-8 shadow-sm">
          <p className="text-slate-500">Chargement de l'annonce...</p>
        </div>
      </main>
    );
  }

  if (error || !ad) {
    return (
      <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-red-50 p-8 text-red-700 shadow-sm">
          {error || `Annonce ${adId} introuvable.`}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f6f7fb] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Galerie */}
          <div className="rounded-[32px] bg-white p-4 shadow-sm">
            <div className="overflow-hidden rounded-[24px] bg-slate-100">
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={ad.title}
                  className="h-[420px] w-full object-cover"
                />
              ) : (
                <div className="flex h-[420px] items-center justify-center text-7xl text-slate-300">
                  🖼️
                </div>
              )}
            </div>

            {ad.images && ad.images.length > 1 && (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {ad.images.map((image) => {
                  const imageUrl = toAbsoluteImageUrl(image.imageUrl);

                  return (
                    <button
                      key={image.id ?? image.imageUrl}
                      type="button"
                      onClick={() => setSelectedImage(imageUrl)}
                      className={`overflow-hidden rounded-2xl border-2 ${
                        selectedImage === imageUrl
                          ? "border-orange-500"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={imageUrl}
                        alt={ad.title}
                        className="h-24 w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Infos */}
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-slate-900 md:text-4xl">
                  {ad.title}
                </h1>

                {ad.categoryName && (
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {ad.categoryName}
                  </p>
                )}
              </div>

              <button
                type="button"
                className="rounded-full bg-slate-100 px-4 py-3 text-lg"
              >
                ♡
              </button>
            </div>

            <p className="mt-6 text-3xl font-bold text-green-600">
              {formatPrice(ad.price)}
            </p>

            <div className="mt-6 space-y-3 text-slate-600">
              <p>📍 {ad.cityName || "Ville non précisée"}</p>
              {ad.createdAt && <p>📅 {new Date(ad.createdAt).toLocaleString("fr-FR")}</p>}
              {ad.userFullName && <p>👤 {ad.userFullName}</p>}
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-slate-900">Description</h2>
              <p className="mt-3 whitespace-pre-line leading-7 text-slate-600">
                {ad.description || "Aucune description disponible."}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {ad.phoneContact && (
                <a
                  href={`tel:${ad.phoneContact}`}
                  className="rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white"
                >
                  Appeler
                </a>
              )}

              {ad.whatsappContact && (
                <a
                  href={`https://wa.me/${ad.whatsappContact}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-green-500 px-6 py-4 font-semibold text-white"
                >
                  WhatsApp
                </a>
              )}

              {!ad.phoneContact && !ad.whatsappContact && (
                <button
                  type="button"
                  className="rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white"
                >
                  Contacter
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}