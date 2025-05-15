
import React from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick }) => {
  return (
    <Button 
      variant="ghost" 
      size="icon"
      className="h-8 w-8 text-gray-400 hover:text-cs-purple"
      onClick={onClick}
    >
      <Heart 
        className={`h-5 w-5 ${isFavorite ? 'fill-cs-purple text-cs-purple' : ''}`} 
      />
    </Button>
  );
};

export default FavoriteButton;
