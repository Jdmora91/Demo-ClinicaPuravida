import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle, badge }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 px-6">
      
      {/* 🔹 Badge opcional */}
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100 rounded-full"
        >
          {badge}
        </motion.span>
      )}

      {/* 🔹 Título Premium */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-blue-950"
      >
        {title}
      </motion.h2>

      {/* 🔹 Línea elegante minimalista */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-24 h-[3px] bg-blue-600 mx-auto mt-4 rounded-full origin-left"
      />

      {/* 🔹 Subtítulo editorial */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
