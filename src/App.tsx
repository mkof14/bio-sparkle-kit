import HeroLogo from "./components/HeroLogo";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h1 className="text-4xl font-semibold">Bio Sparkle Kit</h1>
      <p className="text-neutral-500">Готов к развертыванию на Vercel</p>
      <HeroLogo />
    </main>
  );
}
