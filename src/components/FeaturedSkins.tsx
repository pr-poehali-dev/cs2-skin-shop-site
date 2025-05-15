
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { StarIcon, ShoppingCart, Heart, TrendingUp } from "lucide-react";
import { useState } from "react";

interface Skin {
  id: number;
  name: string;
  weapon: string;
  image: string;
  price: number;
  oldPrice?: number;
  rating: number;
  rarity: 'covert' | 'classified' | 'restricted' | 'mil-spec' | 'industrial' | 'consumer';
  isFeatured?: boolean;
  discount?: number;
}

const skins: Skin[] = [
  {
    id: 1,
    name: "Азимов",
    weapon: "AWP",
    image: "https://images.unsplash.com/photo-1662950942322-b5e796f27ce3?auto=format&fit=crop&w=300&h=200",
    price: 18500,
    oldPrice: 21000,
    rating: 4.9,
    rarity: "covert",
    isFeatured: true,
    discount: 12
  },
  {
    id: 2,
    name: "Градиент",
    weapon: "Glock-18",
    image: "https://images.unsplash.com/photo-1608346128025-1896b97a6fa7?auto=format&fit=crop&w=300&h=200",
    price: 3200,
    rating: 4.7,
    rarity: "classified"
  },
  {
    id: 3,
    name: "Пламя",
    weapon: "AK-47",
    image: "https://images.unsplash.com/photo-1614027164847-1b28795d275f?auto=format&fit=crop&w=300&h=200",
    price: 34500,
    oldPrice: 36000,
    rating: 5.0,
    rarity: "covert",
    isFeatured: true,
    discount: 4
  },
  {
    id: 4,
    name: "Неоновый гонщик",
    weapon: "USP-S",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=300&h=200",
    price: 7800,
    rating: 4.6,
    rarity: "restricted"
  },
  {
    id: 5,
    name: "Буйство красок",
    weapon: "M4A4",
    image: "https://images.unsplash.com/photo-1669023268253-d0f8fb415da1?auto=format&fit=crop&w=300&h=200",
    price: 4300,
    rating: 4.5,
    rarity: "mil-spec"
  },
  {
    id: 6,
    name: "Кибербезопасность",
    weapon: "P250",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&h=200",
    price: 1200,
    rating: 4.2,
    rarity: "industrial"
  },
  {
    id: 7,
    name: "Гипер зверь",
    weapon: "M4A1-S",
    image: "https://images.unsplash.com/photo-1576498716547-5c2ab2e9de26?auto=format&fit=crop&w=300&h=200",
    price: 5900,
    rating: 4.8,
    rarity: "classified"
  },
  {
    id: 8,
    name: "Драконий огонь",
    weapon: "Desert Eagle",
    image: "https://images.unsplash.com/photo-1569144157591-c60f3f82f137?auto=format&fit=crop&w=300&h=200",
    price: 9700,
    oldPrice: 11200,
    rating: 4.9,
    rarity: "classified",
    discount: 13
  }
];

const getRarityText = (rarity: Skin['rarity']) => {
  const rarityMap = {
    'covert': 'Тайное',
    'classified': 'Засекреченное',
    'restricted': 'Запрещенное',
    'mil-spec': 'Армейское',
    'industrial': 'Промышленное',
    'consumer': 'Ширпотреб'
  };
  
  return rarityMap[rarity];
};

const FeaturedSkins = () => {
  const [favoriteSkins, setFavoriteSkins] = useState<number[]>([]);
  
  const toggleFavorite = (id: number) => {
    if (favoriteSkins.includes(id)) {
      setFavoriteSkins(favoriteSkins.filter(skinId => skinId !== id));
    } else {
      setFavoriteSkins([...favoriteSkins, id]);
    }
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-cs-dark-blue to-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white">Популярные скины</h2>
            <p className="text-gray-400 mt-2">Отборные скины для вашей коллекции</p>
          </div>
          <div className="hidden md:flex gap-4">
            <Button variant="outline" className="border-cs-purple/50 hover:border-cs-purple text-white">
              Все скины
            </Button>
            <Button variant="outline" className="border-cs-purple/50 hover:border-cs-purple text-white">
              <TrendingUp className="mr-2 h-4 w-4" />
              Новинки
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skins.map((skin) => (
            <div key={skin.id} className="skin-card group">
              {skin.discount && (
                <Badge className="absolute top-3 right-3 z-10 bg-red-500 text-white">
                  -{skin.discount}%
                </Badge>
              )}
              
              <div className="relative overflow-hidden h-48">
                <img 
                  src={skin.image} 
                  alt={`${skin.weapon} | ${skin.name}`} 
                  className="skin-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <div>
                      <p className={`text-sm font-medium rarity-${skin.rarity}`}>
                        {getRarityText(skin.rarity)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-sm">{skin.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="skin-card-content p-4">
                <h3 className="font-medium text-white">
                  {skin.weapon} | <span className="text-cs-purple">{skin.name}</span>
                </h3>
                
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center">
                    {skin.oldPrice ? (
                      <div className="flex flex-col">
                        <span className="text-red-500 font-bold">₽{skin.price.toLocaleString()}</span>
                        <span className="text-gray-400 text-sm line-through">₽{skin.oldPrice.toLocaleString()}</span>
                      </div>
                    ) : (
                      <span className="text-white font-medium">₽{skin.price.toLocaleString()}</span>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-cs-purple"
                      onClick={() => toggleFavorite(skin.id)}
                    >
                      <Heart 
                        className={`h-5 w-5 ${favoriteSkins.includes(skin.id) ? 'fill-cs-purple text-cs-purple' : ''}`} 
                      />
                    </Button>
                    
                    <Button size="sm" className="bg-cs-purple hover:bg-cs-purple/90">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button className="bg-cs-purple hover:bg-cs-purple/90 px-8 button-glow">
            Смотреть все скины
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSkins;
