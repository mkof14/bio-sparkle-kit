import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function HeroLogo() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { data } = supabase.storage
      .from("public-files")
      .getPublicUrl("bmCore 111.png");
    setUrl(data.publicUrl);
  }, []);

  if (!url) return null;

  return (
    <div className="flex items-center justify-center">
      <img src={url} alt="Logo" className="h-40 w-auto" />
    </div>
  );
}
