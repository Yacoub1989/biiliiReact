const categories = [
  { name: "Immobilier", icon: "🏠", bg: "bg-blue-50" },
  { name: "Véhicules", icon: "🚗", bg: "bg-orange-50" },
  { name: "Maison", icon: "🛋️", bg: "bg-green-50" },
  { name: "Electronique", icon: "📱", bg: "bg-amber-50" },
];

export default function CategoryGrid() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      {categories.map((category) => (
        <button
          key={category.name}
          className="rounded-3xl bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div
            className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl ${category.bg}`}
          >
            {category.icon}
          </div>
          <p className="text-xl font-bold text-slate-800">{category.name}</p>
        </button>
      ))}
    </div>
  );
}