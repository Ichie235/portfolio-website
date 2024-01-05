"use client"
import { motion } from "framer-motion"


type StaggerTypes = {
    text: string;
    className?: string;
    // once?: boolean
}

export const StaggerText = ({
    text,
    className,
}: StaggerTypes) => {
    const letters = Array.from(text)

    const container = {
        hidden: {
            opacity: 0,
        },
        visible: (i = 1) => ({
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.02 * i,
            }
        })
    };
    
    const children = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                stiffness: 50,
            },
        },
    
        hidden: {
            opacity: 0,
            y: 10,
            transition: {
                type: "tween",
                stiffness: 50,
            },
        }
    }

    return(
        <motion.div
            variants={container}
            initial="hidden"
            // animate="visible"
            whileInView="visible"
            style={{
                overflow: "hidden",
                display: "flex",
            }}
            className={className}
        >
            {letters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={children}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.div>
    )
}
