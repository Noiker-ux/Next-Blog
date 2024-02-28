'use client';
import style from './Like.module.css';
import { ILikeProps } from './Like.props';
import classNames from 'classnames';
import LikeIcon from '../../public/LikeIcon.svg';
import { useState } from 'react';

export const Like = ({
	counter,
	showCounter = true,
	Liked = false,
	setLikes,
}: ILikeProps): JSX.Element => {
	const [isLiked, setIsLiked] = useState<boolean>(Liked);

	const handleClickLike = (): void => {
		if (isLiked) {
			setLikes(counter - 1);
			setIsLiked(false);
		} else {
			setLikes(counter + 1);
			setIsLiked(true);
		}
	};

	return (
		<div className={style.likeWrapper}>
			{showCounter && <span className={style.counter}>{counter}</span>}
			<a
				title='Лайк'
				href='#'
				className={classNames({
					[style.rowLike]: showCounter,
					[style.circleLike]: !showCounter,
					[style.liked]: isLiked,
				})}
				onClick={() => handleClickLike()}>
				<LikeIcon className={classNames(style.likeIcon)} />
			</a>
		</div>
	);
};
