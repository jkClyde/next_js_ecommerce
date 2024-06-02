import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
  variant: string;
  size: string;
  quantity2: number;
  category: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center bg-gray-200 py-2 px-4 rounded-t-lg">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-700">{message}</p>
          <Button
            onClick={onClose}
            className="mt-4 w-full bg-primary hover:bg-primary text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
  variant,
  size,
  quantity2,
  category,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image.image).url(),
    price_id: price_id,
    variant: variant,
    size: size,
    quantity2: quantity2,
  };

  const handleAddToCart = () => {
    if (category === "Shirts" && size === "") {
      setIsModalOpen(true);
    } else {
      addItem(product);
      handleCartClick();
    }
  };

  return (
    <>
      <Button onClick={handleAddToCart}>Add To Cart</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Please select a size"
      />
    </>
  );
}
