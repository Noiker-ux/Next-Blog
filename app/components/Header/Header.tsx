'use client';
import { Headling } from '@/components';
import IHeaderProps from './Header.props';
import style from './Header.module.css';
import Link from 'next/link';
import GitHubIcon from './github.svg';
import { AppContext, AppContextProvider } from '@/context/app.context';
import { useContext } from 'react';

export const Header = ({ ...props }: IHeaderProps) => {
  const { github } = useContext(AppContext);
  return (
    <AppContextProvider>
      <header {...props} className={style.header}>
        <Headling className={style.light} tag={'h1'}>
          Noiker Blog
        </Headling>
        <Link href={`${github}`} className={style.github}>
          <GitHubIcon />
        </Link>
      </header>
    </AppContextProvider>
  );
};
