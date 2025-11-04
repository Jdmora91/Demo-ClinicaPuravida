import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import WaveDivider from "../components/WaveDivider";

/* Imágenes */
import drImg from "../assets/Team/Dr.avif";
import draImg from "../assets/Team/Dra.avif";
import odonImg from "../assets/Team/Odon.avif";
import fisioImg from "../assets/Team/fisioter.avif";
import labImg from "../assets/Team/labora.avif";
import secreImg from "../assets/Team/secre.avif";

const imageByKey = {
  dr: drImg,
  dra: draImg,
  odon: odonImg,
  fisio: fisioImg,
  lab: labImg,
  secre: secreImg,
};

export default function Team() {
  const { t } = useTranslation();
  const members = t("team.members", { returnObjects: true });

  return (
    <section
      id="Team"
      className="
        relative overflow-hidden py-28
        bg-gradient-to-b from-blue-50 via-blue-100 to-white
      "
    >
      {/* ✅ Transición superior */}
      <WaveDivider direction="up" color="#E0F2FE" opacity={1} />

      {/* ✅ Fondos Atmosféricos Premium */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-18%] left-[-10%] w-[480px] h-[480px] bg-sky-200/35 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] bg-blue-300/30 blur-[180px] rounded-full"></div>
        <div className="absolute top-[35%] right-[15%] w-[350px] h-[350px] bg-emerald-200/25 blur-[150px] rounded-full"></div>
      </div>

      {/* ✅ Encabezado */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-20 px-6"
      >
        <span className="
          px-4 py-1.5 rounded-full text-sm font-semibold
          bg-blue-100 text-blue-700 tracking-wide
          border border-blue-200 shadow-sm
        ">
          {t("team.badge")}
        </span>

        <h2 className="mt-5 text-4xl md:text-5xl font-bold text-blue-950 tracking-tight">
          {t("team.title")}
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {t("team.subtitle")}
        </p>
      </motion.div>

      {/* ✅ Grid del equipo */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {members.map((m, index) => (
          <motion.div
            key={m.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.07 }}
            viewport={{ once: true }}
            className="
              relative group rounded-3xl p-7 text-center
              bg-white/60 backdrop-blur-2xl
              shadow-[0_8px_30px_-8px_rgba(59,130,246,0.25)]
              hover:shadow-[0_12px_42px_-8px_rgba(59,130,246,0.35)]
              transition-all duration-500 ease-out
            "
          >
            {/* ✅ Marco luminoso premium */}
            <div
              className="
                absolute inset-0 rounded-3xl opacity-0
                group-hover:opacity-30
                transition-all duration-500
                bg-gradient-to-br from-blue-200/15 to-blue-50/10
              "
            ></div>

            {/* ✅ Foto */}
            <div className="relative w-40 h-40 mx-auto mb-5 rounded-full overflow-hidden shadow-xl">
              <img
                src={imageByKey[m.key]}
                alt={m.role}
                className="
                  w-full h-full object-cover
                  group-hover:scale-[1.06]
                  transition-transform duration-700
                "
              />

              {/* Glow suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-sky-100/30 to-transparent" />
            </div>

            {/* ✅ Nombre */}
            <h3 className="text-xl font-semibold text-blue-900">
              {m.name}
            </h3>

            {/* ✅ Rol */}
            <p className="text-blue-600 font-medium text-sm tracking-wide mt-1">
              {m.role}
            </p>

            {/* ✅ Descripción */}
            <p className="mt-3 text-slate-600 text-sm leading-relaxed px-2">
              {m.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ✅ Transición inferior */}
      <div className="mt-20">
        <WaveDivider direction="down" color="#E0F2FE" opacity={1} />
      </div>
    </section>
  );
}
