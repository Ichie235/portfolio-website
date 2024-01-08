"use client"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type TextRevealProps = {
    text: string | string[];
    el?: keyof JSX.IntrinsicElements;
    width?: "fit-content" | "100%";
    once?: boolean;
    className?: string;
}

export const TextReveal = ({
    el: Wrapper = "div",
    text, width, once, className
}: TextRevealProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView])

    return(
        <Wrapper
            ref={ref}
            style={{
                position: "relative", 
                width: width, 
                overflow: "hidden"
            }}
            className={className}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                >
                {text}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls }
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--color)",
                    zIndex: 20,
                }}
            >

            </motion.div>
        </Wrapper>
    );
};