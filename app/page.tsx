import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import QualitySection from "./components/AdSection";
import SpecialOffer from "./components/SpecialOffer";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
      <section className="padding-2 bg-main">
        <QualitySection />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
    </div>
  );
}
