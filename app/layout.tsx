import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import style from './layout.module.css';
import './globals.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next Blog',
	description: 'Next Blog - блог с постоянно актуальными новостями',
	keywords: ['Blog', 'Next', 'Noiker', 'Next-Blog', 'Блог', 'Ноикер'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<div className={style.container}>
					<Header className={style.header} />
					<div className={style.body}>{children}</div>
					<Footer className={style.footer} />
				</div>
			</body>
		</html>
	);
}
