import { motion } from 'framer-motion';
import React from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.8
}) => {
  const variants = {
    up: {
      hidden: { y: 60, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    down: {
      hidden: { y: -60, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    left: {
      hidden: { x: -60, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    right: {
      hidden: { x: 60, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
