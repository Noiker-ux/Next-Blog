import { Card } from '@/components';
import { Header } from '../components/Header/Header';
import { CardList } from '@/components/CardList/CardList';

export default function Home(): JSX.Element {
	return (
		<main>
			<CardList>
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
				<Card
					id={2}
					image={'/Grid.png'}
					tags={['Frontend', 'Grid', 'CSS']}
					timestamp={'1 месяц назад'}
					likes={17}
					title={'Как работать с CSS Grid'}
					anons={
						'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'
					}
					timeReading={3}
				/>
				<Card
					id={3}
					image={'/Grid.png'}
					tags={['Frontend', 'Grid', 'CSS']}
					timestamp={'1 месяц назад'}
					likes={132}
					title={'Как работать с CSS Grid'}
					anons={
						'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..'
					}
					timeReading={3}
				/>
			</CardList>
		</main>
	);
}
