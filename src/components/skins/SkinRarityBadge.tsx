
import React from "react";
import { getRarityText } from "@/types/skin";

interface SkinRarityBadgeProps {
  rarity: 'covert' | 'classified' | 'restricted' | 'mil-spec' | 'industrial' | 'consumer';
}

const SkinRarityBadge: React.FC<SkinRarityBadgeProps> = ({ rarity }) => {
  return (
    <p className={`text-sm font-medium rarity-${rarity}`}>
      {getRarityText(rarity)}
    </p>
  );
};

export default SkinRarityBadge;
