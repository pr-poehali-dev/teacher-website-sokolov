
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-accent/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Соколова Полина Александровна
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Учитель начальных классов
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Помогаю детям открывать мир знаний, развиваться и находить радость в обучении.
              С любовью к профессии и индивидуальным подходом к каждому ребенку.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <Icon name="BookOpen" size={18} />
                Методические материалы
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Mail" size={18} />
                Связаться со мной
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <Card className="overflow-hidden border-none shadow-xl">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src="https://cdn.poehali.dev/files/5a32c467-0f51-4353-81e8-e1e3be5ccab4.png" 
                    alt="Соколова Полина Александровна в классе" 
                    className="w-full h-auto object-cover aspect-[4/5] rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-sm font-medium">Стаж работы: 1 год</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                        Начальные классы
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm">
                        Творческий подход
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover-scale">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Индивидуальный подход",
    description: "Учитываю особенности и темп обучения каждого ребенка",
    icon: "Users",
  },
  {
    title: "Современные методики",
    description: "Применяю инновационные образовательные технологии",
    icon: "Lightbulb",
  },
  {
    title: "Творческое развитие",
    description: "Стимулирую творческие способности и любознательность",
    icon: "Palette",
  },
  {
    title: "Поддержка родителей",
    description: "Активно сотрудничаю с родителями для лучших результатов",
    icon: "Heart",
  },
];

export default HeroSection;
