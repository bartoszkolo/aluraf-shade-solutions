import { motion } from 'framer-motion';
import React from 'react';

interface PremiumButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const PremiumButton: React.FC<PremiumButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
  type = 'button'
}) => {
  const baseStyles = "relative inline-flex items-center gap-2 px-8 py-4 rounded-md font-display font-bold transition-all duration-300";
  const variantStyles = variant === 'primary'
    ? "bg-aluraf-red text-white hover:bg-red-700 hover:shadow-xl hover:gap-4"
    : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black hover:gap-4";

  const content = (
    <>
      <span>{children}</span>
      <motion.span
        className="inline-block"
        whileHover={{ x: [0, 5, 0] }}
        transition={{ duration: 0.3 }}
      >
        →
      </motion.span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variantStyles} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {content}
    </motion.button>
  );
};

export default PremiumButton;
