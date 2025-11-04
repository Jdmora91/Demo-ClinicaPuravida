import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang) => i18n.changeLanguage(lang);

  const links = [
    { key: "home", href: "#inicio" },
    { key: "services", href: "#services" },
    { key: "team", href: "#Team" },
    { key: "Location", href: "#location" },
    { key: "testimonials", href: "#testimonials" },
    { key: "contact", href: "#contacto" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="fixed top-4 left-0 right-0 z-[9999] hidden md:flex justify-center">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`
            flex items-center gap-6 px-7 py-[8px]
            rounded-full backdrop-blur-2xl
            border-[1.5px] shadow-lg pointer-events-auto
            transition-all duration-300
            ${scrolled ? "bg-white/80 border-white/70 shadow-xl" : "bg-white/50 border-white/40"}
          `}
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.7), rgba(170,220,255,0.25))",
          }}
        >
          {/* GRADIENT BORDER */}
          <div className="absolute inset-0 p-[1.5px] rounded-full bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 opacity-30 pointer-events-none"></div>

          {/* LOGO */}
          <a href="#inicio">
            <img src={logo}
              className="h-[27px] object-contain"
              alt="Clinica Pura Vida" />
          </a>

          {/* LINKS */}
          <ul className="flex items-center gap-6 text-[14px] font-medium">
            {links.map((item) => (
              <li key={item.key}>
                <a
                  href={item.href}
                  className="relative group text-slate-700 hover:text-blue-600 transition"
                >
                  {t(`nav.${item.key}`)}

                  {/* Línea animada */}
                  <span className="absolute left-0 -bottom-[3px] w-full h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-all duration-300 origin-left"></span>

                  {/* Glow */}
                  <span className="absolute inset-0 bg-blue-300 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* LANGS */}
          <div className="flex items-center gap-1 px-2 py-[2px] rounded-full bg-white/70 border border-slate-300">
            {["es", "en"].map((lng) => (
              <button
                key={lng}
                onClick={() => changeLanguage(lng)}
                className={`px-2 text-sm transition ${i18n.language === lng
                  ? "text-blue-600 font-bold"
                  : "text-slate-600 hover:text-blue-500"
                  }`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* MOBILE NAV */}
      <nav className="fixed top-0 left-0 right-0 z-[9999] md:hidden">
        <div className="flex items-center justify-between px-4 h-[56px] bg-white/85 border-b border-slate-200 shadow-md backdrop-blur-xl">

          {/* Logo */}
          {/* Logo */}
          <img src={logo}
            className="h-[27px] object-contain"
            alt="Clinica Pura Vida"
          />


          {/* Button menu */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-full bg-white/80 border shadow-sm"
          >
            <span className="block w-6 h-[2px] bg-slate-700 mb-[4px]" />
            <span className="block w-6 h-[2px] bg-slate-700" />
          </button>
        </div>

        {/* OVERLAY + CIRCULAR MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-start pt-20"
            >
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="
                  relative w-[300px] h-[300px]
                  rounded-full bg-white/80 backdrop-blur-2xl
                  shadow-[0_15px_45px_rgba(0,0,0,0.15)]
                  border border-white/60
                  flex flex-col justify-center items-center gap-5 p-6
                "
              >

                {/* GRADIENT OUTER BORDER */}
                <div className="absolute inset-0 p-[2px] rounded-full bg-gradient-to-br from-blue-400 via-sky-300 to-blue-500 opacity-40 pointer-events-none"></div>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-white border shadow text-slate-700 text-lg"
                >
                  ✕
                </button>

                {/* LOGO */}
                <img src={logo}
                  className="h-[27px] object-contain"
                  alt="Clinica Pura Vida" />

                {/* LINKS */}
                <ul className="flex flex-col items-center gap-3 text-[18px] font-medium">
                  {links.map((item) => (
                    <li key={item.key}>
                      <a
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="px-3 py-1 rounded-lg hover:text-blue-600 hover:bg-blue-50/60 transition-all"
                      >
                        {t(`nav.${item.key}`)}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* LANG SELECTOR PREMIUM */}
                <div className="flex gap-3 mt-2">
                  {["es", "en"].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm shadow-sm transition-all
                        ${i18n.language === lng
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-white/70 text-slate-700 border-slate-300 hover:bg-white"
                        }
                      `}
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
