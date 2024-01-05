import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export const FlowerPot = () => {
    const { theme } = useTheme();
    const strokeColor = theme === "dark" ? "#ffffff" : "#000000";

    return(
        <div
            style={{
                border: "none",
                padding: "0",
                marginLeft: "auto",
                marginRight: "auto"
            }}
        >
            <motion.svg 
                width="98"
                height="138"
                viewBox="0 0 98 138"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
                // className={`text-black dark:text-white`}
            >
                <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1
                    }}
                    strokeWidth={4}
                    strokeDasharray="0 1"
                    d="M49 39.5C49 39.5 53.5 24.5 45 15.5C36.5 6.5 2 2 2 2C2 2 13 19.5 22 29.5C31 39.5 49 39.5 49 39.5ZM49 39.5C49 39.5 59.4168 49.0487 61.092 64M49 39.5C49 39.5 47.9921 34.8387 44.5852 29.5M54 91C60.4826 80.935 61.9595 71.743 61.092 64M61.092 64C61.092 64 67.5 39.5 96 48M26 15.5C35.4628 18.2392 41.2049 24.203 44.5852 29.5M44.5852 29.5C44.5852 29.5 36.5 20.6978 26 22.5M36.1667 125L39.5 133C55.4505 138.409 63.6749 137.957 77.5 133L81.0238 125M36.1667 125L22 91C22 91 63.7867 95.2 96 91L81.0238 125M36.1667 125C53.6872 129.269 63.5033 129.119 81.0238 125" 
                    stroke={strokeColor}
                    stroke-width="2"
                />
            </motion.svg>
        </div>
    )
}

export const Pointer = () => {
    const { theme } = useTheme();
    const strokeColor = theme === "dark" ? "#ffffff" : "#000000";

    return(
        <div
            style={{
                border: "none",
                padding: "0",
            }}
        >
            <motion.svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle
                    cx="50"
                    cy="50"
                    r="49.5"
                    stroke={strokeColor}
                    strokeWidth={2}
                    initial={{
                        strokeDasharray: "2 2"
                    }}
                    animate={{
                        strokeDasharray: "1 0",
                        opacity: 1,
                    }}

                    transition={{
                        duration: 10,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1
                    }}
                />

                <motion.path 
                    d="M50 26V74.5M50 74.5L36 57M50 74.5L63.5 57"
                    stroke={strokeColor}
                    initial={{
                        strokeDasharray:"2 2",
                        pathLength: 0,
                    }}
                    animate={{
                        strokeDasharray: "1 0",
                        strokeDashoffset: "1",
                        pathLength: 1,
                    }}

                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
            </motion.svg>
        </div>
    )
}