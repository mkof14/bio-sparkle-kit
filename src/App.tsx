import HeroLogo from "./components/HeroLogo";
export default function App() {
  return (
    <main style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",gap:24,flexDirection:"column"}}>
      <div style={{fontSize:24,fontWeight:700}}>Bio Sparkle Kit</div>
      <HeroLogo />
    </main>
  );
}
