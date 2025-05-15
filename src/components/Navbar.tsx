
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ShoppingCart, Search, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cs-dark-blue/95 backdrop-blur-sm border-b border-border/50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-cs-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <span className="text-xl font-bold text-white">SkinMarket</span>
          </a>
        </div>

        <nav className={`
          ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-cs-dark-blue shadow-lg p-4 animate-fadeIn' : 'hidden'}
          md:flex md:static md:p-0 md:w-auto md:bg-transparent md:shadow-none
        `}>
          <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <li>
              <a href="#" className="text-white hover:text-cs-purple transition font-medium">Магазин</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-cs-purple transition font-medium">Коллекции</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-cs-purple transition font-medium">Топ продаж</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-cs-purple transition font-medium">О нас</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Поиск скинов" 
              className="pr-8 h-9 w-[180px] lg:w-[250px] rounded-md bg-secondary border-border/50 text-white focus:ring-cs-purple focus:ring-2 focus:border-transparent transition" 
            />
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Search className="h-5 w-5 md:hidden" />
            <ShoppingCart className="h-5 w-5 hidden md:block" />
          </Button>
          <Button className="hidden md:flex bg-cs-purple hover:bg-cs-purple/90 button-glow">
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
