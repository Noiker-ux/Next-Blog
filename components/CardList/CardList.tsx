import style from './CardList.module.css';
import ICardListProps from './CardList.props';
import { Card } from '..';

export const CardList = ({ ...props }: ICardListProps) => {
  return (
    <div className={style.cardList} {...props}>
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
        isLiked={true}
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
        isLiked={false}
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
        isLiked={false}
      />
    </div>
  );
};
