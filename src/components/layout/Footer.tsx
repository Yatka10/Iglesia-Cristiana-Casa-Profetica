import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { siteInfo } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Facebook, url: siteInfo.social.facebook, label: "Facebook" },
    { icon: Instagram, url: siteInfo.social.instagram, label: "Instagram" },
    { icon: Youtube, url: siteInfo.social.youtube, label: "YouTube" },
    { icon: Twitter, url: siteInfo.social.twitter, label: "Twitter" },
  ];

  const quickLinks = [
    { label: "Inicio", path: "/" },
    { label: "Nosotros", path: "/nosotros" },
    { label: "Ministerios", path: "/ministerios" },
    { label: "Eventos", path: "/eventos" },
  ];

  const resourceLinks = [
    { label: "Prédicas", path: "/predicas" },
    { label: "Galería", path: "/galeria" },
    { label: "Contacto", path: "/contacto" },
    { label: "Donar", path: "/donar" },
  ];

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Acerca de */}
          <div>
            <div className="mb-4">
              <img 
                src={logo} 
                alt={siteInfo.churchName}
                className="h-20 w-auto mb-3"
              />
              <p className="text-primary-foreground/80 text-sm">{siteInfo.description}</p>
            </div>
            <div className="flex space-x-3">
              {socialIcons.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contáctanos</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">
                  {siteInfo.contact.address}, {siteInfo.contact.city}
                </span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`tel:${siteInfo.contact.phone}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {siteInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a
                  href={`mailto:${siteInfo.contact.email}`}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  {siteInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horarios de Servicio */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Horarios de Servicio</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {siteInfo.schedules.map((schedule) => (
              <div key={schedule.day} className="bg-primary-foreground/10 rounded-lg p-4">
                <h5 className="font-semibold mb-2">{schedule.day}</h5>
                {schedule.services.map((service, idx) => (
                  <div key={idx} className="text-sm text-primary-foreground/80">
                    <span>{service.name}: </span>
                    <span className="font-medium">{service.time}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} {siteInfo.churchName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/60 mt-2">
            Diseñado con amor para la gloria de Dios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
