import ICardProps from './Card.props';
import style from './Card.module.css';
import Image from 'next/image';
import { Headling, Like, Paragraph, Tag } from '..';
import Link from 'next/link';

export const Card = ({
	image = '/public/Grid.jpg',
	tags,
	timestamp,
	title,
	anons,
	timeReading,
}: ICardProps): JSX.Element => {
	return (
		<div className={style.card}>
			<div className={style.imageWrapper}>
				<Image src={image} alt={'Картинка анонса'} width={300} height={192} />
			</div>
			<div className={style.info}>
				<div className={style.header}>
					<div className={style.header_left}>
						{tags.map((e) => (
							<Tag key={e} tag={'normal'}>
								{e}&nbsp;•
							</Tag>
						))}
						<Tag tag={'light'}>{timestamp}</Tag>
					</div>
					<Like counter={0} showCounter={true}></Like>
				</div>
				<Headling tag='h3'>{title}</Headling>
				<Paragraph lineHeight={'small'} className={style.anons}>
					{anons}
				</Paragraph>
				<div className={style.bottom}>
					<Tag tag={'light'}>{timeReading} минут(ы)</Tag>
					<Link className={style.readMore} href={'#'}>
						Читать
						<Image
							src={'/arrow.svg'}
							alt={'Иконка стрелочки'}
							width={20}
							height={20}
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
