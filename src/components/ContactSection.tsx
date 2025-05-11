
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: "", email: "", message: "" });
      
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <Badge variant="outline" className="mb-3 px-3 py-1 text-sm rounded-full bg-primary/10">
            Контакты
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Свяжитесь со мной
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Если у вас есть вопросы, предложения или вы хотите обсудить успехи вашего ребенка,
            напишите мне, и я обязательно отвечу
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
            
            <div className="space-y-6">
              <ContactItem 
                icon="MapPin" 
                title="Адрес"
                detail="г. Москва, ул. Школьная, д. 123"
              />
              <ContactItem 
                icon="Mail" 
                title="Email"
                detail="sokolova.pa@school.edu"
              />
              <ContactItem 
                icon="Phone" 
                title="Телефон"
                detail="+7 (999) 123-45-67"
              />
              <ContactItem 
                icon="Clock" 
                title="Часы приема"
                detail="Вторник, четверг: 14:00 - 16:00"
              />
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <SocialButton icon="Facebook" />
                <SocialButton icon="Instagram" />
                <SocialButton icon="Twitter" />
                <SocialButton icon="Telegram" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Напишите мне</h3>
            
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Введите ваше имя"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Введите ваш email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Введите ваше сообщение"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Alert className="bg-secondary/50">
                    <AlertDescription className="text-sm">
                      Все сообщения конфиденциальны. Обычно я отвечаю в течение 24 часов.
                    </AlertDescription>
                  </Alert>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : "Отправить сообщение"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon, title, detail }: { icon: string; title: string; detail: string }) => {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon name={icon} className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="text-base font-medium">{title}</h4>
        <p className="text-muted-foreground">{detail}</p>
      </div>
    </div>
  );
};

const SocialButton = ({ icon }: { icon: string }) => {
  return (
    <Button 
      variant="outline" 
      size="icon" 
      className="rounded-full h-10 w-10"
    >
      <Icon name={icon} className="h-5 w-5" />
    </Button>
  );
};

export default ContactSection;
