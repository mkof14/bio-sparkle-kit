import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    description: "Perfect for getting started with health tracking",
    features: [
      "Access to 50+ AI services",
      "Basic health analytics",
      "Weekly reports",
      "Mobile app access",
      "Email support",
      "1GB data storage",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    description: "Advanced insights for serious health optimization",
    features: [
      "Access to 150+ AI services",
      "Advanced predictive analytics",
      "Daily detailed reports",
      "Priority support 24/7",
      "10GB data storage",
      "Second Opinion AI",
      "Genetic data analysis",
      "Custom integrations",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "/month",
    description: "Complete health ecosystem for professionals",
    features: [
      "Access to all 200+ AI services",
      "Real-time health monitoring",
      "Unlimited reports & insights",
      "Dedicated health consultant",
      "Unlimited data storage",
      "Family sharing (up to 5)",
      "API access",
      "White-label options",
      "HIPAA compliance guarantee",
    ],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Choose Your <span className="text-primary">Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Start with 14 days free. Cancel anytime. No hidden fees.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card border ${
                  plan.popular ? "border-primary ring-2 ring-primary" : "border-border"
                } rounded-2xl p-8 ${plan.popular ? "scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6 min-h-[48px]">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <Link to="/auth">
                  <Button
                    className="w-full mb-6"
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    Start Free Trial
                  </Button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Need a custom plan for your organization?
            </p>
            <Button variant="outline" size="lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
