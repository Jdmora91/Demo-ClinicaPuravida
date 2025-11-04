import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollWidth(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">

      <div
        className="
          h-[3px] 
          bg-gradient-to-r from-sky-400 via-blue-500 to-blue-700 
          shadow-[0_0_12px_rgba(66,153,225,0.6)]
          transition-all 
          duration-200 
          ease-out
        "
        style={{
          width: `${scrollWidth}%`,
        }}
      ></div>

      {/* Glow superior */}
      <div
        className="
          absolute top-0 left-0 h-[6px] 
          bg-blue-500/20 
          blur-md 
          transition-all 
          duration-200
        "
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
}
