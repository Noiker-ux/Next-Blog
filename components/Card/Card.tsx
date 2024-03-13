'use client';
import ICardProps from './Card.props';
import style from './Card.module.css';
import Image from 'next/image';
import { Headling, Like, Paragraph, Tag } from '..';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useLike } from '@/hooks/useLike';

export const Card = ({
  id,
  image = '/public/Grid.jpg',
  tags,
  timestamp,
  title,
  anons,
  likes,
  isLiked,
  timeReading,
}: ICardProps) => {
  const [likeObj, setLikeObj] = useLike(likes, isLiked);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        likes: likeObj.countLikes,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setIsLoading(false);
  }, [likeObj, id]);

  return (
    <div className={classNames(style.card)}>
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
          {isLoading && <>Обновление</>}
          <div
            onClick={() => {
              setLikeObj(likes, isLiked);
            }}>
            <Like
              countLikes={likeObj.countLikes}
              showCounter={true}
              isLiked={likeObj.isLiked}
            />
          </div>
        </div>
        <Headling tag='h3'>{title}</Headling>
        <Paragraph lineHeight={'small'} className={style.anons}>
          {anons}
        </Paragraph>
      </div>
      <div className={style.bottom}>
        <Tag tag={'light'}>{timeReading} минут(ы)</Tag>
        <Link className={style.readMore} href={`/posts/${id}`}>
          Читать
          <Image src={'/arrow.svg'} alt={'Иконка стрелочки'} width={20} height={20} />
        </Link>
      </div>
    </div>
  );
};
