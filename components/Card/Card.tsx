import ICardProps from './Card.props';
import style from './Card.module.css';
import Image from 'next/image';
import { Headling, Like, Paragraph, Tag } from '..';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Card = ({
	id,
	image = '/public/Grid.jpg',
	tags,
	timestamp,
	title,
	anons,
	likes,
	timeReading,
}: ICardProps): JSX.Element => {
	const [Likes, setLikes] = useState<number>(likes);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				likes: Likes,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => console.log(json));
	}, [Likes, id]);

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
					<Like setLikes={setLikes} counter={Likes} showCounter={true}></Like>
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
