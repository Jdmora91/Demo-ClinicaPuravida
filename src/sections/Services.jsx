import { useTranslation } from "react-i18next";
import SectionTitle from "../components/SectionTitle";

/* Imágenes */
import generalImg from "../assets/general.avif";
import labImg from "../assets/lab.avif";
import odontoImg from "../assets/odonto.avif";
import pedImg from "../assets/ped.avif";
import fisioImg from "../assets/fisio.avif";
import telemedImg from "../assets/telemed.avif";
import emergenciaImg from "../assets/emergencia.avif";

const ImageByKey = {
  general: generalImg,
  lab: labImg,
  odonto: odontoImg,
  pediatria: pedImg,
  fisio: fisioImg,
  telemed: telemedImg,
  emergencia: emergenciaImg,
};

export default function Services() {
  const { t } = useTranslation();
  const title = t("services.title");
  const subtitle = t("services.subtitle");
  const items = t("services.items", { returnObjects: true });

  const PHONE = "50670277792";

  // Centrado si queda un solo ítem al final
  const leavesSingleInLastRow = items.length % 3 === 1;
  const lastIndex = items.length - 1;

  return (
    <section
      id="services"
      aria-label={title}
      className="
        relative py-28 overflow-hidden 
        bg-gradient-to-b from-white via-blue-50 to-blue-100
      "
    >
      {/* ✅ Título premium */}
      <SectionTitle title={title} subtitle={subtitle} />

      {/* ✅ Luces premium */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-25%] left-[-10%] w-[550px] h-[550px] bg-blue-200/35 blur-[170px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[650px] h-[650px] bg-sky-300/40 blur-[180px] rounded-full"></div>
        <div className="absolute top-[30%] right-[20%] w-[350px] h-[350px] bg-emerald-200/25 blur-[150px] rounded-full"></div>
      </div>

      {/* ✅ Grid Premium */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((svc, idx) => {
          const img = ImageByKey[svc.key] ?? generalImg;
          const centerLast =
            leavesSingleInLastRow && idx === lastIndex ? "lg:col-start-2" : "";

          const waMessage = encodeURIComponent(
            t("services.whatsappMessage", { service: svc.title })
          );

          return (
            <article
              key={svc.key || idx}
              className={`
                group relative rounded-3xl p-5
                bg-white/75 backdrop-blur-xl 
                border border-white/50
                shadow-[0_8px_30px_-10px_rgba(59,130,246,0.25)]
                hover:shadow-[0_12px_40px_-10px_rgba(59,130,246,0.35)]
                hover:-translate-y-[6px]
                transition-all duration-500 ease-out
                ${centerLast}
              `}
            >
              {/* Glow interno */}
              <div
                className="
                absolute inset-0 rounded-3xl opacity-0 
                group-hover:opacity-30 
                transition-all duration-500 
                bg-gradient-to-br from-blue-200/20 to-blue-50/10
              "
              ></div>

              {/* Imagen */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner mb-4">
                <img
                  src={img}
                  alt={svc.alt}
                  className="
                    w-full h-48 object-cover 
                    group-hover:scale-[1.04] transition-all duration-700
                  "
                  loading="lazy"
                />

                {/* Frame luminoso */}
                <div className="
                  absolute inset-0 rounded-2xl 
                  bg-gradient-to-t from-white/30 to-transparent 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-500
                "></div>
              </div>

              {/* Título y descripción */}
              <h3 className="text-xl font-semibold text-blue-950 mb-1">
                {svc.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                {svc.desc}
              </p>

              {/* CTA WhatsApp */}
              <a
                href={`https://wa.me/${PHONE}?text=${waMessage}`}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2 text-sm mt-2
                  font-medium text-blue-600 hover:text-blue-800
                  transition-all
                "
                aria-label={t("services.ctaAria", { service: svc.title })}
              >
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                {t("services.cta")}
              </a>
            </article>
          );
        })}
      </div>

      {/* ✅ Wave inferior */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.06-17.27-168.06-15.82-250.45,1.27-57.84,12-114,32-172,41.86C224.63,69.4,111.43,61.73,0,35.13V120H1200V95.8C1115.34,105.9,1042.57,107.91,985.66,92.83Z"
            fill="url(#waveGradient)"
            opacity="0.9"
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
