import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export default interface ITagProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	children: ReactNode;
	tag: 'light' | 'normal' | 'bold';
}
