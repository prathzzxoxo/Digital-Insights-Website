"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99] as any,
          }
        }}
        exit={{
          opacity: 0,
          y: -50,
          scale: 0.95,
          transition: {
            duration: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99] as any,
          }
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
