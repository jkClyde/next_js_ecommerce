import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import QualitySection from "./components/AdSection";
import SpecialOffer from "./components/SpecialOffer";
import Services from "./components/Services";
import Footer from "./components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    // pb-6 sm:pb-8 lg:pb-12
    <div className="bg-white">
      <Hero />
      <Newest />
      {/* <section className="padding-2 bg-primary">
        <QualitySection />
      </section> */}
      <section className="padding">
        <Services />
      </section>
      {/* <section className="padding">
        <SpecialOffer />
      </section> */}
      <section className=" bg-primary padding-x padding-t pb-8">
        <Footer />
      </section>
    </div>
  );
}
