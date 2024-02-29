import classNames from 'classnames';
import style from './Footer.module.css';
import IFooterProps from './Footer.props';

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
	return (
		<footer className={classNames(style.footer, className)} {...props}>
			<div className={style.copyright}>@ All Rights Reserved by Noiker</div>
		</footer>
	);
};
