import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-[#f6f7fb]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
            ☰
          </button>
          <Link href="/" className="text-3xl font-black text-orange-500">
            bi3li
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/favoris"
            className="rounded-2xl bg-white px-4 py-3 shadow-sm hover:shadow"
          >
            Favoris
          </Link>
          <Link
            href="/publier"
            className="rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white shadow-sm hover:bg-orange-600"
          >
            Publier
          </Link>
          <Link
            href="/compte"
            className="rounded-2xl bg-white px-4 py-3 shadow-sm hover:shadow"
          >
            Compte
          </Link>
        </div>

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm md:hidden">
          🔔
        </button>
      </div>
    </header>
  );
}