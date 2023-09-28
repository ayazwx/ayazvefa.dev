import { motion } from "framer-motion";


const initialMotion = { opacity: 0, y: 50 };
const animateMotion = { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } };
const transitionMotion = { duration: 0.5, ease: "easeInOut" };

export const Section = ({ children }) => {
    // return (React.createElement("group", null, children));

    return (
        <motion.section className="w-full h-screen" initial={initialMotion} whileInView={animateMotion}>
            {children}
        </motion.section>
    )
}