
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

interface SocialButtonProps {
  icon: string;
}

const SocialButton = ({ icon }: SocialButtonProps) => {
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

export default SocialButton;
