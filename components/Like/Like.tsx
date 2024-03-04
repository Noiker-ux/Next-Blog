'use client';
import style from './Like.module.css';
import { ILikeProps } from './Like.props';
import classNames from 'classnames';
import LikeIcon from '../../public/LikeIcon.svg';

export const Like = ({
  countLikes,
  showCounter = true,
  isLiked = false,
  handleClickLike,
}: ILikeProps) => {
  return (
    <div className={style.likeWrapper}>
      {showCounter && <span className={style.counter}>{countLikes}</span>}
      <a
        title='Лайк'
        href='#'
        className={classNames({
          [style.rowLike]: showCounter,
          [style.circleLike]: !showCounter,
          [style.liked]: isLiked,
        })}
        onClick={() => handleClickLike(countLikes, isLiked)}>
        <LikeIcon className={classNames(style.likeIcon)} />
      </a>
    </div>
  );
};
