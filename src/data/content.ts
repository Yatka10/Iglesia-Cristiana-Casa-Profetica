/**
 * ARCHIVO DE CONTENIDO CENTRALIZADO - CASA PROFÉTICA
 * 
 * Este archivo contiene TODO el contenido editable del sitio web.
 * Para modificar textos, imágenes, horarios, etc., simplemente edita los valores aquí.
 * 
 * INSTRUCCIONES PARA EDITAR:
 * 1. Localiza la sección que deseas modificar
 * 2. Cambia el texto entre comillas o los valores de las propiedades
 * 3. Guarda el archivo
 * 4. Los cambios se reflejarán automáticamente en el sitio
 * 
 * IMPORTANTE: Mantén la estructura del código (comillas, comas, llaves) intacta
 */

// ============================================
// INFORMACIÓN GENERAL DE LA IGLESIA
// ============================================

export const siteInfo = {
  churchName: "Casa Profética",
  tagline: "Un lugar de encuentro con Dios",
  description: "Una iglesia cristiana dedicada a transformar vidas a través de la palabra de Dios, la adoración y el servicio a la comunidad.",
  
  // Información de contacto
  contact: {
    address: "Calle Principal 123, Colonia Centro",
    city: "Ciudad de México, CDMX 01234",
    phone: "+52 (55) 1234-5678",
    email: "contacto@casaprofetica.org",
    whatsapp: "+525512345678",
  },
  
  // Redes sociales
  social: {
    facebook: "https://facebook.com/casaprofetica",
    instagram: "https://instagram.com/casaprofetica",
    youtube: "https://youtube.com/@casaprofetica",
    twitter: "https://twitter.com/casaprofetica",
  },
  
  // Horarios de servicios
  schedules: [
    {
      day: "Domingo",
      services: [
        { name: "Servicio Principal", time: "10:00 AM" },
        { name: "Servicio Vespertino", time: "6:00 PM" },
      ],
    },
    {
      day: "Miércoles",
      services: [
        { name: "Estudio Bíblico", time: "7:00 PM" },
      ],
    },
    {
      day: "Viernes",
      services: [
        { name: "Reunión de Jóvenes", time: "7:30 PM" },
      ],
    },
  ],
  
  // Ubicación para Google Maps
  mapLocation: {
    lat: 19.4326,
    lng: -99.1332,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6929649380695!2d-99.13320708509182!3d19.432607986886192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
  }
};

// ============================================
// CONTENIDO DE LA PÁGINA PRINCIPAL (HOME)
// ============================================
export const homeContent = {
  hero: {
    title: "Bienvenido a Casa Profética",
    subtitle: "Un lugar donde encontrarás amor, esperanza y transformación",
    description: "Únete a nuestra comunidad de fe y experimenta el amor de Dios",
    ctaText: "Visítanos Este Domingo",
    secondaryCta: "Conoce Más",
  },
  
  welcome: {
    title: "Mensaje del Pastor",
    subtitle: "¡Bienvenidos a Casa Profética!",
    message: "Es un honor y privilegio darles la bienvenida a esta casa de oración. En Casa Profética creemos que cada persona tiene un propósito divino y estamos comprometidos a ayudarte a descubrirlo. Aquí encontrarás una familia espiritual que te acompañará en tu caminar con Cristo. Ya sea que estés buscando respuestas, sanidad, restauración o simplemente un lugar donde crecer en tu fe, esta es tu casa. Te esperamos con los brazos abiertos.",
    pastorName: "Pastor Carlos Mendoza",
    pastorTitle: "Pastor Principal",
  },
  
  ctaSection: {
    title: "¿Primera vez aquí?",
    description: "Nos encantaría conocerte y ayudarte a sentirte como en casa. Descubre todo lo que tenemos preparado para ti.",
    buttonText: "Información para Visitantes",
  }
};

// ============================================
// TESTIMONIOS
// ============================================
export const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Miembro desde 2020",
    content: "Casa Profética cambió mi vida completamente. Encontré una familia espiritual que me ha apoyado en los momentos más difíciles y celebrado conmigo en los más alegres. La enseñanza bíblica es profunda y práctica.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    id: 2,
    name: "Juan Ramírez",
    role: "Líder de Jóvenes",
    content: "Los ministerios de esta iglesia son increíbles. Como joven, encontré mi propósito sirviendo a Dios y a otros. El ambiente es acogedor y las enseñanzas han transformado mi manera de ver la vida.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Voluntaria",
    content: "La adoración aquí es poderosa y el amor de la congregación es genuino. He crecido espiritualmente más de lo que imaginé. Es maravilloso ser parte de una comunidad tan comprometida con Dios.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
];

// ============================================
// PÁGINA: NOSOTROS (ABOUT)
// ============================================
export const aboutContent = {
  hero: {
    title: "Nuestra Historia",
    subtitle: "Más de 15 años transformando vidas",
  },
  
  history: {
    title: "Historia de Casa Profética",
    paragraphs: [
      "Casa Profética nació en el año 2008 con una visión clara: crear un espacio donde las personas pudieran experimentar el amor transformador de Dios. Comenzamos como un pequeño grupo de oración en una casa particular, con apenas 15 personas comprometidas con la visión.",
      "A lo largo de los años, Dios nos ha bendecido abundantemente. Lo que comenzó como un grupo pequeño ha crecido hasta convertirse en una vibrante comunidad de más de 500 familias. En 2015, adquirimos nuestro edificio actual, diseñado específicamente para servir a nuestra creciente congregación.",
      "Hoy, Casa Profética es reconocida en la región como una iglesia comprometida con la excelencia en la adoración, la enseñanza bíblica sólida y el servicio a la comunidad. Nuestro impacto se extiende más allá de nuestras paredes a través de programas de alcance comunitario, misiones y obras de caridad.",
    ],
  },
  
  vision: {
    title: "Nuestra Visión",
    description: "Ser una iglesia que transforma vidas, familias y comunidades a través del poder del evangelio, extendiendo el reino de Dios localmente y hasta lo último de la tierra.",
  },
  
  mission: {
    title: "Nuestra Misión",
    description: "Guiar a las personas a una relación auténtica con Jesucristo, desarrollar creyentes maduros a través de la enseñanza bíblica, y equipar a cada miembro para servir con sus dones en la iglesia y en el mundo.",
  },
  
  values: [
    {
      title: "Fe Bíblica",
      description: "Creemos en la Biblia como la palabra inspirada de Dios y nuestra máxima autoridad.",
      icon: "BookOpen",
    },
    {
      title: "Adoración Genuina",
      description: "Expresamos nuestro amor a Dios con adoración sincera y apasionada.",
      icon: "Music",
    },
    {
      title: "Comunidad",
      description: "Valoramos las relaciones auténticas y el cuidado mutuo entre hermanos.",
      icon: "Users",
    },
    {
      title: "Servicio",
      description: "Servimos a Dios sirviendo a otros con excelencia y amor.",
      icon: "Heart",
    },
    {
      title: "Excelencia",
      description: "Hacemos todo con la máxima calidad como ofrenda a Dios.",
      icon: "Star",
    },
    {
      title: "Evangelismo",
      description: "Compartimos el evangelio con pasión y relevancia cultural.",
      icon: "Globe",
    },
  ],
  
  team: [
    {
      name: "Pastor Carlos Mendoza",
      role: "Pastor Principal",
      bio: "Con más de 20 años de ministerio, el Pastor Carlos fundó Casa Profética con el llamado de impactar vidas. Es graduado en Teología y apasionado por la enseñanza bíblica práctica.",
      image: "pastor.jpg", // Se referencia desde assets
    },
    {
      name: "Pastora Laura Mendoza",
      role: "Pastora de Mujeres",
      bio: "La Pastora Laura lidera el ministerio de mujeres y consejería. Su corazón por restaurar vidas ha impactado a cientos de familias.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    },
    {
      name: "Pastor Miguel Torres",
      role: "Pastor de Jóvenes",
      bio: "Pastor Miguel trabaja con la juventud, creando espacios relevantes para que los jóvenes conozcan a Cristo y desarrollen su potencial.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
    },
    {
      name: "Pastora Sandra Ruiz",
      role: "Pastora de Niños",
      bio: "Con un amor especial por los niños, la Pastora Sandra crea experiencias donde los pequeños aprenden de Jesús de forma divertida.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400",
    },
  ],
  
  beliefs: {
    title: "Lo Que Creemos",
    items: [
      "Creemos en un solo Dios eternamente existente en tres personas: Padre, Hijo y Espíritu Santo.",
      "Creemos que la Biblia es la palabra inspirada de Dios, infalible y la máxima autoridad en fe y conducta.",
      "Creemos en la deidad de Jesucristo, su nacimiento virginal, vida sin pecado, muerte expiatoria, resurrección corporal y segunda venida.",
      "Creemos que la salvación es por gracia mediante la fe en Jesucristo, no por obras.",
      "Creemos en el bautismo en agua por inmersión y la santa cena como ordenanzas de la iglesia.",
      "Creemos en el bautismo del Espíritu Santo con la evidencia de hablar en lenguas.",
      "Creemos en la sanidad divina provista en la expiación de Cristo.",
      "Creemos en la resurrección de los justos para vida eterna y de los injustos para condenación eterna.",
    ],
  },
};

// ============================================
// PÁGINA: MINISTERIOS
// ============================================

export const ministriesContent = {
  hero: {
    title: "Nuestros Ministerios",
    subtitle: "Encuentra tu lugar para servir y crecer",
  },
  
  ministries: [
    {
      id: "jovenes",
      name: "Ministerio de Jóvenes",
      shortDescription: "Espacio para que los jóvenes crezcan en su fe y desarrollen su potencial en Cristo",
      description: "El ministerio de jóvenes está diseñado para adolescentes y jóvenes adultos (13-25 años) que buscan crecer en su relación con Dios mientras navegan los desafíos de su edad. Ofrecemos reuniones semanales con adoración contemporánea, enseñanzas relevantes, grupos pequeños, retiros, campamentos y actividades recreativas.",
      schedule: "Viernes 7:30 PM",
      leader: "Pastor Miguel Torres",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
      activities: [
        "Reuniones semanales con adoración y enseñanza",
        "Grupos pequeños de discipulado",
        "Retiros y campamentos anuales",
        "Actividades recreativas y deportivas",
        "Proyectos de servicio comunitario",
      ],
      contact: "jovenes@casaprofetica.org",
    },
    {
      id: "ninos",
      name: "Ministerio de Niños",
      shortDescription: "Enseñando a la próxima generación el amor de Jesús de forma divertida y creativa",
      description: "En el ministerio infantil, los niños de 3 a 12 años descubren el amor de Jesús a través de historias bíblicas interactivas, canciones, juegos, manualidades y actividades apropiadas para su edad. Nuestros maestros capacitados crean un ambiente seguro y divertido donde los niños pueden hacer preguntas y aprender.",
      schedule: "Domingos durante el servicio principal",
      leader: "Pastora Sandra Ruiz",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
      activities: [
        "Clases dominicales por edades",
        "Adoración infantil con canciones y movimiento",
        "Historias bíblicas interactivas",
        "Manualidades y actividades creativas",
        "Eventos especiales y celebraciones",
      ],
      contact: "ninos@casaprofetica.org",
    },
    {
      id: "adoracion",
      name: "Ministerio de Adoración",
      shortDescription: "Guiando a la congregación a una adoración auténtica y apasionada",
      description: "El equipo de adoración está formado por músicos, cantantes y técnicos comprometidos con crear una atmósfera de adoración donde la presencia de Dios se manifiesta. Practicamos semanalmente y ministramos en todos los servicios con excelencia y corazón sincero.",
      schedule: "Ensayos: Jueves 7:00 PM",
      leader: "David Hernández",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800",
      activities: [
        "Ensayos semanales del equipo",
        "Ministerio en servicios dominicales",
        "Talleres de desarrollo musical",
        "Producción de música original",
        "Adoración en eventos especiales",
      ],
      contact: "adoracion@casaprofetica.org",
    },
    {
      id: "evangelismo",
      name: "Ministerio de Evangelismo",
      shortDescription: "Compartiendo el evangelio y alcanzando nuestra comunidad con el amor de Cristo",
      description: "El ministerio de evangelismo equipa y moviliza a los creyentes para compartir el evangelio efectivamente. Organizamos campañas de evangelismo, distribución de materiales, eventos en parques y plazas, y visitación casa por casa.",
      schedule: "Sábados 9:00 AM (salidas evangelísticas)",
      leader: "Roberto Sánchez",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800",
      activities: [
        "Salidas evangelísticas semanales",
        "Entrenamiento en evangelismo personal",
        "Campañas en plazas públicas",
        "Distribución de biblias y literatura",
        "Eventos de alcance comunitario",
      ],
      contact: "evangelismo@casaprofetica.org",
    },
    {
      id: "mujeres",
      name: "Ministerio de Mujeres",
      shortDescription: "Fortaleciendo a las mujeres en su fe, identidad y propósito en Cristo",
      description: "El ministerio de mujeres ofrece un espacio seguro donde las mujeres pueden crecer espiritualmente, desarrollar amistades profundas y descubrir su identidad en Cristo. Realizamos estudios bíblicos, conferencias, retiros y eventos sociales.",
      schedule: "Martes 10:00 AM (estudio matutino) / Jueves 7:00 PM (estudio nocturno)",
      leader: "Pastora Laura Mendoza",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
      activities: [
        "Estudios bíblicos semanales",
        "Conferencias y retiros especiales",
        "Grupos de apoyo y oración",
        "Talleres de desarrollo personal",
        "Actividades sociales y servicio",
      ],
      contact: "mujeres@casaprofetica.org",
    },
    {
      id: "matrimonios",
      name: "Ministerio de Matrimonios",
      shortDescription: "Fortaleciendo matrimonios y familias según los principios bíblicos",
      description: "Creemos que matrimonios fuertes crean familias fuertes. Este ministerio ofrece cursos prematrimoniales, talleres de enriquecimiento matrimonial, consejería y eventos para parejas. Nuestro deseo es que cada matrimonio refleje el amor de Cristo.",
      schedule: "Primer viernes del mes 7:00 PM",
      leader: "Pastores Carlos y Laura Mendoza",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
      activities: [
        "Curso prematrimonial (requerido)",
        "Talleres de enriquecimiento matrimonial",
        "Cenas y retiros para parejas",
        "Consejería matrimonial",
        "Grupos pequeños de matrimonios",
      ],
      contact: "matrimonios@casaprofetica.org",
    },
  ],
};

// ============================================
// PÁGINA: EVENTOS
// ============================================
export const eventsContent = {
  hero: {
    title: "Próximos Eventos",
    subtitle: "Descubre lo que está sucediendo en Casa Profética",
  },
  
  upcomingEvents: [
    {
      id: 1,
      title: "Conferencia de Avivamiento 2024",
      date: "2024-11-15",
      dateDisplay: "15-17 de Noviembre",
      time: "7:00 PM",
      location: "Auditorio Principal",
      description: "Tres días de poderosa adoración, enseñanza bíblica y manifestación del Espíritu Santo. Invitado especial: Pastor Juan Rodríguez.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      category: "Conferencia",
      featured: true,
      registerLink: "#",
    },
    {
      id: 2,
      title: "Retiro de Jóvenes: Generación de Fuego",
      date: "2024-11-22",
      dateDisplay: "22-24 de Noviembre",
      time: "Viernes 6:00 PM",
      location: "Centro de Retiros Valle Verde",
      description: "Fin de semana de retiro para jóvenes con actividades al aire libre, talleres, adoración y momentos de búsqueda de Dios.",
      image: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=800",
      category: "Retiro",
      featured: true,
      registerLink: "#",
    },
    {
      id: 3,
      title: "Desayuno de Mujeres: Mujeres de Fe",
      date: "2024-11-30",
      dateDisplay: "30 de Noviembre",
      time: "9:00 AM",
      location: "Salón de Eventos",
      description: "Mañana especial para mujeres con desayuno, adoración y mensaje inspirador. Cupo limitado.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      category: "Evento Especial",
      featured: false,
      registerLink: "#",
    },
    {
      id: 4,
      title: "Vigilia de Oración",
      date: "2024-12-01",
      dateDisplay: "1 de Diciembre",
      time: "10:00 PM - 2:00 AM",
      location: "Templo Principal",
      description: "Noche de oración e intercesión por nuestras familias, la iglesia, la ciudad y la nación.",
      image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800",
      category: "Oración",
      featured: false,
      registerLink: "#",
    },
    {
      id: 5,
      title: "Campamento Infantil de Invierno",
      date: "2024-12-12",
      dateDisplay: "12-14 de Diciembre",
      time: "Viernes 4:00 PM",
      location: "Campamento Montaña Alta",
      description: "Campamento de fin de semana para niños de 7-12 años con juegos, enseñanzas bíblicas y diversión.",
      image: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=800",
      category: "Niños",
      featured: false,
      registerLink: "#",
    },
    {
      id: 6,
      title: "Celebración de Navidad",
      date: "2024-12-24",
      dateDisplay: "24 de Diciembre",
      time: "7:00 PM",
      location: "Auditorio Principal",
      description: "Servicio especial de Navidad con adoración, drama navideño y mensaje del nacimiento de Cristo.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800",
      category: "Celebración",
      featured: true,
      registerLink: "#",
    },
  ],
  
  pastEvents: [
    {
      id: 101,
      title: "Conferencia de Liderazgo",
      date: "2024-09-20",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600",
    },
    {
      id: 102,
      title: "Festival de Adoración",
      date: "2024-08-15",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600",
    },
    {
      id: 103,
      title: "Día de la Familia",
      date: "2024-07-28",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600",
    },
  ],
};

// ============================================
// PÁGINA: PRÉDICAS
// ============================================
export const sermonsContent = {
  hero: {
    title: "Prédicas y Enseñanzas",
    subtitle: "Mensajes que transforman vidas",
  },
  
  sermons: [
    {
      id: 1,
      title: "El Poder de la Fe",
      preacher: "Pastor Carlos Mendoza",
      date: "2024-10-27",
      series: "Fundamentos de la Fe",
      scripture: "Hebreos 11:1-6",
      description: "Descubre cómo la fe verdadera transforma imposibilidades en realidades divinas.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
      thumbnail: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800",
      duration: "45 min",
      tags: ["Fe", "Poder de Dios"],
    },
    {
      id: 2,
      title: "Viviendo en el Espíritu",
      preacher: "Pastor Miguel Torres",
      date: "2024-10-20",
      series: "Vida en el Espíritu",
      scripture: "Gálatas 5:16-26",
      description: "Aprende a caminar diariamente bajo la guía y el poder del Espíritu Santo.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800",
      duration: "42 min",
      tags: ["Espíritu Santo", "Vida Cristiana"],
    },
    {
      id: 3,
      title: "Restauración del Corazón",
      preacher: "Pastora Laura Mendoza",
      date: "2024-10-13",
      series: "Sanidad Interior",
      scripture: "Salmos 147:3",
      description: "Dios sana los corazones quebrantados y venda sus heridas. Un mensaje de esperanza.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=800",
      duration: "38 min",
      tags: ["Sanidad", "Restauración"],
    },
    {
      id: 4,
      title: "El Propósito de las Pruebas",
      preacher: "Pastor Carlos Mendoza",
      date: "2024-10-06",
      series: "Creciendo en Adversidad",
      scripture: "Santiago 1:2-4",
      description: "Las pruebas no vienen a destruirnos sino a desarrollar en nosotros la madurez espiritual.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1472173148041-00294f0814a2?w=800",
      duration: "50 min",
      tags: ["Pruebas", "Madurez Espiritual"],
    },
    {
      id: 5,
      title: "Adoración que Agrada a Dios",
      preacher: "David Hernández",
      date: "2024-09-29",
      series: "Adoradores Verdaderos",
      scripture: "Juan 4:23-24",
      description: "Exploramos qué tipo de adoración busca el Padre y cómo podemos ser adoradores genuinos.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      duration: "35 min",
      tags: ["Adoración", "Presencia de Dios"],
    },
    {
      id: 6,
      title: "Familia: Diseño Divino",
      preacher: "Pastores Carlos y Laura",
      date: "2024-09-22",
      series: "Edificando Familias Fuertes",
      scripture: "Efesios 5:22-33",
      description: "Principios bíblicos para construir matrimonios y familias según el corazón de Dios.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800",
      duration: "48 min",
      tags: ["Familia", "Matrimonio"],
    },
  ],
  
  series: [
    "Fundamentos de la Fe",
    "Vida en el Espíritu",
    "Sanidad Interior",
    "Creciendo en Adversidad",
    "Adoradores Verdaderos",
    "Edificando Familias Fuertes",
  ],
};

// ============================================
// PÁGINA: GALERÍA
// ============================================
export const galleryContent = {
  hero: {
    title: "Galería de Momentos",
    subtitle: "Capturando los momentos especiales de nuestra comunidad",
  },
  
  categories: ["Todos", "Cultos", "Eventos", "Ministerios", "Comunidad"],
  
  images: [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800",
      category: "Cultos",
      title: "Servicio Dominical",
      date: "2024-10-27",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800",
      category: "Cultos",
      title: "Adoración",
      date: "2024-10-20",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
      category: "Eventos",
      title: "Conferencia Anual",
      date: "2024-09-15",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800",
      category: "Comunidad",
      title: "Día de la Familia",
      date: "2024-08-25",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?w=800",
      category: "Ministerios",
      title: "Campamento de Jóvenes",
      date: "2024-07-10",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800",
      category: "Eventos",
      title: "Retiro de Mujeres",
      date: "2024-06-22",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800",
      category: "Ministerios",
      title: "Ministerio Infantil",
      date: "2024-10-15",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
      category: "Eventos",
      title: "Festival de Adoración",
      date: "2024-05-30",
    },
    {
      id: 9,
      url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
      category: "Eventos",
      title: "Conferencia de Liderazgo",
      date: "2024-04-18",
    },
    {
      id: 10,
      url: "https://images.unsplash.com/photo-1533922922960-d1cf2a6b6e47?w=800",
      category: "Comunidad",
      title: "Servicio Comunitario",
      date: "2024-10-05",
    },
    {
      id: 11,
      url: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800",
      category: "Cultos",
      title: "Vigilia de Oración",
      date: "2024-09-01",
    },
    {
      id: 12,
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800",
      category: "Comunidad",
      title: "Cena de Matrimonios",
      date: "2024-08-12",
    },
  ],
};

// ============================================
// PÁGINA: DONAR
// ============================================
export const donateContent = {
  hero: {
    title: "Ofrendar y Diezmar",
    subtitle: "Tu generosidad hace posible el avance del Reino de Dios",
  },
  
  intro: {
    title: "¿Por qué dar?",
    description: "Dar es un acto de adoración y obediencia a Dios. A través de tus ofrendas y diezmos, participas en la obra de Dios de transformar vidas, extender el evangelio y bendecir a nuestra comunidad.",
  },
  
  bibleVerses: [
    {
      reference: "Malaquías 3:10",
      text: "Traed todos los diezmos al alfolí y haya alimento en mi casa; y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos, y derramaré sobre vosotros bendición hasta que sobreabunde.",
    },
    {
      reference: "2 Corintios 9:7",
      text: "Cada uno dé como propuso en su corazón: no con tristeza, ni por necesidad, porque Dios ama al dador alegre.",
    },
    {
      reference: "Lucas 6:38",
      text: "Dad, y se os dará; medida buena, apretada, remecida y rebosando darán en vuestro regazo; porque con la misma medida con que medís, os volverán a medir.",
    },
  ],
  
  methods: [
    {
      title: "Transferencia Bancaria",
      description: "Puedes realizar tu ofrenda mediante transferencia bancaria a nuestra cuenta oficial",
      icon: "Building2",
      details: {
        bank: "Banco Nacional",
        accountName: "Iglesia Casa Profética A.C.",
        accountNumber: "1234567890",
        clabe: "012345678901234567",
        reference: "Ofrenda/Diezmo",
      },
    },
    {
      title: "En el Templo",
      description: "Durante nuestros servicios puedes depositar tu ofrenda en los sobres disponibles",
      icon: "Church",
      details: null,
    },
    {
      title: "Pago en Línea",
      description: "Próximamente habilitaremos pagos seguros con tarjeta de crédito/débito",
      icon: "CreditCard",
      details: null,
    },
  ],
  
  impact: {
    title: "El Impacto de Tu Generosidad",
    areas: [
      {
        title: "Ministerios",
        description: "Sostenemos programas para niños, jóvenes, familias y más",
        percentage: 40,
      },
      {
        title: "Misiones",
        description: "Apoyamos misioneros y proyectos de evangelismo",
        percentage: 25,
      },
      {
        title: "Instalaciones",
        description: "Mantenimiento y mejora de nuestras facilidades",
        percentage: 20,
      },
      {
        title: "Comunidad",
        description: "Programas de ayuda social y alcance comunitario",
        percentage: 15,
      },
    ],
  },
  
  faqs: [
    {
      question: "¿Cuál es la diferencia entre diezmo y ofrenda?",
      answer: "El diezmo es el 10% de tus ingresos que devolvemos a Dios en reconocimiento de que todo le pertenece. La ofrenda es una contribución adicional voluntaria que das según tu corazón.",
    },
    {
      question: "¿Las donaciones son deducibles de impuestos?",
      answer: "Sí, Casa Profética es una asociación religiosa legalmente constituida. Podemos proporcionarte un comprobante para efectos fiscales.",
    },
    {
      question: "¿Puedo designar mi ofrenda para un propósito específico?",
      answer: "Sí, si deseas que tu ofrenda se destine a un ministerio o proyecto específico, puedes indicarlo en la referencia de tu donación.",
    },
    {
      question: "¿Qué hago si tengo dificultades financieras?",
      answer: "Entendemos que hay temporadas difíciles. Tu presencia y participación en la iglesia son valiosas. Dios valora tu corazón más que la cantidad. Además, estamos aquí para apoyarte si necesitas ayuda.",
    },
  ],
};

// ============================================
// VERSÍCULOS DESTACADOS
// ============================================
export const featuredVerses = [
  {
    text: "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.",
    reference: "Juan 3:16",
  },
  {
    text: "Todo lo puedo en Cristo que me fortalece.",
    reference: "Filipenses 4:13",
  },
  {
    text: "Confía en el SEÑOR con todo tu corazón, y no te apoyes en tu propia prudencia.",
    reference: "Proverbios 3:5",
  },
  {
    text: "El SEÑOR es mi pastor; nada me faltará.",
    reference: "Salmos 23:1",
  },
];
