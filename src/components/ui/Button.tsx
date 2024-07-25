import clsx from 'clsx'
import React from 'react'

export const variants = {
  primary: 'bg-indigo-500 text-white hover:bg-indigo-600',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
  success: 'bg-green-500 text-white hover:bg-green-600',
}

type ButtonProps = {
    children: React.ReactNode;
    variant?: keyof typeof variants;
    asChild?: boolean;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type Variant = keyof typeof variants;

const Button = ({children, variant, className, ...props}: ButtonProps) => {
  if(!variant) variant = 'primary';
  return (
    <button className={clsx(variants[variant], "px-4 py-2 rounded transition", className)} {...props}>{children}</button>
  )
}

export default Button