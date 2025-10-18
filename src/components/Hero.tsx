import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to <span className="text-primary">BioMath Core</span>
        </h1>
        <p className="text-xl md:text-2xl text-accent mb-8">
          Where data meets daily life.
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          All of Health. One Platform.
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          From sleep to cognition, from movement to mood — BioMath Core brings
          clarity to your health journey. Track, understand, and optimize your
          wellbeing through intelligent, real-time insights tailored to you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/auth">
            <Button size="lg" className="text-lg px-8">
              Start Free Today
            </Button>
          </Link>
          <Link to="/learning">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Explore Learning Center
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;