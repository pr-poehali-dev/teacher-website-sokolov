
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="space-y-4 md:max-w-xs">
            <Link to="/" className="flex items-center gap-2">
              <div className="rounded-full bg-white p-2">
                <Icon name="BookOpen" className="h-5 w-5 text-primary" />
              </div>
              <span className="font-playfair text-xl font-semibold">Соколова П.А.</span>
            </Link>
            <p>
              Учитель начальных классов с индивидуальным подходом к каждому ученику.
              Моя цель — помочь детям полюбить учиться и открывать мир.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Icon name="Facebook" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Icon name="Instagram" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Icon name="Twitter" className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9">
                <Icon name="Telegram" className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:underline">Главная</Link>
                </li>
                <li>
                  <Link to="/#about" className="hover:underline">Обо мне</Link>
                </li>
                <li>
                  <Link to="/#resources" className="hover:underline">Ресурсы</Link>
                </li>
                <li>
                  <Link to="/#gallery" className="hover:underline">Галерея</Link>
                </li>
                <li>
                  <Link to="/#contact" className="hover:underline">Контакты</Link>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Ресурсы</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">Для учеников</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Для родителей</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Методические</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Учебные планы</a>
                </li>
              </ul>
            </div>
            
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h3 className="font-semibold text-lg">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  <span>sokolova.pa@school.edu</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  <span>г. Москва, ул. Школьная, 123</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <Separator className="my-6 bg-white/20" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} Соколова Полина Александровна. Все права защищены.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:underline">Политика конфиденциальности</a>
            <a href="#" className="hover:underline">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
