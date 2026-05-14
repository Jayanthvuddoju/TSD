import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  type = 'button',
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-[8px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal hover:scale-[1.02]";
  
  const variants = {
    primary: "bg-gradient-brand-x text-white hover:shadow-glow bg-[length:200%_auto] hover:bg-right",
    secondary: "bg-transparent border-2 border-border-dark text-text-primary-dark hover:border-brand-teal hover:text-brand-teal",
    dark: "bg-dark-surface text-white hover:bg-card-dark focus:ring-brand-teal border border-border-dark"
  };

  return (
    <button
      ref={ref}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
