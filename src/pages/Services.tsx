import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Sparkles, Activity, Brain, Dumbbell, Users, Shield, Droplet, Apple, Moon, Wind, Baby, HeartPulse, Zap, Accessibility, Eye, ShoppingBag, Flame, UserCircle, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  { name: "Critical Health", services: 12, icon: Heart, description: "Advanced diagnostics for life-critical conditions with AI-powered cardiac and emergency monitoring." },
  { name: "Everyday Wellness", services: 15, icon: Sparkles, description: "Daily health optimization through personalized insights and lifestyle metrics." },
  { name: "Longevity & Anti-Aging", services: 10, icon: Activity, description: "Extend healthspan with cellular health monitoring and age-reversal protocols." },
  { name: "Mental Wellness", services: 14, icon: Brain, description: "AI-guided therapy for stress management and cognitive enhancement." },
  { name: "Fitness & Performance", services: 11, icon: Dumbbell, description: "Precision training analytics with real-time biometrics and recovery tracking." },
  { name: "Women's Health", services: 9, icon: Users, description: "Specialized care for hormonal balance and reproductive health." },
  { name: "Men's Health", services: 8, icon: Shield, description: "Hormonal optimization and vitality enhancement for men." },
  { name: "Beauty & Skincare", services: 13, icon: Droplet, description: "Data-driven skin analysis and personalized beauty protocols." },
  { name: "Nutrition & Diet", services: 16, icon: Apple, description: "Precision nutrition with metabolic analysis and meal planning." },
  { name: "Sleep & Recovery", services: 7, icon: Moon, description: "Deep sleep analysis and circadian rhythm optimization." },
  { name: "Environmental Health", services: 6, icon: Wind, description: "Air quality monitoring and environmental risk assessment." },
  { name: "Family Health", services: 10, icon: Baby, description: "Multi-generational health tracking for the whole family." },
  { name: "Preventive Medicine & Longevity", services: 14, icon: HeartPulse, description: "Early detection and proactive disease prevention strategies." },
  { name: "Biohacking & Performance", services: 12, icon: Zap, description: "Advanced optimization techniques for peak human performance." },
  { name: "Senior Care", services: 8, icon: Accessibility, description: "Chronic condition monitoring and quality of life enhancement." },
  { name: "Eye-Health Suite", services: 9, icon: Eye, description: "Vision optimization and digital eye strain prevention." },
  { name: "Digital Therapeutics Store", services: 11, icon: ShoppingBag, description: "FDA-approved digital health solutions and therapeutic apps." },
  { name: "General Sexual Longevity", services: 10, icon: Flame, description: "Sexual health optimization across lifespan and vitality." },
  { name: "Men's Sexual Health", services: 7, icon: UserCircle, description: "Performance optimization and hormonal health for men." },
  { name: "Women's Sexual Health", services: 8, icon: UserCircle2, description: "Hormonal balance and reproductive wellness for women." },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered health services across 20 specialized categories
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-card border border-border p-8 transition-all hover:border-primary hover:shadow-lg"
                >
                  <div className="mb-6">
                    <Icon className="w-16 h-16 text-primary" />
                  </div>
                  <div className="text-sm text-primary font-semibold mb-3">
                    {category.services} Services Available
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <Button className="w-full" variant="outline">
                    Explore Category
                  </Button>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-12">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
