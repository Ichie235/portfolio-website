"use client";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isVisible) {
      interval = setInterval(() => {
        const button = document.querySelector(".backToTopBtn");
        if (button) {
          button.classList.add("bounce");
          setTimeout(() => {
            button.classList.remove("bounce");
          }, 1000);
        }
      }, 3000);
    } else {
      clearInterval(interval!);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="backToTopBtn fixed bottom-4 right-4 z-50 bg-tr-black dark:bg-white text-white dark:text-black rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-opacity hover:opacity-80"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
