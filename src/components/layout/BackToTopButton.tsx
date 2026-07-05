"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
    let timeout: NodeJS.Timeout | null = null;

    if (isVisible) {
      interval = setInterval(() => {
        const button = buttonRef.current;
        if (button) {
          button.classList.add("bounce");
          timeout = setTimeout(() => {
            button.classList.remove("bounce");
          }, 1000);
        }
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
      if (timeout) clearTimeout(timeout);
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
          ref={buttonRef}
          aria-label="Back to top"
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
