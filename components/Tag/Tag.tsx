import ITagProps from './Tag.props';
import style from './Tag.module.css';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export const Tag = ({
  children,
  tag = 'normal',
  className,
  ...props
}: PropsWithChildren<ITagProps>) => {
  return (
    <p
      className={classNames(style.tag, className, {
        [style.light]: tag === 'light',
        [style.medium]: tag === 'normal',
        [style.bold]: tag === 'bold',
      })}
      {...props}>
      {children}
    </p>
  );
};
