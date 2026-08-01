import React from 'react';
import { motion } from 'framer-motion';

export const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  magnetic = false,
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-2xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none';
  
  // Humanized premium design tokens (no heavy AI neon gradients)
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-900 shadow-md dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 dark:border-white active:scale-95',
    secondary: 'border border-slate-200 dark:border-white/10 bg-slate-100/60 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white hover:bg-slate-200/80 dark:hover:bg-white/10',
    ghost: 'bg-transparent text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 border border-transparent',
    outline: 'bg-transparent text-slate-900 dark:text-white border border-slate-300 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3 text-xs sm:text-sm gap-2',
    lg: 'px-7 py-3.5 text-sm sm:text-base gap-2.5'
  };

  const Component = magnetic ? motion.button : 'button';
  const motionProps = magnetic ? {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 25 }
  } : {};

  return (
    <Component
      ref={ref}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
      {Icon && <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform group-hover:translate-x-0.5" />}
    </Component>
  );
});

Button.displayName = 'Button';
