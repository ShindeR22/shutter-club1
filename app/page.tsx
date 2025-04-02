import BestClicks from "@/components/best-clicks";
import PopularCities from "@/components/cities";
import GetQuotation from "@/components/get-quotation";
// import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import MapPage from "@/components/map";
import Photographers from "@/components/photographers";

export default function Home() {
  return (
    <>
      <Hero />
      <Photographers />
      <BestClicks />
      <PopularCities />
      <GetQuotation />
      <MapPage />

    </>

  );
}
