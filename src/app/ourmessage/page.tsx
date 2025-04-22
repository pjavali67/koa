import React from "react";
import PageLayout from "@/utils/Pagelayout";
import PresidentsMessage from "@/components/ourmessage/PresidentsMessage";
import SecretryMessage from "@/components/ourmessage/SecretryMessage";
function OurMessagePage() {
  return (
    <>
      <div className="mt-2">
        <PageLayout title="Our Message" description="" />{" "}
      </div>
      <section>
        <PresidentsMessage />
      </section>
      <section>
        <SecretryMessage />
      </section>
    </>
  );
}
OurMessagePage.getLayout = function getLayout(page: React.ReactNode) {
  return <PageLayout>{page}</PageLayout>;
};
export default OurMessagePage;
