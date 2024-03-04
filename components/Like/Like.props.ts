import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ILikeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  countLikes: number;
  showCounter?: boolean;
  isLiked?: boolean;
  handleClickLike: (
    count: number,
    state: boolean,
  ) => { countLikes: number; isLiked: boolean };
}
