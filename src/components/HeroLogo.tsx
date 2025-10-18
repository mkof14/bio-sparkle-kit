import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export default function HeroLogo() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    const { data } = supabase
      .storage
      .from("public-files")
      .getPublicUrl("public/logo.png"); // <-- если файл у тебя называется иначе — скажи
    setUrl(data.publicUrl);
  }, []);

  if (!url) return null;

  return (
    <div className="flex items-center justify-center py-10">
      <img src={url} alt="Logo" className="h-16 w-auto" />
    </div>
  );
}
