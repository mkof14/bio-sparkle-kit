import HeroLogo from "./components/HeroLogo";

export default function App() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-10">
      <HeroLogo />
      <h1 className="text-3xl font-bold">Welcome to Bio Sparkle Kit</h1>
    </main>
  );
}
