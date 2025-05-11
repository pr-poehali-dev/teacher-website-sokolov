
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-sm rounded-full bg-primary/10">
            Образовательные ресурсы
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Полезные материалы
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Подборка учебных материалов, методических рекомендаций и интерактивных заданий 
            для учеников и их родителей
          </p>
        </div>

        <Tabs defaultValue="students" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 min-w-[400px]">
              <TabsTrigger value="students">Для учеников</TabsTrigger>
              <TabsTrigger value="parents">Для родителей</TabsTrigger>
              <TabsTrigger value="methodics">Методические</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="students" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="parents" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {parentResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="methodics" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {methodicResources.map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 bg-accent/50 rounded-2xl p-8 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Нужны дополнительные материалы?</h3>
              <p className="text-muted-foreground">
                Не нашли нужный материал? Напишите мне, и я помогу подобрать то, что нужно
                для успешного обучения вашего ребенка.
              </p>
            </div>
            <Button size="lg" className="px-8 py-6 text-lg font-medium gap-2 shadow-md">
              <Icon name="Mail" />
              Запросить материалы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

type Resource = {
  title: string;
  description: string;
  icon: string;
  category: string;
  link: string;
  isPremium?: boolean;
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md hover-scale">
      <CardHeader className="p-6 pb-3 flex flex-row items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon name={resource.icon} className="h-6 w-6 text-primary" />
        </div>
        <div>
          <CardTitle className="text-xl mb-1">{resource.title}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="outline" className="bg-secondary/50">
              {resource.category}
            </Badge>
            {resource.isPremium && (
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
                Премиум
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-3">
        <p className="text-muted-foreground">{resource.description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <Button variant="link" className="p-0 h-auto text-primary gap-1">
          Открыть материал
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const studentResources: Resource[] = [
  {
    title: "Увлекательная грамматика",
    description: "Интерактивные упражнения для закрепления правил русского языка с элементами игры.",
    icon: "BookText",
    category: "Русский язык",
    link: "#"
  },
  {
    title: "Математика в картинках",
    description: "Наглядные материалы для изучения базовых математических понятий и решения задач.",
    icon: "Calculator",
    category: "Математика",
    link: "#"
  },
  {
    title: "Природа вокруг нас",
    description: "Красочные презентации и задания по окружающему миру с виртуальными экскурсиями.",
    icon: "Leaf",
    category: "Окружающий мир",
    link: "#",
    isPremium: true
  },
];

const parentResources: Resource[] = [
  {
    title: "Как помочь ребенку с уроками",
    description: "Советы и рекомендации для родителей по эффективной помощи ребенку в обучении.",
    icon: "HelpCircle",
    category: "Рекомендации",
    link: "#"
  },
  {
    title: "Режим дня младшего школьника",
    description: "Оптимальное распределение времени для учебы, отдыха и развития ребенка.",
    icon: "Clock",
    category: "Организация",
    link: "#"
  },
  {
    title: "Развитие усидчивости и внимания",
    description: "Практические упражнения для развития важных навыков обучения в домашних условиях.",
    icon: "Brain",
    category: "Психология",
    link: "#",
    isPremium: true
  },
];

const methodicResources: Resource[] = [
  {
    title: "Конспекты уроков 1 класс",
    description: "Подробные конспекты занятий с методическими рекомендациями и раздаточными материалами.",
    icon: "FileText",
    category: "Конспекты",
    link: "#"
  },
  {
    title: "Проектная деятельность",
    description: "Методика организации проектной работы с младшими школьниками, примеры проектов.",
    icon: "Lightbulb",
    category: "Проекты",
    link: "#"
  },
  {
    title: "Инклюзивное образование",
    description: "Материалы по работе с детьми с особыми образовательными потребностями.",
    icon: "Heart",
    category: "Инклюзия",
    link: "#",
    isPremium: true
  },
];

export default ResourcesSection;
