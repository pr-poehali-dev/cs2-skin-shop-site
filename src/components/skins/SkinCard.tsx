
import React from "react";
import { Skin } from "@/types/skin";
import SkinRarityBadge from "./SkinRarityBadge";
import SkinRating from "./SkinRating";
import SkinPrice from "./SkinPrice";
import DiscountBadge from "./DiscountBadge";
import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";

interface SkinCardProps {
  skin: Skin;
  isFavorite: boolean;
  onFavoriteToggle: (id: number) => void;
}

const SkinCard: React.FC<SkinCardProps> = ({ 
  skin, 
  isFavorite, 
  onFavoriteToggle 
}) => {
  return (
    <div className="skin-card group">
      {skin.discount && <DiscountBadge discount={skin.discount} />}
      
      <div className="relative overflow-hidden h-48">
        <img 
          src={skin.image} 
          alt={`${skin.weapon} | ${skin.name}`} 
          className="skin-image w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            <div>
              <SkinRarityBadge rarity={skin.rarity} />
            </div>
            <SkinRating rating={skin.rating} />
          </div>
        </div>
      </div>
      
      <div className="skin-card-content p-4">
        <h3 className="font-medium text-white">
          {skin.weapon} | <span className="text-cs-purple">{skin.name}</span>
        </h3>
        
        <div className="flex justify-between items-center mt-3">
          <SkinPrice price={skin.price} oldPrice={skin.oldPrice} />
          
          <div className="flex items-center gap-2">
            <FavoriteButton 
              isFavorite={isFavorite}
              onClick={() => onFavoriteToggle(skin.id)}
            />
            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinCard;
