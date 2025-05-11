
import { Badge } from "@/components/ui/badge";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
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
          <ContactInfo />
          <div>
            <h3 className="text-2xl font-semibold mb-6">Напишите мне</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
