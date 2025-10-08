import { useState } from "react";
import { Calendar, User, Clock, BookOpen, Search, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SectionTitle from "@/components/shared/SectionTitle";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { sermonsContent } from "@/data/content";

const Sermons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeries, setSelectedSeries] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<{ url: string; title: string } | null>(null);

  const filteredSermons = sermonsContent.sermons.filter(sermon => {
    const matchesSearch = 
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeries = selectedSeries === "all" || sermon.series === selectedSeries;
    
    return matchesSearch && matchesSeries;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{sermonsContent.hero.title}</h1>
          <p className="text-xl opacity-90">{sermonsContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-muted/30 border-b">
        <div className="section-container">
          <div className="max-w-3xl mx-auto space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar prédicas por título, predicador o tema..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Series Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                variant={selectedSeries === "all" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/10 transition-colors"
                onClick={() => setSelectedSeries("all")}
              >
                Todas las series
              </Badge>
              {sermonsContent.series.map((series) => (
                <Badge
                  key={series}
                  variant={selectedSeries === series ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10 transition-colors"
                  onClick={() => setSelectedSeries(series)}
                >
                  {series}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSermons.map((sermon) => (
              <Card 
                key={sermon.id} 
                className="overflow-hidden group hover:shadow-elegant-lg transition-all cursor-pointer"
                onClick={() => setSelectedVideo({ url: sermon.videoUrl, title: sermon.title })}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-accent-foreground ml-1" />
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {sermon.duration}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs">
                      {sermon.series}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {sermon.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {sermon.description}
                  </p>
                  
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-primary" />
                      <span>{sermon.preacher}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>{new Date(sermon.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-primary" />
                      <span>{sermon.scripture}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sermon.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVideo({ url: sermon.videoUrl, title: sermon.title });
                    }}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Ver Prédica
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <VideoPlayer
            videoUrl={selectedVideo?.url || ""}
            title={selectedVideo?.title || ""}
            isOpen={!!selectedVideo}
            onClose={() => setSelectedVideo(null)}
          />

          {filteredSermons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron prédicas con los filtros seleccionados
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section Info */}
      <section className="py-12 bg-muted/30">
        <div className="section-container">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">¿Buscas una prédica específica?</h3>
              <p className="text-muted-foreground mb-6">
                Visita nuestro canal de YouTube para ver todas nuestras prédicas completas 
                y suscríbete para no perderte ningún mensaje.
              </p>
              <a 
                href="https://youtube.com/@casaprofetica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver en YouTube
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Sermons;
