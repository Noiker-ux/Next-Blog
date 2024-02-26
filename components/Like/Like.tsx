import style from './Like.module.css';
import { ILikeProps } from './Like.props';
import classNames from 'classnames';
import LikeIcon from '../../public/LikeIcon.svg';

export const Like = ({
	counter,
	showCounter = true,
}: ILikeProps): JSX.Element => {
	return (
		<div className={style.likeWrapper}>
			{showCounter && <span className={style.counter}>{counter}</span>}
			<a
				title='Лайк'
				href='#'
				className={classNames({
					[style.rowLike]: showCounter,
					[style.circleLike]: !showCounter,
				})}>
				<LikeIcon className={classNames(style.likeIcon)} />
			</a>
		</div>
	);
};
