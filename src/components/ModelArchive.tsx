import { Database } from "lucide-react";

const ModelArchive = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <Database className="w-16 h-16 text-primary mx-auto mb-6" />
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Model Archive - Your Secure Vault
        </h2>
        <p className="text-xl text-muted-foreground">
          All your health data in one encrypted, HIPAA-compliant vault. Store lab results, genetic data, wearable metrics, and medical records with military-grade security. Only you control access.
        </p>
      </div>
    </section>
  );
};

export default ModelArchive;