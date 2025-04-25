import React from "react";
import PageLayout from "./layout";
import AboutUsSection from "./aboutussection";
import AboutUsIntro from "./aboutusIntro";
function Aboutus() {
  return (
    <>
      <section>
        <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text bg-transparent  text-5xl  mt-5 ml-15 text-4xl font-semibold tracking-tight text-pretty underline ">
          Welcome to Karnataka Orthopaedic Association
        </div>
      </section>
      <section>
        <AboutUsSection />
      </section>
      <section className="mt-[-50]">
        <AboutUsIntro />
      </section>
    </>
  );
}
Aboutus.getLayout = function getLayout(page: React.ReactNode) {
  return <PageLayout>{page}</PageLayout>;
};
export default Aboutus;
