import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowRight } from "lucide-react";

interface MinistryCardProps {
  name: string;
  shortDescription: string;
  schedule: string;
  leader: string;
  image: string;
  onClick?: () => void;
}

const MinistryCard = ({
  name,
  shortDescription,
  schedule,
  leader,
  image,
  onClick,
}: MinistryCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-elegant-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
          {name}
        </h3>
      </div>
      
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {shortDescription}
        </p>
        
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center text-muted-foreground">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>{schedule}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <User className="w-4 h-4 mr-2 text-primary" />
            <span>{leader}</span>
          </div>
        </div>
        
        <Button
          variant="ghost"
          className="w-full group/btn hover:bg-primary/10 hover:text-primary"
        >
          Ver Más
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default MinistryCard;
