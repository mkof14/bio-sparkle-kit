import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function HeroLogo() {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    try {
      const { data } = supabase.storage.from("public-files").getPublicUrl("bmCore 111.png");
      setUrl(data.publicUrl || "");
      console.log("Public URL:", data.publicUrl);
    } catch (e) {
      console.error("getPublicUrl failed:", e);
    }
  }, []);

  if (!url) return <div style={{padding:12, fontSize:12}}>…</div>;

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", padding:24}}>
      <img src={url} alt="Logo" style={{height:160, width:"auto"}} />
    </div>
  );
}
