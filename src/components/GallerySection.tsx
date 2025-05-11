
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("classroom");

  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-sm rounded-full bg-primary/10">
            Фотогалерея
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Моменты школьной жизни
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Фотографии из жизни класса, наших мероприятий, проектов и творческих работ учеников
          </p>
        </div>

        <Tabs 
          defaultValue="classroom" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full max-w-6xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid min-w-[400px]" style={{ gridTemplateColumns: "repeat(4, minmax(0, 1fr))" }}>
              <TabsTrigger value="classroom">Класс</TabsTrigger>
              <TabsTrigger value="events">Мероприятия</TabsTrigger>
              <TabsTrigger value="projects">Проекты</TabsTrigger>
              <TabsTrigger value="creative">Творчество</TabsTrigger>
            </TabsList>
          </div>
          
          {galleryTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="animate-fade-in">
              <PhotoCarousel images={tab.images} />
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
                {tab.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover-scale"
                    onClick={() => {
                      // В реальном проекте здесь можно открыть лайтбокс или модальное окно с изображением
                      console.log("Open lightbox for image", index);
                    }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

type Image = {
  src: string;
  alt: string;
  description?: string;
};

type GalleryTab = {
  id: string;
  images: Image[];
};

const PhotoCarousel = ({ images }: { images: Image[] }) => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {images.slice(0, 5).map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="p-0 aspect-video relative rounded-xl overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {image.description && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                      <p>{image.description}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-4">
        <CarouselPrevious className="relative static translate-y-0 left-0" />
        <CarouselNext className="relative static translate-y-0 right-0" />
      </div>
    </Carousel>
  );
};

// Используем заполнители изображений для примера
const getImageUrl = (category: string, index: number) => {
  // Генерация URL для изображений, которые могут выглядеть как классная комната, мероприятия и т.д.
  const width = 800;
  const height = 600;
  return `https://source.unsplash.com/random/${width}x${height}/?classroom,school,education,${category}&sig=${index}`;
};

const generateImages = (category: string, count: number): Image[] => {
  return Array.from({ length: count }, (_, i) => ({
    src: getImageUrl(category, i),
    alt: `${category} изображение ${i + 1}`,
    description: i % 3 === 0 ? `${category} - захватывающий момент из жизни класса` : undefined,
  }));
};

const galleryTabs: GalleryTab[] = [
  {
    id: "classroom",
    images: generateImages("classroom", 10),
  },
  {
    id: "events",
    images: generateImages("school-event", 10),
  },
  {
    id: "projects",
    images: generateImages("school-project", 10),
  },
  {
    id: "creative",
    images: generateImages("kids-craft", 10),
  },
];

export default GallerySection;
