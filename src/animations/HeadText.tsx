"use client"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
    children?: keyof JSX.IntrinsicElements;
    className?: string;
    text: string | string[];
    once?: boolean;
    repeatDelay?: number;
}

const AnimationVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        }
    }
}

export function HeadText({
    children: Wrapper = "h1",
    text,
    className, once, repeatDelay}: Props) {
    
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { amount: 1, once });
    const textArray = Array.isArray(text) ? text : [text];

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        const show = () => {
            controls.start("visible");
            if(repeatDelay) {
                timeout = setTimeout(async () => {
                    await controls.start("hidden")
                    controls.start("visible")
                }, repeatDelay);
            }
        };

        if(isInView){
            show();
        } else{
            controls.start("hidden");
        }

        return () => clearTimeout(timeout);
    }, [isInView])

    return(
        <Wrapper className={className}>
            {/* <span className="sr-only">{text}</span> */}
            <motion.span 
                ref={ref}
                initial="hidden" 
                animate={controls}
                variants={{
                    visible: {transition: { staggerChildren: 0.1 }},
                    hidden: {},
                }}
                aria-hidden
            >
                {textArray.map((line) => (
                    <span className="block">
                        {line.split(" ").map((word) => (
                            <span className="inline-block">
                                {word.split('').map((char, charIndex)=> (
                                    <motion.span
                                        key={charIndex}
                                        variants={AnimationVariants}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                <span className="inline-block">&nbsp;</span>
                            </span>
                        ))}
                    </span>
                ))}
            </motion.span>
        </Wrapper>
    )
}