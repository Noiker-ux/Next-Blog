import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface ICardListProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
}
