
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const SkinsHeader: React.FC = () => {
  return (
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
  );
};

export default SkinsHeader;
