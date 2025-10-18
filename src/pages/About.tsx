import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Users, Lightbulb, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize access to advanced health insights by making AI-powered health analytics accessible to everyone, everywhere.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "A diverse group of healthcare professionals, AI researchers, and engineers united by a passion for transforming healthcare through technology.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously push the boundaries of what's possible in health tech, integrating the latest AI models and research findings.",
  },
  {
    icon: Heart,
    title: "Patient First",
    description:
      "Every decision we make is guided by one principle: what's best for the health and wellbeing of our users.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            About <span className="text-primary">BioMath Core</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Pioneering the future of personalized health through artificial intelligence
          </p>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BioMath Core was founded in 2023 with a bold vision: to transform healthcare by
                  putting the power of advanced AI analytics directly into the hands of individuals.
                </p>
                <p>
                  We recognized that while healthcare data was becoming increasingly abundant,
                  individuals lacked the tools to make sense of it all. Lab results, wearable data,
                  genetic information, and medical records existed in silos, with no unified way to
                  derive actionable insights.
                </p>
                <p>
                  Today, BioMath Core serves thousands of users worldwide, providing comprehensive
                  health analytics across 20 specialized categories and 200+ AI-powered services. Our
                  platform integrates data from over 100 devices and sources, delivering personalized
                  insights that help people live healthier, longer lives.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-8 hover:border-primary transition-colors"
                >
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-muted/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Join Us on This Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're just getting started. As AI technology evolves and our understanding of human
              health deepens, we're committed to staying at the forefront of innovation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
