import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import CampaignBanner from "@/components/CampaignBanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <CampaignBanner />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
