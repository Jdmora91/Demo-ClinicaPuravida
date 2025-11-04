import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
    const phoneNumber = "50670277792";
    const message = encodeURIComponent("¡Hola! Me gustaría agendar una cita en Clínica Pura Vida.");
    const waLink = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatear por WhatsApp con Clínica Pura Vida"

            /* ✅ Solo visible en DESKTOP */
            className="
            hidden md:flex
            fixed bottom-6 right-6 z-50 items-center justify-center 
            w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white
            shadow-[0_8px_30px_-5px_rgba(16,185,129,0.6)]
            hover:scale-105 transition-all duration-300 ease-out"
        >
            {/* Globito animado */}
            <span className="absolute -top-12 right-5 bg-green-600 text-white text-xs px-4 py-2 rounded-full shadow-md whitespace-nowrap animate-bounce">
                ¡Chatea con nosotros!
            </span>

            <FaWhatsapp className="text-3xl" />
            <span className="sr-only">Abrir chat de WhatsApp</span>
        </a>
    );
}
