
import Icon from "@/components/ui/icon";
import { Shield, Clock, CreditCard, BarChart3 } from "lucide-react";

const features = [
  {
    icon: "Shield",
    title: "Гарантия безопасности",
    description: "Все сделки защищены, мы используем только официальные способы передачи скинов"
  },
  {
    icon: "Clock",
    title: "Моментальная доставка",
    description: "Получайте скины сразу после оплаты без долгого ожидания"
  },
  {
    icon: "CreditCard",
    title: "Удобная оплата",
    description: "Принимаем различные способы оплаты, включая карты и электронные кошельки"
  },
  {
    icon: "BarChart3",
    title: "Лучшие цены",
    description: "Регулярные скидки и акции на популярные скины CS2"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Почему выбирают нас</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Мы предлагаем лучший сервис для покупки скинов CS2 с гарантией качества и безопасности
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg border border-border/50 hover:border-cs-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-cs-purple/5"
            >
              <div className="w-12 h-12 rounded-full bg-cs-purple/20 flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="h-6 w-6 text-cs-purple" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 md:p-8 bg-gradient-to-r from-cs-dark-blue to-cs-dark-blue/50 rounded-lg border border-cs-purple/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Более 50,000 довольных клиентов</h3>
              <p className="text-gray-300">Присоединяйтесь к нашему сообществу и получите лучшие скины CS2</p>
            </div>
            
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-cs-purple">56,720+</div>
                <div className="text-sm text-gray-400">Скинов</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-cs-purple">99.8%</div>
                <div className="text-sm text-gray-400">Успешных сделок</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-cs-purple">24/7</div>
                <div className="text-sm text-gray-400">Поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
