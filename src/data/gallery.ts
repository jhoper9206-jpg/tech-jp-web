/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type GalleryCategory =
  | 'Todos'
  | 'Computadores'
  | 'Celulares y tablets'
  | 'Consolas'
  | 'Servicio a domicilio'
  | 'Empresas'
  | 'Consejos'
  | 'Corporativo';

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  description: string;
  alt: string;
  tag: string;
  whatsappMessage?: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'presentacion-oficial',
    title: 'Presentación General Tech.JP',
    category: 'Corporativo',
    image: '/images/gallery/techjp-presentacion.png',
    description:
      'Soporte técnico y soluciones tecnológicas integrales para computadores, dispositivos móviles y consolas. Soluciones donde las necesites.',
    alt: 'Presentación oficial de servicios Tech.JP',
    tag: 'Identidad Oficial',
    whatsappMessage: 'Hola, Tech.JP. Quisiera solicitar información general sobre sus servicios técnicos.',
  },
  {
    id: 'computadores-portatiles',
    title: 'Soporte Técnico de Computadores y Portátiles',
    category: 'Computadores',
    image: '/images/gallery/techjp-computadores.png',
    description:
      'Mantenimiento preventivo y correctivo, diagnóstico de fallas, actualización de SSD/RAM, instalación de software y eliminación de virus.',
    alt: 'Soporte técnico de computadores y portátiles Tech.JP',
    tag: 'Hardware & Software',
    whatsappMessage: 'Hola, Tech.JP. Quisiera cotizar servicio técnico para mi computador o portátil.',
  },
  {
    id: 'celulares-tablets',
    title: 'Celulares y Tablets — Diagnóstico y Mantenimiento',
    category: 'Celulares y tablets',
    image: '/images/gallery/techjp-celulares.png',
    description:
      'Diagnóstico de fallas de hardware y software, actualización de sistemas, optimización, configuración de cuentas y reemplazo modular.',
    alt: 'Servicio técnico especializado para celulares y tablets Tech.JP',
    tag: 'Dispositivos Móviles',
    whatsappMessage: 'Hola, Tech.JP. Quisiera solicitar diagnóstico o reparación para mi celular o tablet.',
  },
  {
    id: 'consolas-videojuegos',
    title: 'Consolas de Videojuegos — Mantenimiento y Configuración',
    category: 'Consolas',
    image: '/images/gallery/techjp-consolas.png',
    description:
      'Mantenimiento preventivo, limpieza profunda, cambio de pasta térmica, actualización de sistemas y solución de fallas para que juegues sin interrupciones.',
    alt: 'Mantenimiento y diagnóstico de consolas de videojuegos Tech.JP',
    tag: 'Gaming & Consolas',
    whatsappMessage: 'Hola, Tech.JP. Quisiera agendar mantenimiento para mi consola de videojuegos.',
  },
  {
    id: 'servicio-domicilio',
    title: 'Servicio a Domicilio — Soporte en tu Hogar u Oficina',
    category: 'Servicio a domicilio',
    image: '/images/gallery/techjp-domicilio.png',
    description:
      'Llevamos el soporte técnico especializado hasta tu ubicación con agenda programada, diagnóstico transparente y entrega con pruebas de funcionamiento.',
    alt: 'Servicio técnico a domicilio para hogares y empresas Tech.JP',
    tag: 'Atención en Sitio',
    whatsappMessage: 'Hola, Tech.JP. Quisiera solicitar una visita de soporte técnico a domicilio.',
  },
  {
    id: 'soluciones-empresas',
    title: 'Soluciones Tecnológicas para Empresas',
    category: 'Empresas',
    image: '/images/gallery/techjp-empresas.png',
    description:
      'Soporte técnico empresarial, administración de parques de equipos, seguridad informática, redes y conectividad, y asesoría continua para tu negocio.',
    alt: 'Soporte y soluciones tecnológicas para empresas Tech.JP',
    tag: 'Soporte Corporativo',
    whatsappMessage: 'Hola, Tech.JP. Quisiera información y propuesta sobre soluciones para mi empresa o negocio.',
  },
  {
    id: 'estamos-para-ayudarte',
    title: 'Canales de Atención — Estamos Para Ayudarte',
    category: 'Corporativo',
    image: '/images/gallery/techjp-contacto.png',
    description:
      'Canales directos de atención: teléfono, WhatsApp, correo y soporte en sitio de lunes a viernes de 8:00 a.m. a 5:00 p.m. Tu tranquilidad es nuestra prioridad.',
    alt: 'Canales de atención y contacto oficial Tech.JP',
    tag: 'Atención al Cliente',
    whatsappMessage: 'Hola, Tech.JP. Quisiera comunicarme con un asesor de soporte técnico.',
  },
  {
    id: 'consejo-seguridad',
    title: 'Consejo Tecnológico — Seguridad de la Información',
    category: 'Consejos',
    image: '/images/gallery/techjp-consejos.png',
    description:
      'Buenas prácticas de seguridad: contraseñas robustas, copias de seguridad periódicas, actualización de software y navegación en redes seguras.',
    alt: 'Consejos tecnológicos y buenas prácticas de seguridad Tech.JP',
    tag: 'Buenas Prácticas',
    whatsappMessage: 'Hola, Tech.JP. Quisiera asesoría para asegurar y respaldar la información de mis equipos.',
  },
  {
    id: 'satisfaccion-garantizada',
    title: 'Compromiso de Calidad — Tu Satisfacción Nos Importa',
    category: 'Corporativo',
    image: '/images/gallery/techjp-satisfaccion.png',
    description:
      'Trabajamos con procesos claros, diagnóstico responsable, acompañamiento constante y garantía para brindarte una experiencia técnica de máxima calidad.',
    alt: 'Compromiso de satisfacción y calidad Tech.JP',
    tag: 'Calidad & Confianza',
    whatsappMessage: 'Hola, Tech.JP. Quisiera conocer más sobre las garantías y procesos de atención.',
  },
  {
    id: 'diagnostico-fallas',
    title: '¿Tu Equipo Presenta Fallas? — Diagnóstico Rápido',
    category: 'Computadores',
    image: '/images/gallery/techjp-soporte.png',
    description:
      'Diagnóstico técnico preciso, reparación de componentes, instalación de software y respaldo seguro para solucionar fallas rápidamente.',
    alt: 'Diagnóstico y reparación de fallas en equipos Tech.JP',
    tag: 'Diagnóstico Ágil',
    whatsappMessage: 'Hola, Tech.JP. Mi equipo presenta una falla y quisiera solicitar un diagnóstico.',
  },
];
