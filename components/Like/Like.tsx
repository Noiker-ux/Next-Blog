import Image from 'next/image';
import style from './Like.module.css';
import { ILikeProps } from './Like.props';
import classNames from 'classnames';

export const Like = ({
	children,
	hasCounter = true,
	className,
}: ILikeProps): JSX.Element => {
	return (
		<div
			className={classNames(
				style.like,
				className,
				hasCounter ? style.line : style.circle,
			)}>
			{hasCounter && <span>{children}</span>}
			<Image
				src='/LikeIcon.svg'
				alt='Иконка лайка'
				width={hasCounter ? 15 : 17}
				height={hasCounter ? 15 : 17}
				className={style.icon}
			/>
		</div>
	);
};
