
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-sm rounded-full bg-primary/10">
            О педагоге
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Мой путь в образовании
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Я верю, что начальная школа — это фундамент будущих успехов ребенка. Моя миссия — создавать 
            вдохновляющую и поддерживающую среду, где каждый ученик может развиваться и расти.
          </p>
        </div>

        <Tabs defaultValue="biography" className="w-full max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="biography">Биография</TabsTrigger>
            <TabsTrigger value="education">Образование</TabsTrigger>
            <TabsTrigger value="approach">Подход к обучению</TabsTrigger>
          </TabsList>
          
          <TabsContent value="biography" className="space-y-6">
            <p className="text-lg">
              С детства я мечтала стать учителем, и вот уже год как воплощаю свою мечту в жизнь. 
              Работа с детьми младшего школьного возраста позволяет мне наблюдать, как формируется личность, 
              и вносить свой вклад в этот удивительный процесс.
            </p>
            <p>
              Как молодой специалист, я постоянно совершенствую свои навыки и методики преподавания, 
              посещаю курсы повышения квалификации и профессиональные конференции, где общаюсь с коллегами 
              и обмениваюсь опытом.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 items-center mb-4">
                    <Icon name="Award" className="text-primary h-5 w-5" />
                    <h3 className="text-lg font-semibold">Достижения</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Участник городского конкурса молодых педагогов (2025)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="CheckCircle" className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                      <span>Организатор внутришкольных тематических мероприятий</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-3 items-center mb-4">
                    <Icon name="Heart" className="text-primary h-5 w-5" />
                    <h3 className="text-lg font-semibold">Увлечения</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="BookOpen" className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Детская психология и педагогика</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Palette" className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Творческие мастер-классы и рукоделие</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Music" className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span>Игра на фортепиано</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">Педагогический университет</h3>
                <p className="text-muted-foreground">2020 — 2024</p>
                <p className="mt-2">
                  Бакалавр педагогики, специализация "Начальное образование". Закончила университет с отличием,
                  дипломная работа посвящена интерактивным методам обучения.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">Курсы повышения квалификации</h3>
                <p className="text-muted-foreground">2024</p>
                <p className="mt-2">
                  "Современные образовательные технологии в начальной школе", 72 часа.
                </p>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                <h3 className="text-xl font-semibold">Профессиональная переподготовка</h3>
                <p className="text-muted-foreground">В процессе</p>
                <p className="mt-2">
                  "Детская психология: диагностика и коррекция развития младших школьников"
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="approach">
            <div className="space-y-6">
              <p className="text-lg">
                В своей педагогической практике я придерживаюсь следующих принципов:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {principles.map((principle, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-primary flex items-center justify-center">
                      <Icon name={principle.icon} className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary/5 rounded-lg p-6 mt-8">
                <blockquote className="italic text-lg border-l-4 border-primary pl-4">
                  "Каждый ребенок талантлив. Задача учителя — помочь раскрыть и развить этот талант."
                </blockquote>
                <p className="text-right mt-2 font-semibold">— Мое педагогическое кредо</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const principles = [
  {
    title: "Дифференцированный подход",
    description: "Учитываю темп и стиль обучения каждого ученика, предлагая разноуровневые задания.",
    icon: "Users"
  },
  {
    title: "Интерактивность",
    description: "Использую игровые и интерактивные методы для повышения вовлеченности в обучение.",
    icon: "Gamepad2"
  },
  {
    title: "Позитивная мотивация",
    description: "Создаю атмосферу успеха, где каждый ребенок чувствует себя способным и ценным.",
    icon: "Star"
  },
  {
    title: "Экологичность",
    description: "Учу детей бережному отношению к природе и ответственному потреблению.",
    icon: "Leaf"
  }
];

export default AboutSection;
