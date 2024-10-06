import React from 'react';
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from '../../shadcn/ui/button';
import { cn } from '../../shadcn/lib/utils';

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = 'primary' | 'secondary';
type ButtonVariant = 'contained' | 'outlined' | 'text';

interface ButtonProps extends Omit<ShadcnButtonProps, 'size' | 'variant'> {  
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  size = 'medium', 
  color = 'primary', 
  variant = 'contained',
  className,
  children,
  startIcon,
  endIcon,
  ...props 
}) => {
  const sizeMap: Record<ButtonSize, ShadcnButtonProps['size']> = {
    small: 'sm',
    medium: 'default',
    large: 'lg'
  };

  const getVariantClasses = (color: ButtonColor, variant: ButtonVariant): string => {
    const baseClasses = {
      primary: {
        contained: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outlined: 'border border-primary text-primary hover:bg-primary/10',
        text: 'text-primary hover:bg-primary/10'
      },
      secondary: {
        contained: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        outlined: 'border border-secondary text-secondary hover:bg-secondary/10',
        text: 'text-secondary hover:bg-secondary/10'
      }
    };

    return baseClasses[color][variant];
  };

  return (
    <ShadcnButton
      size={sizeMap[size]}
      className={cn(
        'flex items-center justify-center',
        getVariantClasses(color, variant),
        variant === 'text' && 'shadow-none',
        className
      )}
      {...props}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </ShadcnButton>
  );
};

export {
  Button
}