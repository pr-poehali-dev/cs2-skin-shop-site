
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cs-dark-blue pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-cs-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <span className="text-xl font-bold text-white">SkinMarket</span>
            </div>
            <p className="text-gray-400 mb-4">
              Лучший маркетплейс для покупки и продажи скинов CS2 по выгодным ценам
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-cs-purple/20 hover:text-cs-purple">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-cs-purple/20 hover:text-cs-purple">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-cs-purple/20 hover:text-cs-purple">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-cs-purple/20 hover:text-cs-purple">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Главная</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Магазин</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Коллекции</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Топ продаж</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">О нас</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Центр поддержки</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Часто задаваемые вопросы</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Как купить скин</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Правила и условия</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cs-purple transition">Политика конфиденциальности</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="h-5 w-5 text-cs-purple" />
                <span>support@skinmarket.ru</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="h-5 w-5 text-cs-purple" />
                <span>+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="h-5 w-5 text-cs-purple mt-1" />
                <span>Москва, ул. Киберспортивная, д. 42</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 SkinMarket. Все права защищены. CS2 и все связанные с ним товарные знаки являются собственностью Valve Corporation.
            </p>
            <div className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=40&h=25&auto=format" alt="Visa" className="h-8" />
              <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=40&h=25&auto=format" alt="MasterCard" className="h-8" />
              <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=40&h=25&auto=format" alt="Mir" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
