import { useState } from "react";
import { Calendar as CalendarIcon, Tag } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import SectionTitle from "@/components/shared/SectionTitle";
import EventCard from "@/components/shared/EventCard";
import { eventsContent } from "@/data/content";
import { Card, CardContent } from "@/components/ui/card";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", ...Array.from(new Set(eventsContent.upcomingEvents.map(e => e.category)))];
  
  const filteredEvents = selectedCategory === "all"
    ? eventsContent.upcomingEvents
    : eventsContent.upcomingEvents.filter(e => e.category === selectedCategory);

  // Calcular días hasta el próximo evento destacado
  const nextFeaturedEvent = eventsContent.upcomingEvents.find(e => e.featured);
  const daysUntilEvent = nextFeaturedEvent
    ? Math.ceil((new Date(nextFeaturedEvent.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{eventsContent.hero.title}</h1>
          <p className="text-xl opacity-90">{eventsContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Countdown to Next Event */}
      {nextFeaturedEvent && (
        <section className="py-12 bg-accent">
          <div className="section-container">
            <Card className="border-none shadow-elegant-lg">
              <CardContent className="p-8 text-center">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Próximo Evento Destacado
                </p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{nextFeaturedEvent.title}</h3>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  <span className="text-lg font-semibold">{nextFeaturedEvent.dateDisplay}</span>
                </div>
                {daysUntilEvent > 0 && (
                  <div className="inline-block bg-primary/10 px-6 py-3 rounded-full">
                    <span className="text-3xl font-bold text-primary">{daysUntilEvent}</span>
                    <span className="text-muted-foreground ml-2">
                      {daysUntilEvent === 1 ? "día" : "días"} para el evento
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Filter Categories */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="section-container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                onClick={() => setSelectedCategory(category)}
              >
                <Tag className="w-3 h-3 mr-1" />
                {category === "all" ? "Todos" : category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming">Próximos</TabsTrigger>
              <TabsTrigger value="past">Pasados</TabsTrigger>
            </TabsList>
            
            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    title={event.title}
                    dateDisplay={event.dateDisplay}
                    time={event.time}
                    location={event.location}
                    description={event.description}
                    image={event.image}
                    category={event.category}
                    featured={event.featured}
                    registerLink={event.registerLink}
                  />
                ))}
              </div>
              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No hay eventos en esta categoría
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {eventsContent.pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden group hover:shadow-elegant transition-shadow">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                        {event.title}
                      </h3>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        <span>{new Date(event.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Events;
