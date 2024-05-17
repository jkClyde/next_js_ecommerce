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
  const query = "*[_type == 'sectionImage'][1]{...}";

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
          <span className="text-primary">{data.colored_header} </span>
          {data.header2}
        </h2>
        <p className="mt-4 info-text">{data.details1}</p>
        <p className="mt-6 info-text">{data.details2}</p>
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
