"use client";
import { motion } from "framer-motion";

type TextRevealProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  width?: "fit-content" | "100%";
  once?: boolean;
  className?: string;
};

export const TextReveal = ({
  el: Wrapper = "div",
  text,
  width,
  once,
  className,
}: TextRevealProps) => {
  return (
    <div>
      <Wrapper
        style={{
          position: "relative",
          width: width,
        }}
        className={className}
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: "block" }}
        >
          {text}
        </motion.span>
        <motion.span
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once, amount: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "var(--color)",
            zIndex: 20,
            display: "block",
          }}
        />
      </Wrapper>
    </div>
  );
};
