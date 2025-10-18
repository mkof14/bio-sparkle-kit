import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Book, Video, FileText, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: Book,
    title: "Health Guides",
    description: "Comprehensive guides on understanding your health data",
    count: "50+ Articles",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step walkthroughs of platform features",
    count: "30+ Videos",
  },
  {
    icon: FileText,
    title: "Research Papers",
    description: "Latest scientific findings in health AI",
    count: "100+ Papers",
  },
  {
    icon: Headphones,
    title: "Podcasts",
    description: "Expert interviews and health insights",
    count: "20+ Episodes",
  },
];

const topics = [
  "Understanding Your Biomarkers",
  "Genetic Data Interpretation",
  "Sleep Optimization Strategies",
  "Nutrition & Metabolic Health",
  "Mental Wellness Techniques",
  "Fitness Recovery Science",
  "Longevity Research",
  "Preventive Health Screening",
];

const Learning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Learning <span className="text-primary">Center</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Expand your health knowledge with our comprehensive educational resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:scale-105"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                  <div className="text-primary font-semibold text-sm">{resource.count}</div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-8">Popular Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
                >
                  <h3 className="font-semibold">{topic}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-muted/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Access our complete library of health education resources with a free account
            </p>
            <Button size="lg" className="text-lg px-8">
              Create Free Account
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learning;
