
export interface Skin {
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

export const rarityMap = {
  'covert': 'Тайное',
  'classified': 'Засекреченное',
  'restricted': 'Запрещенное',
  'mil-spec': 'Армейское',
  'industrial': 'Промышленное',
  'consumer': 'Ширпотреб'
};

export const getRarityText = (rarity: Skin['rarity']): string => {
  return rarityMap[rarity];
};
