import HeroLogo from "./components/HeroLogo";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
      <HeroLogo />
      <h1 className="text-4xl font-semibold tracking-tight">Bio Sparkle Kit</h1>
      <p className="text-neutral-500">Готов к развертыванию на Vercel + Supabase</p>
      <div className="flex gap-3">
        <a
          href="https://github.com/mkof14/bio-sparkle-kit"
          className="rounded-xl border px-4 py-2 hover:bg-black hover:text-white transition"
          target="_blank"
        >
          GitHub
        </a>
        <a
          href="https://swbexijaawnfnxigzuke.supabase.co"
          className="rounded-xl border px-4 py-2 hover:bg-black hover:text-white transition"
          target="_blank"
        >
          Supabase
        </a>
      </div>
    </main>
  );
}
