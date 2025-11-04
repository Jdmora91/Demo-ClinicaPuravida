import { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { useTranslation } from "react-i18next";
import WaveDivider from "../components/WaveDivider";

export default function Location() {
  const { t } = useTranslation();

  const PHONE = "50670277792";
  const ADDRESS =
    "500 m norte de la Escuela Ojo de Agua, Puerto Cortés, Osa, Puntarenas, Costa Rica";

  const GOOGLE_MAP_EMBED =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41216.74264263479!2d-83.55607834504123!3d8.988780942684278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa3b32d2b5b6e1f%3A0xa5c7f0d19faabcdef!2sHospital%20Tomás%20Casas%20Casajús%2C%20Puerto%20Cortés%2C%20Osa!5e0!3m2!1sen!2scr!4v1680000000000!5m2!1sen!2scr";

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();

    const open = day >= 1 && day <= 6 && hour >= 8 && hour < 18;
    setIsOpen(open);
  }, []);

  return (
    <section
      id="location"
      className="relative min-h-screen py-28 overflow-hidden"
    >
      {/* ✅ Divider Superior */}
      <WaveDivider direction="up" color="#E0F2FE" opacity={1} />

      {/* ✅ Fondo atmosférico premium */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-100 to-white" />

        {/* Blobs con movimiento suave */}
        <div className="absolute top-[5%] left-[8%] w-[420px] h-[420px] bg-blue-200/40 blur-[130px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[520px] h-[520px] bg-cyan-200/40 blur-[150px] rounded-full animate-pulse"></div>

        {/* Light rays */}
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.6),transparent)] opacity-25" />
      </div>

      {/* ✅ Título */}
      <SectionTitle
        title={t("location.title")}
        subtitle={t("location.subtitle")}
        badge={t("location.badge")}
      />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* ✅ Panel de información ultra premium */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative bg-white/50 backdrop-blur-2xl rounded-3xl p-8
            shadow-[0_8px_40px_-10px_rgba(59,130,246,0.25)]
            border border-white/60
            overflow-hidden
          "
        >
          {/* ✅ Glow interior */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/30 to-blue-100/10 pointer-events-none"></div>

          {/* ✅ Dirección */}
          <div className="flex items-start gap-3 mb-6 relative z-10">
            <MapPin className="text-blue-600 w-7 h-7" />
            <p className="font-medium text-slate-700 leading-relaxed">
              {t("location.address")}
            </p>
          </div>

          {/* ✅ Horarios */}
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <Clock className="text-blue-600 w-6 h-6" />
            <p className="font-medium text-slate-700">
              {t("location.schedule")}
            </p>
          </div>

          {/* ✅ Estado del negocio */}
          <p
            className={`
              inline-block px-4 py-1 rounded-full text-sm font-semibold mb-6 relative z-10
              ${isOpen ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
            `}
          >
            {isOpen ? t("location.openNow") : t("location.closedNow")}
          </p>

          {/* ✅ Cómo llegar */}
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              ADDRESS
            )}`}
            target="_blank"
            className="
              inline-flex items-center gap-2 text-blue-600 hover:text-blue-800
              font-medium transition mb-4 relative z-10
            "
          >
            <Navigation className="w-5 h-5" />
            {t("location.getDirections")}
          </a>

          {/* ✅ Teléfono */}
          <a
            href={`tel:${PHONE}`}
            className="
              mt-3 inline-flex items-center gap-2 text-slate-700 hover:text-blue-700
              transition block relative z-10
            "
          >
            <Phone className="w-5 h-5" />
            {PHONE}
          </a>
        </motion.div>

        {/* ✅ Mapa premium con animación */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="
            relative rounded-3xl overflow-hidden
            shadow-[0_12px_45px_-5px_rgba(59,130,246,0.35)]
            border border-white/70
            bg-white/40 backdrop-blur-xl
          "
        >
          <iframe
            src={GOOGLE_MAP_EMBED}
            className="w-full h-[430px] lg:h-full rounded-3xl"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* ✅ Glow sutil superior */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>

      {/* ✅ Divider inferior */}
      <div className="mt-28">
        <WaveDivider direction="down" color="#E0F2FE" opacity={1} />
      </div>
    </section>
  );
}
