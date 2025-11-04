import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Phone, CalendarDays } from "lucide-react";

export default function CTAStickyFooter() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="
        fixed bottom-4 left-1/2 -translate-x-1/2
        md:hidden 
        z-[9998]
        w-[92%]
        bg-white/90 backdrop-blur-xl
        shadow-[0_8px_35px_rgba(59,130,246,0.25)]
        rounded-3xl border border-slate-200
        px-5 py-4 flex items-center justify-between gap-3
      "
    >
      {/* Botón WhatsApp */}
      <a
        href="https://wa.me/50670277792"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-3
          flex-1
          bg-green-500 hover:bg-green-600
          text-white font-medium
          py-2.5 px-4
          rounded-2xl shadow-lg
          transition-all active:scale-95
        "
      >
        <Phone className="w-5 h-5" />
        {t("cta.mobileWhatsApp")}
      </a>

      {/* Botón Agendar cita */}
      <a
        href="#contacto"
        className="
          flex items-center gap-2
          flex-1
          bg-blue-600 hover:bg-blue-700
          text-white font-medium
          py-2.5 px-4
          rounded-2xl shadow-lg
          transition-all active:scale-95
        "
      >
        <CalendarDays className="w-5 h-5" />
        {t("cta.mobileAppointment")}
      </a>
    </motion.div>
  );
}
