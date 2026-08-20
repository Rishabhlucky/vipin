import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (documentHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = (scrollTop / documentHeight) * 100;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed
        right-5
        bottom-5
        z-50
        w-12
        h-12
        sm:w-14
        sm:h-14
        rounded-full
        flex
        items-center
        justify-center
        bg-white
        shadow-lg
        hover:scale-105
        transition-transform
        duration-300
      "
      style={{
        background: `conic-gradient(
          #2563eb ${scrollProgress * 3.6}deg,
          #e5e7eb ${scrollProgress * 3.6}deg
        )`,
      }}
    >
      {/* Inner Circle */}
      <span
        className="
          absolute
          inset-[3px]
          rounded-full
          bg-white
          flex
          items-center
          justify-center
        "
      >
        <ArrowUp
          size={20}
          strokeWidth={2}
          className="text-gray-600"
        />
      </span>
    </button>
  );
};

export default ScrollProgress;