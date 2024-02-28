'use client';
import { Card } from '@/components';

export default function Home(): JSX.Element {
	return (
		<main>
			<Card
				id={1}
				image={'/Grid.png'}
				tags={['Frontend', 'Grid', 'CSS']}
				timestamp={'1 месяц назад'}
				likes={20}
				title={'Как работать с CSS Grid'}
				anons={
					'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'
				}
				timeReading={3}
			/>
		</main>
	);
}
