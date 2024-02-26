import style from './Paragraph.module.css';
import classNames from 'classnames';
import IParagraphProps from './Paragraph.props';

export const Paragraph = ({
	children,
	lineHeight,
	className,
	...props
}: IParagraphProps): JSX.Element => {
	return (
		<p
			className={classNames(style.paragraph, className, {
				[style.big]: lineHeight === 'big',
				[style.small]: lineHeight === 'small',
			})}
			{...props}>
			{children}
		</p>
	);
};
