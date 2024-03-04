import { Headling } from '@/components';
import IHeaderProps from './Header.props';
import style from './Header.module.css';
import Link from 'next/link';
import GitHubIcon from './github.svg';

export const Header = ({ ...props }: IHeaderProps) => {
  return (
    <header {...props} className={style.header}>
      <Headling className={style.light} tag={'h1'}>
        Noiker Blog
      </Headling>
      <Link href={'https://github.com/Noiker-ux'} className={style.github}>
        <GitHubIcon />
      </Link>
    </header>
  );
};
