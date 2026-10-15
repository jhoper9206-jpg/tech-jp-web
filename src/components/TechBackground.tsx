/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function TechBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-white"
    >
      {/* Halos de luz sutil en azul y cian sobre lienzo blanco */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-sky-100/60 via-cyan-50/40 to-transparent blur-3xl opacity-80" />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-sky-50/50 blur-3xl rounded-full" />
      <div className="absolute top-2/3 -left-40 w-[550px] h-[550px] bg-cyan-50/50 blur-3xl rounded-full" />

      {/* Malla digital geométrica en tono gris/azul ultra suave */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="light-tech-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#E2E8F0"
              strokeWidth="0.8"
            />
            <circle cx="48" cy="0" r="1" fill="#94A3B8" opacity="0.6" />
            <circle cx="0" cy="48" r="1" fill="#94A3B8" opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#light-tech-grid)" />
      </svg>

      {/* Trazos de circuitos discretos SVG en azul y cian muy sutil */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30 stroke-sky-300"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M0 140 H160 L220 200 H400 L430 170 H650"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="220" cy="200" r="2.5" fill="#0284C7" />
        <circle cx="430" cy="170" r="2.5" fill="#06B6D4" />

        <path
          d="M100% 380 H calc(100% - 180px) L calc(100% - 240px) 440 H calc(100% - 460px)"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
        <circle cx="90%" cy="380" r="2.5" fill="#06B6D4" />

        <path
          d="M80 880 L160 960 H420 L460 920 H700"
          strokeWidth="1"
        />
        <circle cx="460" cy="920" r="2.5" fill="#0284C7" />
      </svg>
    </div>
  );
}
