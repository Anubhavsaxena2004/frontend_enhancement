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
  
  const variants = {
    primary: 'gradient-btn text-white shadow-glow-indigo hover:shadow-indigo-500/50 active:scale-95',
    secondary: 'bg-slate-100 hover:bg-slate-200 dark:bg-navy-900/80 dark:hover:bg-navy-850 text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 hover:border-brand-indigo/50',
    ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 border border-transparent hover:border-slate-300 dark:hover:border-white/10',
    outline: 'bg-transparent text-brand-indigo dark:text-brand-cyan border border-brand-indigo/40 hover:bg-brand-indigo/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-3.5 text-xs sm:text-sm gap-2',
    lg: 'px-8 py-4 text-sm sm:text-base gap-3'
  };

  const Component = magnetic ? motion.button : 'button';
  const motionProps = magnetic ? {
    whileHover: { scale: 1.04, y: -2 },
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
      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />}
    </Component>
  );
});

Button.displayName = 'Button';
