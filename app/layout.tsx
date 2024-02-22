import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
