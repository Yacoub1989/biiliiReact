export default function SearchBar() {
  return (
    <div className="mt-4 rounded-[28px] bg-white p-3 shadow-sm">
      <div className="flex items-center gap-3 rounded-[24px] px-4 py-3">
        <span className="text-3xl text-slate-400">⌕</span>
        <input
          type="text"
          placeholder="Rechercher sur El Gazra"
          className="w-full bg-transparent text-lg outline-none placeholder:text-slate-400"
        />
        <button className="text-2xl text-slate-400">📷</button>
      </div>
    </div>
  );
}