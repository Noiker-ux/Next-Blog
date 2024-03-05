import IPost from '@/interfaces/IPost';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default interface ICardListProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  posts: IPost[];
}
