import HeroCarousel from "../components/custom-components/HeroCarousel";
import FeatureCard from "../components/FeatureCard";
import FeatureSection from "../components/FeatureSection";
import OurMessage from "../components/OurMessage";


export default async function Home() {

  return (
    <main className="min-h-screen md:min-h-full">
      <div className="mt-2">
        {/* <Herosection /> */}
        <HeroCarousel />
      </div>

      <section className="bg-light-100   ">
        <FeatureSection />
      </section>
      <section className="mt-5 bg-purple-200 ">
        <FeatureCard />
      </section>
      <section className=" bg-light-300 ">
        <OurMessage />
      </section>
  
    </main>
  );
}
