import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ILikeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	counter: number;
	showCounter?: boolean;
	Liked?: boolean;
	setLikes: (like: number) => void;
}
