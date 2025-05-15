import React, { useState } from "react";
import { skins } from "@/data/skinsData";
import SkinCard from "./skins/SkinCard";
import SkinsHeader from "./skins/SkinsHeader";
import SkinsFooter from "./skins/SkinsFooter";

const FeaturedSkins: React.FC = () => {
  const [favoriteSkins, setFavoriteSkins] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    if (favoriteSkins.includes(id)) {
      setFavoriteSkins(favoriteSkins.filter((skinId) => skinId !== id));
    } else {
      setFavoriteSkins([...favoriteSkins, id]);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-cs-dark-blue to-background">
      <div className="container mx-auto px-4">
        <SkinsHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skins.map((skin) => (
            <SkinCard
              key={skin.id}
              skin={skin}
              isFavorite={favoriteSkins.includes(skin.id)}
              onFavoriteToggle={toggleFavorite}
            />
          ))}
        </div>

        <SkinsFooter />
      </div>
    </section>
  );
};

export default FeaturedSkins;
