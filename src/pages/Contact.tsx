import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionTitle from "@/components/shared/SectionTitle";
import ContactForm from "@/components/shared/ContactForm";
import { siteInfo } from "@/data/content";

const Contact = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: siteInfo.social.facebook, color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", url: siteInfo.social.instagram, color: "hover:text-pink-600" },
    { icon: Youtube, label: "YouTube", url: siteInfo.social.youtube, color: "hover:text-red-600" },
    { icon: Twitter, label: "Twitter", url: siteInfo.social.twitter, color: "hover:text-blue-400" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl opacity-90">Nos encantaría saber de ti</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center hover:shadow-elegant-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Dirección</h3>
                <p className="text-muted-foreground">
                  {siteInfo.contact.address}
                  <br />
                  {siteInfo.contact.city}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                <a
                  href={`tel:${siteInfo.contact.phone}`}
                  className="text-primary hover:underline block"
                >
                  {siteInfo.contact.phone}
                </a>
                <a
                  href={`https://wa.me/${siteInfo.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors mt-2 block"
                >
                  WhatsApp disponible
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-elegant-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a
                  href={`mailto:${siteInfo.contact.email}`}
                  className="text-primary hover:underline"
                >
                  {siteInfo.contact.email}
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle title="Envíanos un Mensaje" />
              <ContactForm />
            </div>

            {/* Map and Schedule */}
            <div className="space-y-8">
              <div>
                <SectionTitle title="Ubicación" />
                <div className="rounded-lg overflow-hidden shadow-elegant h-64 lg:h-96">
                  <iframe
                    src={siteInfo.mapLocation.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Casa Profética"
                  />
                </div>
              </div>

              <div>
                <SectionTitle title="Horarios de Servicio" />
                <Card>
                  <CardContent className="p-6 space-y-4">
                    {siteInfo.schedules.map((schedule) => (
                      <div key={schedule.day} className="border-b last:border-0 pb-4 last:pb-0">
                        <h4 className="font-bold text-lg mb-2">{schedule.day}</h4>
                        {schedule.services.map((service, idx) => (
                          <div key={idx} className="flex justify-between items-center text-sm mb-1">
                            <span className="text-muted-foreground">{service.name}</span>
                            <span className="font-semibold">{service.time}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Síguenos en Redes Sociales</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map(({ icon: Icon, label, url, color }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 bg-muted hover:bg-primary/10 rounded-full flex items-center justify-center transition-all ${color}`}
                  aria-label={label}
                >
                  <Icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
