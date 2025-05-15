
import React from "react";
import { StarIcon } from "lucide-react";

interface SkinRatingProps {
  rating: number;
}

const SkinRating: React.FC<SkinRatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center gap-1">
      <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      <span className="text-white text-sm">{rating}</span>
    </div>
  );
};

export default SkinRating;
