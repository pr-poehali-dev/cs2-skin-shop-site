
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-cs-dark-blue py-12 md:py-24">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cs-purple/10 to-transparent"></div>
      <div className="absolute -right-24 -top-24 w-96 h-96 bg-cs-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-24 -bottom-24 w-96 h-96 bg-cs-purple/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-white">
              Лучшие <span className="text-cs-purple">скины CS2</span> по выгодным ценам
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto md:mx-0">
              Огромный выбор ножей, перчаток и оружия для вашей коллекции.
              Моментальная доставка в ваш инвентарь!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-cs-purple hover:bg-cs-purple/90 font-medium px-8 button-glow">
                Начать покупки
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-cs-purple/50 hover:border-cs-purple text-white">
                Смотреть коллекции
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center md:justify-start gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-300 text-sm">4,834 онлайн</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cs-purple"></div>
                <span className="text-gray-300 text-sm">56,720+ скинов</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cs-purple/30 to-transparent rounded-full blur-lg animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1624587248318-113f81993cca?auto=format&fit=crop&w=400&h=400" 
                alt="CS2 Knife Skin" 
                className="relative z-10 object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
