import { BookOpen, Music, Users, Heart, Star, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/shared/SectionTitle";
import { aboutContent } from "@/data/content";
import pastorImage from "@/assets/pastor.jpg";

const iconMap = {
  BookOpen,
  Music,
  Users,
  Heart,
  Star,
  Globe,
};

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{aboutContent.hero.title}</h1>
          <p className="text-xl opacity-90">{aboutContent.hero.subtitle}</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title={aboutContent.history.title} centered />
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              {aboutContent.history.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="shadow-elegant hover:shadow-elegant-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Star className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{aboutContent.vision.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {aboutContent.vision.description}
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-elegant hover:shadow-elegant-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{aboutContent.mission.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {aboutContent.mission.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionTitle title="Nuestros Valores" subtitle="Lo que nos define" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aboutContent.values.map((value) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <Card key={value.title} className="text-center hover:shadow-elegant-lg transition-shadow group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <SectionTitle title="Nuestro Equipo" subtitle="Liderazgo pastoral" centered />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {aboutContent.team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-elegant-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image === "pastor.jpg" ? pastorImage : member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-elegant"
                  />
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle title={aboutContent.beliefs.title} centered />
            <div className="space-y-4">
              {aboutContent.beliefs.items.map((belief, idx) => (
                <Card key={idx} className="hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-muted-foreground flex-1">{belief}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
