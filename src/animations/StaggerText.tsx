"use client"
import { motion } from "framer-motion"


type StaggerTypes = {
    text: string;
    className?: string;
    once?: boolean
}

export const StaggerText = ({
    text,
    className, once
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
                repeat: 1,
            }
        })
    };
    
    const children = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                stiffness: 10,
            },
        },
    
        hidden: {
            opacity: 0,
            y: 100,
            transition: {
                type: "tween",
                stiffness: 10,
            },
        }
    }

    return(
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{once}}
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
