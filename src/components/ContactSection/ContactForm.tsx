
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "@/components/ui/use-toast";
import Icon from "@/components/ui/icon";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
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
    
    // Имитация отправки формы
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
  );
};

export default ContactForm;
