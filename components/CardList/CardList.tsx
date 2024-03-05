import style from './CardList.module.css';
import ICardListProps from './CardList.props';
import { Card } from '..';

export const CardList = ({ posts, ...props }: ICardListProps) => {
  return (
    <div className={style.cardList} {...props}>
      {posts
        .filter((e) => e.id <= 9)
        .map((e) => (
          <Card
            key={e.id}
            id={e.id}
            image={'/Grid.png'}
            tags={['Frontend', 'Grid', 'CSS']}
            likes={22}
            title={e.title}
            anons={e.body}
            timestamp={'2 месяц(а) назад'}
            timeReading={3}
            isLiked={false}
          />
        ))}
    </div>
  );
};
