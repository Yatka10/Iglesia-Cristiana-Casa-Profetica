import { Building2, Church, CreditCard, Copy, CheckCircle } from "lucide-react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "@/components/shared/SectionTitle";
import { donateContent } from "@/data/content";
import { useToast } from "@/hooks/use-toast";

const iconMap = {
  Building2,
  Church,
  CreditCard,
};

const Donate = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({
      title: "Copiado",
      description: `${field} copiado al portapapeles`,
    });
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{donateContent.hero.title}</h1>
          <p className="text-xl opacity-90">{donateContent.hero.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionTitle title={donateContent.intro.title} centered />
            <p className="text-lg text-muted-foreground leading-relaxed">
              {donateContent.intro.description}
            </p>
          </div>

          {/* Bible Verses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {donateContent.bibleVerses.map((verse, idx) => (
              <Card key={idx} className="bg-primary/5 border-primary/20 hover:shadow-elegant transition-shadow">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic mb-3">"{verse.text}"</p>
                  <p className="text-primary font-semibold text-right">— {verse.reference}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <SectionTitle title="Formas de Ofrendar" subtitle="Elige tu método" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donateContent.methods.map((method) => {
              const Icon = iconMap[method.icon as keyof typeof iconMap];
              return (
                <Card
                  key={method.title}
                  className="hover:shadow-elegant-lg transition-all"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3">{method.title}</h3>
                    <p className="text-muted-foreground text-center mb-6">
                      {method.description}
                    </p>

                    {method.details && (
                      <div className="space-y-3 bg-muted/50 p-4 rounded-lg">
                        {Object.entries(method.details).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center text-sm">
                            <span className="text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold">{value}</span>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0"
                                onClick={() => copyToClipboard(value, key)}
                              >
                                {copiedField === key ? (
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title={donateContent.impact.title} centered />
            <div className="space-y-8">
              {donateContent.impact.areas.map((area) => (
                <div key={area.title}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-bold text-lg">{area.title}</h4>
                    <span className="text-primary font-bold text-lg">{area.percentage}%</span>
                  </div>
                  <Progress value={area.percentage} className="h-3 mb-2" />
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <SectionTitle title="Preguntas Frecuentes" centered />
            <Accordion type="single" collapsible className="space-y-4">
              {donateContent.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-background">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">¡Gracias por tu Generosidad!</h2>
            <p className="text-xl mb-8 opacity-90">
              Cada ofrenda, sin importar el monto, es una semilla que produce fruto eterno. 
              Dios bendice al dador alegre.
            </p>
            <p className="text-lg italic opacity-80">
              "No se trata de que otros encuentren alivio mientras que ustedes sufren, 
              sino de que haya igualdad." - 2 Corintios 8:13
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
