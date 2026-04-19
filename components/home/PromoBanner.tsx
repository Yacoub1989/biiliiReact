export default function PromoBanner() {
  return (
    <div className="mt-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 to-pink-500 p-8 text-white shadow-lg">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
            Découvrez nos bons plans
          </span>

          <h3 className="mt-5 max-w-lg text-3xl font-extrabold leading-tight">
            Offres exclusives, ventes privées et promo du jour.
          </h3>

          <button className="mt-6 rounded-full bg-white px-6 py-3 text-lg font-semibold text-orange-500">
            En savoir plus
          </button>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="flex h-36 w-36 items-center justify-center rounded-[32px] bg-white/15 text-6xl">
            🏷️
          </div>
        </div>
      </div>
    </div>
  );
}