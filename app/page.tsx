"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import SearchBar from "@/components/home/SearchBar";
import CategoryGrid from "@/components/home/CategoryGrid";
import PromoBanner from "@/components/home/PromoBanner";
import AdGrid from "@/components/ads/AdGrid";
import { Ad } from "@/app/types/ad";
import { getAds } from "@/services/ads.service";

export default function HomePage() {
  const [ads, setAds] = useState<Ad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadAds = async () => {
      try {
        const data = await getAds();
        setAds(data);
      } catch (err: any) {
        setError(
          err?.response?.data?.message ||
            err?.message ||
            "Impossible de charger les annonces."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAds();
  }, []);

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      <Header />

      <section className="mx-auto max-w-7xl px-4 py-6">
        <SearchBar />
        <CategoryGrid />
        <PromoBanner />

        <div className="mt-10 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Annonces récentes
            </h2>
            <div className="mt-4 inline-flex items-center rounded-2xl bg-[#eef4ff] px-5 py-3 text-sm font-semibold text-slate-700">
              📍 Toute la Mauritanie
            </div>
          </div>
        </div>

        {loading && (
          <div className="mt-8 rounded-[28px] bg-white p-8 text-center shadow-sm">
            <p className="text-slate-500">Chargement des annonces...</p>
          </div>
        )}

        {error && (
          <div className="mt-8 rounded-[28px] bg-red-50 p-6 text-center text-red-700 shadow-sm">
            {error}
          </div>
        )}

        {!loading && !error && <AdGrid ads={ads} />}
      </section>
    </main>
  );
}