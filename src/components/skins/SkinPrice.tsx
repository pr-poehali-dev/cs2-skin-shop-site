
import React from "react";

interface SkinPriceProps {
  price: number;
  oldPrice?: number;
}

const SkinPrice: React.FC<SkinPriceProps> = ({ price, oldPrice }) => {
  if (oldPrice) {
    return (
      <div className="flex flex-col">
        <span className="text-red-500 font-bold">₽{price.toLocaleString()}</span>
        <span className="text-gray-400 text-sm line-through">₽{oldPrice.toLocaleString()}</span>
      </div>
    );
  }
  
  return <span className="text-white font-medium">₽{price.toLocaleString()}</span>;
};

export default SkinPrice;
