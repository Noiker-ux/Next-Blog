import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface IParagraphProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	lineHeight: 'big' | 'small';
	children: ReactNode;
}
