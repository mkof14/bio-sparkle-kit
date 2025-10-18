import HeroLogo from "./components/HeroLogo";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: 16,
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "ui-sans-serif, system-ui",
      }}
    >
      <div style={{ fontSize: 24, fontWeight: 700 }}>Bio Sparkle Kit</div>
      <HeroLogo />
    </main>
  );
}
