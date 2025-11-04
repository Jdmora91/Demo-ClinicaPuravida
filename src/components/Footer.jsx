import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="
        relative overflow-hidden
        pt-16 pb-10
        bg-gradient-to-b from-white via-blue-50/40 to-blue-100/60
        backdrop-blur-xl
      "
    >
      {/* 🔹 Luces suaves de fondo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[10%] w-[400px] h-[400px] bg-sky-200/40 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-300/30 blur-[180px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* ✅ Branding */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/src/assets/logo.png"
              alt="Clinica Pura Vida"
              className="h-12"
            />
            <h3 className="text-xl font-semibold text-blue-900">
              Clínica Pura Vida
            </h3>
          </div>

          <p className="text-slate-600 leading-relaxed max-w-xs">
            {t("footer.description")}
          </p>
        </div>

        {/* ✅ Enlaces rápidos */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-2 text-slate-700">
            {[
              { k: "home", href: "#inicio" },
              { k: "services", href: "#services" },
              { k: "team", href: "#Team" },
              { k: "testimonials", href: "#testimonials" },
              { k: "Location", href: "#location" },
              { k: "contact", href: "#contacto" },
            ].map((item) => (
              <li key={item.k}>
                <a
                  href={item.href}
                  className="
                    relative inline-block
                    hover:text-blue-600
                    transition
                  "
                >
                  {t(`nav.${item.k}`)}
                  <span className="block h-[2px] w-0 group-hover:w-full bg-blue-500 transition-all"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ✅ Contacto */}
        <div>
          <h4 className="text-blue-900 font-semibold mb-4">
            {t("footer.contact")}
          </h4>

          <ul className="space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <a href="tel:50670277792" className="hover:text-blue-600 transition">
                +506 7027 7792
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href="mailto:info@clinicapuravida.com"
                className="hover:text-blue-600 transition"
              >
                info@clinicapuravida.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 shrink-0 text-blue-600" />
              <p className="max-w-xs">
                {t("location.address")}
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ Línea inferior */}
      <div className="mt-12 pt-6 border-t border-slate-300/40 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} Clínica Pura Vida — {t("footer.rights")}
      </div>
    </footer>
  );
}
