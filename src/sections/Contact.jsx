import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";
import WaveDivider from "../components/WaveDivider";

export default function Contact() {
  const { t } = useTranslation();
  const PHONE = "50670277792"; 
  const ADDRESS = "Puerto Cortés, Osa, Puntarenas, Costa Rica";
  const EMAIL = "clinicapuravida@example.com"; 

  return (
    <section
      id="contacto"
      className="relative py-28 bg-gradient-to-b from-white via-sky-50 to-blue-50 overflow-hidden scroll-mt-20"
    >
      {/* Top wave */}
      <WaveDivider direction="up" color="#E0F2FE" opacity={1} />

      {/* Luces suaves premium */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[5%] left-[10%] w-[500px] h-[500px] bg-sky-200/40 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-blue-300/30 blur-[200px] rounded-full"></div>
      </div>

      {/* Contenedor Principal */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* ================= Información de contacto ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-slate-200"
        >
          <h2 className="text-3xl font-bold text-blue-950 mb-6">
            {t("contact.title")}
          </h2>
          <p className="text-slate-600 mb-8">{t("contact.subtitle")}</p>

          {/* Teléfono */}
          <div className="flex items-center gap-4 mb-6">
            <Phone className="text-blue-600 w-7 h-7" />
            <a
              href={`tel:${PHONE}`}
              className="text-blue-700 hover:text-blue-900 font-medium"
            >
              +{PHONE}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 mb-6">
            <Mail className="text-blue-600 w-7 h-7" />
            <a
              href={`mailto:${EMAIL}`}
              className="text-blue-700 hover:text-blue-900 font-medium"
            >
              {EMAIL}
            </a>
          </div>

          {/* Dirección */}
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600 w-7 h-7" />
            <p className="text-slate-700 font-medium">{ADDRESS}</p>
          </div>
        </motion.div>

        {/* ================= Formulario ================= */}
        <motion.form
          onSubmit={(e) => {
            e.preventDefault();
            const name = e.target.name.value;
            const msg = e.target.message.value;
            window.open(
              `https://wa.me/${PHONE}?text=${encodeURIComponent(
                `👋 Hola, soy ${name}. ${msg}`
              )}`,
              "_blank"
            );
          }}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-xl shadow-xl rounded-3xl p-8 border border-slate-200"
        >
          <h3 className="text-2xl font-semibold text-blue-950 mb-6">
            {t("contact.formTitle")}
          </h3>

          {/* Nombre */}
          <div className="mb-5">
            <label className="block text-slate-700 font-medium mb-2">
              {t("contact.name")}
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
            />
          </div>

          {/* Mensaje */}
          <div className="mb-5">
            <label className="block text-slate-700 font-medium mb-2">
              {t("contact.message")}
            </label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition"
            ></textarea>
          </div>

          {/* Botón enviar */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-[0_4px_20px_-5px_rgba(59,130,246,0.5)] transition"
          >
            {t("contact.send")}
          </button>
        </motion.form>
      </div>

      {/* Divider Inferior */}
      <WaveDivider direction="down" color="#E0F2FE" opacity={1} />
    </section>
  );
}
