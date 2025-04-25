import FeatureCard from "@/components/FeatureCard";
import FeatureSection from "@/components/FeatureSection";
//import { Hero } from "@/components/Hero";
//import HeroCarousel from "@/components/HeroCarousel";
import Herosection from "@/components/herosection";
import OurMessage from "@/components/OurMessage";

//import SimpleCarousel from "@/components/ui/SimpleCarousel";
export default function Home() {
  return (
    <main>
      <div className="mt-2">
        <Herosection />
      </div>

      <section className="bg-light-100 mt-8  relative   top-[-2] ">
        <FeatureSection />
      </section>
      <section className="mt-5 bg-purple-200 ">
        <FeatureCard />
      </section>
      <section className=" bg-light-300 ">
        <OurMessage />
      </section>
      <object data="/assets/KOA-Bylaws.pdf"  className="aspect-[9/16]" width="100%" height="200px" type="application/pdf">
  <p>Your browser doesn’t support PDFs. Please download the PDF to view it: <a href="/your-pdf-url.pdf">Download PDF</a>.</p>
</object>
    </main>
  );
}
