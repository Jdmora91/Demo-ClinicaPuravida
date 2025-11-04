import heroImage from "../assets/Doctor.avif";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    
    <section
      id="inicio"
      className="
        relative overflow-hidden 
        min-h-[92vh] 
        flex items-center 
        pt-[110px] pb-[80px]
        bg-gradient-to-br from-sky-100 via-blue-50 to-white
      "
    >
      {/* SUPERFICIE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),rgba(200,225,255,0.4)_40%,rgba(255,255,255,0)_70%)]"></div>

      {/* LUZ LATERAL PREMIUM */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[50%] bg-gradient-to-r from-white/90 via-white/40 to-transparent"></div>

      {/* GLOW BOTTOM */}
      <div className="pointer-events-none absolute bottom-[-180px] left-1/2 -translate-x-1/2 w-[120%] h-[280px] bg-sky-300/40 blur-[140px] opacity-60"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* ===================== COL 1 – TEXTO ===================== */}
        <div className="relative z-10 max-w-xl space-y-7">

          {/* Badge premium */}
          <div className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full border border-blue-200 bg-white/70 backdrop-blur-xl text-[13px] text-slate-600 shadow-[0_4px_15px_-5px_rgba(59,130,246,0.3)]">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            {t("hero.badge")}
          </div>

          {/* TÍTULO SUPERIOR PREMIUM */}
          <h1 className="
            text-5xl md:text-6xl font-bold 
            text-blue-950 
            leading-[1.1] 
            tracking-tight
            drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]
          ">
            <span className="block">
              {t("hero.title1")}
            </span>

            <span className="block bg-gradient-to-r from-blue-600 via-blue-400 to-sky-500 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="text-slate-700 md:text-lg leading-relaxed max-w-lg">
            {t("hero.description")}
          </p>

          {/* BOTONES */}
          <div className="pt-4 flex flex-wrap gap-4">

            {/* CTA PRINCIPAL PREMIUM */}
            <a
              href="#contacto"
              className="
                rounded-full px-8 py-3 font-medium 
                bg-blue-600 text-white
                shadow-[0_8px_30px_-8px_rgba(59,130,246,0.6)]
                hover:bg-blue-700 
                hover:shadow-[0_12px_34px_-6px_rgba(59,130,246,0.7)]
                transition-all duration-300
              "
            >
              {t("hero.ctaPrimary")}
            </a>

            {/* CTA SECUNDARIO */}
            <a
              href="https://wa.me/506XXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="
                rounded-full px-8 py-3 font-medium
                border-2 border-blue-500 text-blue-700
                bg-white/60 backdrop-blur-lg
                hover:bg-blue-50 hover:border-blue-600 hover:text-blue-600
                transition-all duration-300
              "
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </div>

        {/* ===================== COL 2 – IMAGEN ===================== */}
        <div className="relative flex justify-center md:justify-end">

          {/* MARCO GRADIENTE PREMIUM */}
          <div className="
            absolute -inset-6 rounded-[32px]
            bg-gradient-to-br from-white/50 to-white/20 
            shadow-[0_18px_55px_-15px_rgba(59,130,246,0.35)]
            backdrop-blur-md
          "></div>

          {/* IMAGEN */}
          <img
            src={heroImage}
            alt="Profesional de salud"
            className="
              relative z-10 w-full md:max-w-lg rounded-[28px]
              shadow-[0_12px_45px_-10px_rgba(59,130,246,0.4)]
              object-cover
            "
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* WAVE TRANSITION */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[80px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.06-17.27-168.06-15.82-250.45,1.27-57.84,12-114,32-172,41.86C224.63,69.4,111.43,61.73,0,35.13V120H1200V95.8C1115.34,105.9,1042.57,107.91,985.66,92.83Z"
            fill="url(#waveGradient)"
            opacity="0.95"
          />
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
