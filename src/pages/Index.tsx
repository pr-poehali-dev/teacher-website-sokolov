import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResourcesSection from "@/components/ResourcesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// ... keep existing code

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ResourcesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
