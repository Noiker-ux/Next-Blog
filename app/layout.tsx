import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import style from './layout.module.css';
import './globals.css';

const inter = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Next Blog',
	description: 'Next Blog - блог с постоянно актуальными новостями',
	keywords: ['Blog', 'Next', 'Noiker', 'Next-Blog', 'Блог', 'Ноикер'],
};

const x: string[] = ['a', 'b'];
console.log(x);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>): JSX.Element {
	return (
		<html lang='ru'>
			<body className={inter.className}>
				<div className={style.container}>{children}</div>
			</body>
		</html>
	);
}
