import React, { PropsWithChildren } from 'react';
import cl from './Container.module.scss';
import clsx from 'clsx';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return <div className={clsx(cl.container, className)}>{children}</div>;
};

export default Container;
