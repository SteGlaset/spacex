import React, { ButtonHTMLAttributes } from 'react';
import cl from './Button.module.scss';
import clsx from 'clsx';

const Button = ({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={clsx(cl.button, className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
