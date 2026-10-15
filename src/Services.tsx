/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ServiceCard, { ServiceItemData } from "./ServiceCard";
import { SlideUp, StaggerContainer, StaggerItem } from "./components/AnimatedSection";

export default function Services() {
  const services: ServiceItemData[] = [
    {
      id: "computadores",
      icon: "💻",
      title: "Computadores y portátiles",
      description:
        "Mantenimiento preventivo y correctivo, diagnóstico, optimización, instalación de software y actualización de componentes.",
      image: "/images/gallery/techjp-computadores.png",
      details: [
        "Mantenimiento térmico profundo y cambio de pasta térmica de alto rendimiento.",
        "Instalación limpia y optimización de sistemas Windows, macOS y Linux.",
        "Actualización a unidades SSD NVMe de alta velocidad y ampliación de memoria RAM.",
        "Eliminación de virus, malware y solución de lentitud extrema o bloqueos.",
      ],
      whatsappMessage:
        "Hola, Tech.JP. Quisiera solicitar información sobre mantenimiento y servicio técnico de computadores y portátiles.",
    },
    {
      id: "celulares",
      icon: "📱",
      title: "Celulares y tablets",
      description:
        "Diagnóstico, configuración, mantenimiento y reemplazo de componentes modulares con repuestos garantizados.",
      image: "/images/gallery/techjp-celulares.png",
      details: [
        "Reemplazo de módulos de pantalla y táctil con repuestos de calidad.",
        "Cambio de baterías degradadas y diagnóstico de circuitos de carga.",
        "Limpieza y reparación de puertos USB-C / Lightning y altavoces.",
        "Configuración, restablecimiento seguro y respaldo de información.",
      ],
      whatsappMessage:
        "Hola, Tech.JP. Quisiera solicitar información sobre diagnóstico y servicio para celulares y tablets.",
    },
    {
      id: "consolas",
      icon: "🎮",
      title: "Consolas de videojuegos",
      description:
        "Diagnóstico, mantenimiento preventivo, limpieza profunda, cambio de pasta térmica y actualizaciones.",
      image: "/images/gallery/techjp-consolas.png",
      details: [
        "Limpieza interna completa de disipadores, ventiladores y eliminación de polvo.",
        "Renovación de compuestos térmicos para mitigar calentamiento y ruido excesivo.",
        "Revisión y reemplazo de puertos HDMI, fuentes de poder y lectores.",
        "Instalación y actualización de unidades de almacenamiento SSD de alta velocidad.",
      ],
      whatsappMessage:
        "Hola, Tech.JP. Quisiera solicitar información sobre mantenimiento preventivo de consolas de videojuegos.",
    },
    {
      id: "domicilio",
      icon: "🏠",
      title: "Servicio técnico a domicilio",
      description:
        "Llevamos el soporte técnico especializado hasta tu hogar u oficina con agenda previa y diagnóstico transparente.",
      image: "/images/gallery/techjp-domicilio.png",
      details: [
        "Agendamiento puntual el día y hora que más te convenga.",
        "Desplazamiento directo a tu hogar, oficina o local comercial.",
        "Diagnóstico en sitio y presupuesto previo sin sorpresas.",
        "Pruebas de funcionamiento y entrega 100% operativa.",
      ],
      whatsappMessage:
        "Hola, Tech.JP. Quisiera solicitar una visita de soporte técnico a domicilio.",
    },
    {
      id: "empresas",
      icon: "🏢",
      title: "Soluciones para empresas",
      description:
        "Soporte técnico para parques de equipos, periféricos, redes y necesidades tecnológicas de empresas y comercios.",
      image: "/images/gallery/techjp-empresas.png",
      details: [
        "Pólizas periódicas de mantenimiento preventivo para oficinas y comercios.",
        "Configuración y soporte a sistemas POS de punto de venta y facturación.",
        "Implementación y ordenamiento de redes cableadas e inalámbricas Wi-Fi.",
        "Atención técnica prioritaria para evitar interrupciones en la operación del negocio.",
      ],
      whatsappMessage:
        "Hola, Tech.JP. Quisiera solicitar información sobre soluciones tecnológicas y soporte para empresas.",
    },
    {
      id: "soporte",
      icon: "🛠️",
      title: "Soporte técnico y diagnóstico",
      description:
        "Atención presencial y remota para resolver fallas de hardware y software de manera rápida y segura.",
      image: "/images/gallery/techjp-soporte.png",
      details: [
        "Soporte remoto inmediato para emergencias de software y conectividad.",
        "Visitas técnicas presenciales para empresas, oficinas y residencias.",
        "Configuración de periféricos, impresoras de red y software especializado.",
        "Diagnóstico integral con explicación clara y presupuesto previo.",
      ],
      whatsappMessage:
        "Hola, Tech.JP. Quisiera solicitar soporte técnico y diagnóstico para mis equipos.",
    },
  ];

  return (
    <section id="servicios" className="w-full py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SlideUp className="text-center mb-14">
          <p className="text-sky-600 text-xs sm:text-sm font-bold tracking-widest uppercase mb-2.5">
            Áreas de Especialidad
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Nuestros servicios
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Soluciones tecnológicas confiables y especializadas para hogares, empresas y comercios.
          </p>
        </SlideUp>

        <StaggerContainer
          staggerDelay={0.07}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <StaggerItem key={service.id} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}