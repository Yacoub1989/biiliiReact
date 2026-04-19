import Link from "next/link";
import { Ad } from "@/types/ad";
import { formatPrice, getAdMainImage } from "@/lib/ad-utils";

type Props = {
  ad: Ad;
};

export default function AdCard({ ad }: Props) {
  const imageUrl = getAdMainImage(ad);

  return (
    <Link
      href={`/annonces/${ad.id}`}
      className="group overflow-hidden rounded-[28px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={ad.title}
            className="h-60 w-full object-cover"
          />
        ) : (
          <div className="flex h-60 items-center justify-center bg-slate-100 text-6xl text-slate-300">
            🖼️
          </div>
        )}

        <button
          type="button"
          className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow"
        >
          ♡
        </button>
      </div>

      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-xl font-extrabold text-slate-900">
          {ad.title}
        </h3>

        <p className="text-lg font-bold text-green-600">
          {formatPrice(ad.price)}
        </p>

        <p className="text-sm text-slate-500">📍 {ad.city}</p>
      </div>
    </Link>
  );
}