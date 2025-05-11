
import Icon from "@/components/ui/icon";

interface ContactItemProps {
  icon: string;
  title: string;
  detail: string;
}

const ContactItem = ({ icon, title, detail }: ContactItemProps) => {
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

export default ContactItem;
