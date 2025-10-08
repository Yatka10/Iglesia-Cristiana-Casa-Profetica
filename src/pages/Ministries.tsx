import { useState } from "react";
import { Clock, User, Mail, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/shared/SectionTitle";
import { ministriesContent } from "@/data/content";
import youthImage from "@/assets/youth-ministry.jpg";
import childrenImage from "@/assets/children-ministry.jpg";
import worshipImage from "@/assets/worship-ministry.jpg";
import outreachImage from "@/assets/outreach-ministry.jpg";

const imageMap: Record<string, string> = {
  "youth-ministry.jpg": youthImage,
  "children-ministry.jpg": childrenImage,
  "worship-ministry.jpg": worshipImage,
  "outreach-ministry.jpg": outreachImage,
};

const Ministries = () => {
  const [selectedMinistry, setSelectedMinistry] = useState<typeof ministriesContent.ministries[0] | null>(null);

  const getImage = (imagePath: string) => {
    return imageMap[imagePath] || imagePath;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{ministriesContent.hero.title}</h1>
          <p className="text-xl opacity-90">{ministriesContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministriesContent.ministries.map((ministry) => (
              <Card
                key={ministry.id}
                className="overflow-hidden group hover:shadow-elegant-lg transition-all cursor-pointer"
                onClick={() => setSelectedMinistry(ministry)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={getImage(ministry.image)}
                    alt={ministry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
                    {ministry.name}
                  </h3>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {ministry.shortDescription}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>{ministry.schedule}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      <span>{ministry.leader}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Ver Detalles
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministry Detail Dialog */}
      {selectedMinistry && (
        <Dialog open={!!selectedMinistry} onOpenChange={() => setSelectedMinistry(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-3xl">{selectedMinistry.name}</DialogTitle>
            </DialogHeader>
            
            <div className="space-y-6">
              <img
                src={getImage(selectedMinistry.image)}
                alt={selectedMinistry.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedMinistry.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      <span className="font-semibold">Horario</span>
                    </div>
                    <p className="text-muted-foreground">{selectedMinistry.schedule}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <User className="w-5 h-5 mr-2 text-primary" />
                      <span className="font-semibold">Líder</span>
                    </div>
                    <p className="text-muted-foreground">{selectedMinistry.leader}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4">Actividades</h4>
                <div className="space-y-2">
                  {selectedMinistry.activities.map((activity, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    <span className="font-semibold">Contacto</span>
                  </div>
                  <a
                    href={`mailto:${selectedMinistry.contact}`}
                    className="text-primary hover:underline"
                  >
                    {selectedMinistry.contact}
                  </a>
                </CardContent>
              </Card>
              
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Quiero Unirme a Este Ministerio
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Ministries;
