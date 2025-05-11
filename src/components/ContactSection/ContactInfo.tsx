
import ContactItem from "./ContactItem";
import SocialButton from "./SocialButton";

const ContactInfo = () => {
  return (
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
  );
};

export default ContactInfo;
