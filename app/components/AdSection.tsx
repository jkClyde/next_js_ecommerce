import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'sectionImage'][0]";

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
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-primary">
          We Provide You
          <span className="text-main-secondary"> Super </span>
          <span className="text-main-secondary">Quality </span> Products
        </h2>

        <p className=" lg:max-w-lg info-text2 ">
          Ensuring premium comfort and style, our meticulously crafted gears is
          designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text2">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
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
