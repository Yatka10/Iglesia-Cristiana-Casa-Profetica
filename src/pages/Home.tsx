import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, MapPin, ArrowRight, Heart, Users, BookOpen } from "lucide-react";
import SectionTitle from "@/components/shared/SectionTitle";
import MinistryCard from "@/components/shared/MinistryCard";
import { homeContent, siteInfo, testimonials, ministriesContent, eventsContent } from "@/data/content";
import heroImage from "@/assets/hero-church.jpg";
import pastorImage from "@/assets/pastor.jpg";

const Home = () => {
  const featuredEvents = eventsContent.upcomingEvents.filter(e => e.featured).slice(0, 3);
  const featuredMinistries = ministriesContent.ministries.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="section-container relative z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {homeContent.hero.title}
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-95">
            {homeContent.hero.subtitle}
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            {homeContent.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-glow"
              >
                {homeContent.hero.ctaText}
              </Button>
            </Link>
            <Link to="/nosotros">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 text-lg px-8 py-6 backdrop-blur-sm"
              >
                {homeContent.hero.secondaryCta}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={pastorImage}
                alt={homeContent.welcome.pastorName}
                className="rounded-2xl shadow-elegant-lg w-full"
              />
            </div>
            <div>
              <SectionTitle
                subtitle={homeContent.welcome.title}
                title={homeContent.welcome.subtitle}
              />
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {homeContent.welcome.message}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-lg">{homeContent.welcome.pastorName}</p>
                  <p className="text-sm text-muted-foreground">{homeContent.welcome.pastorTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Times */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container">
          <SectionTitle
            title="Horarios de Servicio"
            subtitle="Únete a nosotros"
            centered
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteInfo.schedules.map((schedule) => (
              <Card key={schedule.day} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-primary-foreground">{schedule.day}</h3>
                  {schedule.services.map((service, idx) => (
                    <div key={idx} className="mb-3 last:mb-0">
                      <p className="font-semibold text-primary-foreground">{service.name}</p>
                      <div className="flex items-center justify-center text-sm opacity-90 mt-1 text-primary-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{service.time}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="Próximos Eventos" subtitle="Lo que viene" />
            <Link to="/eventos">
              <Button variant="outline">
                Ver Todos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden group hover:shadow-elegant-lg transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      <span>{event.dateDisplay}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Link to="/eventos">
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Más Información
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ministries Preview */}
      <section className="py-20 bg-muted/30">
        <div className="section-container">
          <div className="flex justify-between items-end mb-12">
            <SectionTitle title="Nuestros Ministerios" subtitle="Encuentra tu lugar" />
            <Link to="/ministerios">
              <Button variant="outline">
                Ver Todos
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMinistries.map((ministry) => (
              <MinistryCard
                key={ministry.id}
                name={ministry.name}
                shortDescription={ministry.shortDescription}
                schedule={ministry.schedule}
                leader={ministry.leader}
                image={ministry.image.includes('http') ? ministry.image : `/src/assets/${ministry.image}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionTitle title="Testimonios" subtitle="Historias de transformación" centered />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="text-center hover:shadow-elegant-lg transition-shadow">
                <CardContent className="p-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <p className="text-muted-foreground italic mb-4">
                    "{testimonial.content}"
                  </p>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {homeContent.ctaSection.title}
            </h2>
            <p className="text-xl mb-8 opacity-95">
              {homeContent.ctaSection.description}
            </p>
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-glow"
              >
                {homeContent.ctaSection.buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
