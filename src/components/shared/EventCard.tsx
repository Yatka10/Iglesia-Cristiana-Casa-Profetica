import { Calendar, Clock, MapPin, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  dateDisplay: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  registerLink: string;
}

const EventCard = ({
  title,
  dateDisplay,
  time,
  location,
  description,
  image,
  category,
  featured = false,
  registerLink,
}: EventCardProps) => {
  return (
    <Card className={`overflow-hidden group hover:shadow-elegant-lg transition-all duration-300 ${
      featured ? "border-accent border-2" : ""
    }`}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {featured && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            Destacado
          </Badge>
        )}
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          <Tag className="w-3 h-3 mr-1" />
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span>{dateDisplay}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2 text-primary" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Más Información
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventCard;
