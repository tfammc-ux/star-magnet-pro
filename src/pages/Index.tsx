import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import WhyRealReviews from "@/components/WhyRealReviews";
import RealResults from "@/components/RealResults";
import Timeline from "@/components/Timeline";
import SpecialOffer from "@/components/SpecialOffer";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <HowItWorks />
      <WhyRealReviews />
      <RealResults />
      <Timeline />
      <SpecialOffer />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
