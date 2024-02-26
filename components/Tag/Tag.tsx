import ITagProps from './Tag.props';
import style from './Tag.module.css';
import classNames from 'classnames';

export const Tag = ({
	children,
	tag = 'normal',
	className,
	...props
}: ITagProps): JSX.Element => {
	return (
		<p
			className={classNames(style.tag, className, {
				[style.light]: tag === 'light',
				[style.medium]: tag === 'normal',
				[style.bold]: tag === 'bold',
			})}
			{...props}>
			{children}
		</p>
	);
};
