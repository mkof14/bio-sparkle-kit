import { Brain, CheckCircle2, Shield } from "lucide-react";

const SecondOpinion = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          AI Health with Two Expert Opinions
        </h2>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-12">
          Get comprehensive health insights powered by dual AI analysis. Our unique Second Opinion system compares insights from multiple AI models, providing you with balanced, consensus-driven health recommendations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Brain className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Dual AI Analysis</h3>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <CheckCircle2 className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Consensus Reports</h3>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Validation</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondOpinion;