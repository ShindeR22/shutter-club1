// import AnimatedTestimonialsDemo from "@/components/animated-testimonials-demo";
import BestClicks from "@/components/best-clicks";
// import PopularCities from "@/components/cities";
import GetQuotation from "@/components/get-quotation";
// import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import MapPage from "@/components/map";
// import GlassNavbar from "@/components/nav";
import Photographers from "@/components/photographers";
import PremiumTestimonialsShowcase from "@/components/PremiumTestimonialsShowcase";

export default function Home() {
  return (
    <>
      {/* <GlassNavbar /> */}
      <Hero />
      <Photographers />
      <PremiumTestimonialsShowcase />
      <BestClicks />
      {/* <PopularCities /> */}
      <GetQuotation />
      {/* <AnimatedTestimonialsDemo /> */}
      <MapPage />

    </>

  );
}
