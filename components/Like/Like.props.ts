import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ILikeProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
	hasCounter: boolean;
}
