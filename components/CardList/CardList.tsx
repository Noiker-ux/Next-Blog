import style from './CardList.module.css';
import ICardListProps from './CardList.props';

export const CardList = ({
	children,
	...props
}: ICardListProps): JSX.Element => {
	return <div className={style.cardList}>{children}</div>;
};
