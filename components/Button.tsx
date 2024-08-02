import React from 'react';

const Button = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  size = 'medium', 
  ...props 
}:{
    children: React.ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    [key: string]: any;
}) => {
  const baseStyles = 'font-bold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500',
    secondary: 'bg-pink-100 hover:bg-pink-200 text-purple-700 focus:ring-pink-500',
    outline: 'bg-transparent hover:bg-purple-50 text-purple-700 border border-purple-600 focus:ring-purple-500',
  };
  
  const sizeStyles = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;