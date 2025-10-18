import ErrorBoundary from "./components/ErrorBoundary";
import HeroLogo from "./components/HeroLogo";

export default function App() {
  return (
    <ErrorBoundary>
      <div style={{minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, fontFamily:"ui-sans-serif, system-ui"}}>
        <div style={{fontSize:24, fontWeight:700}}>HELLO FROM APP</div>
        <HeroLogo />
      </div>
    </ErrorBoundary>
  );
}
