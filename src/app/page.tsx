import FeatureCard from "@/components/FeatureCard";
import FeatureSection from "@/components/FeatureSection";
import Herosection from "@/components/herosection";
import OurMessage from "@/components/OurMessage";

export default function Home() {
  return (
    <main>
      <div>
        <Herosection />
      </div>
      <section className="m-10">
        <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text bg-transparent  text-5xl  mt-2 text-4xl font-semibold tracking-tight text-pretty underline ">
          Welcome to Karnataka Orthopaedic Association
        </div>
      </section>
      <section className="bg-light-100  relative   top-[-10] ">
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
