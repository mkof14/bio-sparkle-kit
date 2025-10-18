import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import SecondOpinion from "@/components/SecondOpinion";
import StatsSection from "@/components/StatsSection";
import ModelArchive from "@/components/ModelArchive";
import AdvantagesSection from "@/components/AdvantagesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <SecondOpinion />
      <StatsSection />
      <ModelArchive />
      <AdvantagesSection />
      <Footer />
    </div>
  );
};

export default Index;

