"use client";

import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { useState } from "react";

import CheckoutNow from "@/app/components/CheckoutNow";
import AddToBag from "@/app/components/AddToBag";
import { Button } from "@/components/ui/button";
import { Star, Truck } from "lucide-react";

interface Image {
  image: any;
  color: string;
}

interface Data {
  categoryName: string;
  description: string;
  name: string;
  price: number;
  _id: string;
  price_id: string;
}

interface iAppProps {
  images: Image[];
  data: Data;
}

export default function ImageGallery({ images, data }: iAppProps) {
  const [bigImage, setBigImage] = useState(images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSmallImageClick = (image: any) => {
    setBigImage(image);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
    console.log(quantity);
  };

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col">
          {images.map((image: any, idx: number) => (
            <div
              key={`${image.image}-${idx}=${image.color}`}
              className="overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={urlFor(image.image).url()}
                width={200}
                height={200}
                alt="photo"
                className="h-full w-full object-cover object-center cursor-pointer"
                onClick={() => handleSmallImageClick(image)}
              />
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
          <Image
            src={urlFor(bigImage.image).url()}
            alt="Photo"
            width={500}
            height={500}
            className="h-full w-full object-cover object-center"
          />

          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
            {bigImage.color}
          </span>
        </div>
      </div>
      <div className="md:py-8">
        <div className="mb-2 md:mb-3">
          <span className="mb-0.5 inline-block text-gray-500">
            {data.categoryName}
          </span>
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            {data.name}
          </h2>
        </div>

        <div className="mb-4">
          <div className="flex items-end gap-2">
            <span className="text-xl font-bold text-gray-800 md:text-2xl">
              ₱{data.price}
            </span>
            <span className="mb-0.5 text-red-500 line-through">
              ₱{data.price + 30}
            </span>
          </div>

          <span className="text-sm text-gray-500">Incl. Vat plus shipping</span>
        </div>

        {data.categoryName === "Shirts" && (
          <div className="my-4">
            <label
              htmlFor="size"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Size:
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="block w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option value="" disabled hidden>
                Choose size
              </option>

              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="quantity"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="block w-full px-4 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div className="mb-6 flex items-center gap-2 text-gray-500">
          <Truck className="w-6 h-6" />
          <span className="text-sm">2-4 Day Shipping</span>
        </div>

        <div className="flex gap-2.5">
          <AddToBag
            currency="USD"
            description={data.description}
            image={bigImage}
            name={data.name}
            price={data.price}
            key={data._id}
            price_id={data.price_id}
            variant={bigImage.color}
            size={selectedSize}
            quantity2={quantity}
            category={data.categoryName}
          />
          <CheckoutNow
            currency="USD"
            description={data.description}
            image={bigImage}
            name={data.name}
            price={data.price}
            key={data._id}
            price_id={data.price_id}
            variant={bigImage.color}
            size={selectedSize}
            quantity2={quantity}
            category={data.categoryName}
          />
        </div>
      </div>
    </>
  );
}
