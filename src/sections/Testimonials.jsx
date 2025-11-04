import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

/* Imágenes recomendadas */
import img1 from "../assets/testimonials/happy.avif";
import img2 from "../assets/testimonials/happyPa.avif";
import img3 from "../assets/testimonials/smile.avif";
import img4 from "../assets/testimonials/patient.avif";
import img5 from "../assets/testimonials/family.avif";

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true });

  const IMAGES = [img1, img2, img3, img4, img5];

  const [index, setIndex] = useState(0);

  // Auto-slide cada 6s
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      {/* Fondo elegante */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50 to-white" />
      <div className="absolute top-[10%] left-[10%] w-[450px] h-[450px] bg-blue-200/40 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-sky-200/40 blur-[140px] rounded-full" />

      <h2 className="text-center text-3xl md:text-4xl font-bold text-blue-950 mb-4">
        {t("testimonials.title")}
      </h2>
      <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
        {t("testimonials.subtitle")}
      </p>

      {/* Carrusel */}
      <div className="relative max-w-4xl mx-auto px-6">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-lg shadow-xl rounded-3xl p-10 border border-white/60 flex flex-col md:flex-row items-center gap-8"
          >
            {/* Imagen */}
            <div className="relative w-40 h-40 flex-shrink-0">
              <img
                src={IMAGES[index]}
                alt="Paciente"
                className="w-full h-full rounded-2xl object-cover shadow-xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-white/20 to-transparent" />
            </div>

            {/* Texto */}
            <div className="flex-1">
              <p className="text-slate-700 text-lg leading-relaxed mb-4">
                “{items[index].text}”
              </p>
              <p className="font-semibold text-blue-900 text-sm">
                — {items[index].name}
              </p>
              <p className="text-slate-500 text-xs">{items[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Indicadores */}
        <div className="flex justify-center gap-2 mt-6">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? "bg-blue-600 w-6" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
