import IHeadlingProps from './Headling.props';
import style from './Headling.module.css';
import classNames from 'classnames';

export const Headling = ({
	children,
	tag,
	className,
	...props
}: IHeadlingProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return (
				<h1
					className={classNames(style.headling, style.h1, className)}
					{...props}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2
					className={classNames(style.headling, style.h2, className)}
					{...props}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3
					className={classNames(style.headling, style.h3, className)}
					{...props}>
					{children}
				</h3>
			);
		default:
			return <></>;
	}
};
