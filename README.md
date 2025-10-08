# Casa Profética - Sitio Web Oficial

Sitio web profesional para la iglesia Casa Profética, construido con React, Vite, Tailwind CSS y shadcn/ui.

## 🌟 Características

- **8 Páginas Completas**: Home, Nosotros, Ministerios, Eventos, Prédicas, Galería, Contacto y Donar
- **Diseño Responsive**: Optimizado para móvil, tablet y desktop
- **Sistema de Contenido Centralizado**: Todo el contenido editable en un solo archivo
- **Componentes Reutilizables**: Arquitectura modular y mantenible
- **Optimizado para SEO**: Meta tags, títulos y descripciones apropiadas
- **Listo para Netlify**: Configuración completa de deployment

## 📋 Requisitos Técnicos

- Node.js 18 o superior
- npm 9 o superior (o yarn/pnpm)

## 🚀 Instalación y Desarrollo Local

```bash
# 1. Clonar el repositorio (si aplica)
git clone <tu-repositorio-url>
cd casa-profetica

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:8080
```

## ✏️ Cómo Editar el Contenido

### TODO el contenido del sitio está centralizado en un solo archivo:

**Archivo**: `src/data/content.ts`

### Pasos para editar contenido:

1. Abre el archivo `src/data/content.ts`
2. Busca la sección que quieres modificar (está organizado por páginas)
3. Edita los textos entre comillas `""`
4. Guarda el archivo
5. Los cambios se reflejarán automáticamente en el sitio

### Ejemplos de edición:

#### Cambiar el nombre de la iglesia:
```typescript
export const siteInfo = {
  churchName: "Casa Profética", // ← Editar aquí
  tagline: "Un lugar de encuentro con Dios", // ← Editar aquí
  // ...
}
```

#### Cambiar horarios de servicio:
```typescript
schedules: [
  {
    day: "Domingo",
    services: [
      { name: "Servicio Principal", time: "10:00 AM" }, // ← Editar aquí
    ],
  },
]
```

#### Cambiar información de contacto:
```typescript
contact: {
  address: "Tu Dirección Aquí", // ← Editar aquí
  city: "Tu Ciudad", // ← Editar aquí
  phone: "+52 (55) 1234-5678", // ← Editar aquí
  email: "contacto@tuiglesia.org", // ← Editar aquí
}
```

#### Agregar un nuevo testimonio:
```typescript
export const testimonials = [
  // ... testimonios existentes
  {
    id: 4, // Incrementar el ID
    name: "Nombre de la Persona",
    role: "Rol en la iglesia",
    content: "El testimonio completo aquí",
    image: "URL de la imagen",
  },
]
```

### ⚠️ IMPORTANTE al editar:
- NO elimines las comas, corchetes `[]`, llaves `{}` ni comillas `""`
- Mantén la estructura del código
- Si tienes dudas, haz una copia de respaldo antes de editar

## 🎨 Personalizar Colores

### Editar paleta de colores en: `src/index.css`

```css
:root {
  /* Color principal - Editar aquí */
  --primary: 243 75% 35%;
  
  /* Color secundario - Editar aquí */
  --secondary: 270 60% 45%;
  
  /* Color de acento - Editar aquí */
  --accent: 45 90% 55%;
}
```

**Nota**: Los colores usan formato HSL (Hue, Saturation, Lightness)

## 🖼️ Cambiar Imágenes

### Imágenes están en: `src/assets/`

Para cambiar una imagen:
1. Reemplaza el archivo en `src/assets/` con tu nueva imagen (mantén el mismo nombre)
2. O actualiza las referencias en `src/data/content.ts` con nuevas URLs

## 📦 Crear Build de Producción

```bash
# Crear build optimizado
npm run build

# Esto creará una carpeta 'dist' con todos los archivos listos para deployment
```

## 🌐 Deployment en Netlify

### Opción 1: Drag & Drop (Más Fácil)

1. Ejecuta `npm run build` en tu computadora
2. Se creará una carpeta llamada `dist`
3. Ve a [netlify.com](https://netlify.com) e inicia sesión
4. Arrastra la carpeta `dist` a la zona de drop de Netlify
5. ¡Tu sitio estará en línea en segundos!

### Opción 2: Conectar con Git (Recomendado para producción)

1. Sube tu código a GitHub/GitLab/Bitbucket
2. En Netlify, haz clic en "New site from Git"
3. Conecta tu repositorio
4. Configuración automática (Netlify detectará el `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Haz clic en "Deploy site"
6. Netlify hará deployment automático en cada push

### Configurar Dominio Personalizado

1. En Netlify, ve a Site settings > Domain management
2. Haz clic en "Add custom domain"
3. Sigue las instrucciones para configurar tu dominio

## 📁 Estructura del Proyecto

```
casa-profetica/
├── src/
│   ├── assets/              # Imágenes generadas
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── shared/         # Componentes reutilizables
│   │   └── ui/             # Componentes shadcn/ui
│   ├── data/
│   │   └── content.ts      # ⭐ TODO EL CONTENIDO AQUÍ
│   ├── pages/              # Páginas del sitio
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Ministries.tsx
│   │   ├── Events.tsx
│   │   ├── Sermons.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Donate.tsx
│   ├── hooks/              # React hooks personalizados
│   ├── lib/                # Utilidades
│   ├── App.tsx             # Configuración de rutas
│   ├── index.css           # Estilos globales y diseño
│   └── main.tsx            # Punto de entrada
├── public/                 # Archivos estáticos públicos
├── index.html              # HTML principal
├── tailwind.config.ts      # Configuración de Tailwind
├── netlify.toml            # Configuración de Netlify
├── package.json            # Dependencias del proyecto
└── README.md               # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Librería de UI
- **Vite** - Build tool y dev server
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS utility-first
- **shadcn/ui** - Componentes UI de alta calidad
- **React Router** - Navegación del sitio
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de formularios
- **Lucide React** - Iconos

## 📞 Soporte

Si tienes problemas o preguntas:
1. Revisa este README primero
2. Busca en los comentarios de `src/data/content.ts`
3. Contacta al desarrollador o equipo técnico

## 🔒 Seguridad

- El sitio está configurado con headers de seguridad en `netlify.toml`
- Validación de formularios client-side implementada
- Para producción, considera agregar protección backend adicional

## 📝 Notas Importantes

- **NO** edites archivos en `node_modules/` - son dependencias externas
- **NO** edites `package.json` directamente - usa `npm install <paquete>` para agregar dependencias
- Haz **backups** antes de hacer cambios importantes
- Prueba localmente (`npm run dev`) antes de hacer deployment

## 🎯 Próximos Pasos

1. **Personaliza el contenido** en `src/data/content.ts`
2. **Ajusta los colores** según tu identidad de marca
3. **Reemplaza las imágenes** con fotos reales de tu iglesia
4. **Configura el formulario de contacto** con un servicio como EmailJS o Web3Forms
5. **Conecta Google Analytics** para métricas (opcional)
6. **Haz deployment** en Netlify

## 📄 Licencia

Este proyecto fue creado para Casa Profética. Todos los derechos reservados.

---

**¡Dios te bendiga!** 🙏

Para cualquier pregunta técnica, consulta la documentación de:
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Netlify](https://docs.netlify.com/)
