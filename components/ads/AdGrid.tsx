import AdCard from "./AdCard";
import { Ad } from "@/types/ad";

type Props = {
  ads: Ad[];
};

export default function AdGrid({ ads }: Props) {
  if (!ads.length) {
    return (
      <div className="mt-8 rounded-[28px] bg-white p-8 text-center shadow-sm">
        <p className="text-slate-500">Aucune annonce disponible pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {ads.map((ad) => (
        <AdCard key={ad.id} ad={ad} />
      ))}
    </div>
  );
}