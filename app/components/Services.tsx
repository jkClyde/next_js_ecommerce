import { JSX } from "react";
import { client, urlFor } from "../lib/sanity";
import Image from "next/image";

interface ServiceCardProps {
  imgURL: string;
  label: string;
  subtext: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imgURL,
  label,
  subtext,
}) => {
  return (
    <div className="flex-1 sm:w-[22%] sm:min-w-[22%] w-full rounded-[20px] shadow-xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-primary rounded-full">
        <Image src={urlFor(imgURL).url()} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

async function getData() {
  const query = "*[_type == 'services']{...}";

  const data = await client.fetch(query);

  return data;
}

const Services = async () => {
  const datas = await getData();

  return (
    // TASK: Figure out how to insert another to make it 4 in a row
    <section className="max-container flex justify-center flex-wrap gap-9">
      {datas.map((data: JSX.IntrinsicAttributes & ServiceCardProps) => (
        <ServiceCard key={data.label} {...data} />
      ))}
    </section>
  );
};

export default Services;
