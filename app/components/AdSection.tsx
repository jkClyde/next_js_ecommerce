import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'sectionImage'][0]{...}";

  const data = await client.fetch(query);

  return data;
}

const QualitySection = async () => {
  const data = await getData();
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container "
    >
      {/* LEFT SIDE */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-primary mb-5">
          {data.header}
          <span className="text-main-secondary">{data.colored_header}</span>
          {data.header2}
        </h2>

        <p className=" lg:max-w-lg info-text2 ">{data.details1}</p>
        <p className="mt-6 lg:max-w-lg info-text2">{data.details2} </p>
        <div className="mt-11">{/* <Button label="View details" /> */}</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={urlFor(data.image).url()}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default QualitySection;
