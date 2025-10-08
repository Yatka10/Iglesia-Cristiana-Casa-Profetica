import { useState } from "react";
import { X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import SectionTitle from "@/components/shared/SectionTitle";
import { galleryContent } from "@/data/content";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryContent.images[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");

  const filteredImages = selectedCategory === "Todos"
    ? galleryContent.images
    : galleryContent.images.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{galleryContent.hero.title}</h1>
          <p className="text-xl opacity-90">{galleryContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <Tabs defaultValue="Todos" className="w-full" onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12">
              {galleryContent.categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-0">
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {filteredImages.map((image) => (
                  <div
                    key={image.id}
                    className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.url}
                      alt={image.title}
                      loading="lazy"
                      className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold text-lg">{image.title}</h3>
                      <p className="text-white/80 text-sm">
                        {new Date(image.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No hay imágenes en esta categoría
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Lightbox Dialog */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            <div className="relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/80">
                  {new Date(selectedImage.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} • {selectedImage.category}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Gallery;
