// import { arrowRight } from "../assets/icons";
// import { offer } from "../assets/images";
// import { Button } from "../components";
import Image from "next/image";

import { arrowRight } from "./icons";
// import offer from "./images/index.offer.svg";
import Button from "./Button";

import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'sectionImage'][1]";

  const data = await client.fetch(query);

  return data;
}

const SpecialOffer = async () => {
  const data = await getData();

  return (
    <section className="flex justify-between items-center  max-xl:flex-col-reverse gap-10 max-container">
      {/* LEFT SIDE */}
      <div className="flex-1">
        <Image
          src={urlFor(data.image).url()}
          alt="Shoe Promotion"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-main-secondary">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        {/* <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div> */}
      </div>
    </section>
  );
};

export default SpecialOffer;
