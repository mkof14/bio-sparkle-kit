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

  if (!url) return <div className="p-6 text-center text-sm">...</div>;

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <div className="text-xs break-all max-w-[90vw] px-4">{url}</div>
      <img src={url} alt="Logo" className="h-40 w-auto" />
    </div>
  );
}
