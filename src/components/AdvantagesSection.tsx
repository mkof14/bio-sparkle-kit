import { Target, Gauge, Lock, Workflow, AlertCircle, Lightbulb } from "lucide-react";

const advantages = [
  {
    icon: Target,
    title: "Personalization",
    subtitle: "Tailored insights for your unique biology",
    features: ["Custom health plans", "DNA-based recommendations", "Adaptive AI learning"],
  },
  {
    icon: Gauge,
    title: "Precision",
    subtitle: "AI-powered predictive analytics",
    features: ["98% accuracy rate", "Real-time analytics", "Predictive modeling"],
  },
  {
    icon: Lock,
    title: "Security",
    subtitle: "Military-grade data protection",
    features: ["HIPAA compliant", "AES-256 encryption", "Zero-trust architecture"],
  },
  {
    icon: Workflow,
    title: "Integration",
    subtitle: "Seamless data unification",
    features: ["100+ device sync", "Lab results import", "EHR connectivity"],
  },
  {
    icon: AlertCircle,
    title: "Proactive",
    subtitle: "Prevention-first approach",
    features: ["Early risk detection", "Preventive alerts", "Health forecasting"],
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    subtitle: "Cutting-edge AI evolution",
    features: ["Latest AI models", "Regular updates", "Research-driven"],
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Advantages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground mb-4">{advantage.subtitle}</p>
                <ul className="space-y-2">
                  {advantage.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-sm flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;