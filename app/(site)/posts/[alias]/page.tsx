import { getDetail } from '@/api/getDetail';
import { Metadata } from 'next';
import style from './page.module.css';
import { notFound } from 'next/navigation';
import { Like, Tag } from '@/components';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Деталка',
};

export default async function detail({ params }: { params: { alias: string } }) {
  const detail = await getDetail(Number(params.alias));

  if (!detail) {
    notFound();
  }

  return (
    <div className={style.detail}>
      <h1>{detail.title}</h1>
      <div className={style.tags}>
        <Tag tag='normal'>Front-end</Tag>•<Tag tag='light'>1 месяц(ев) назад</Tag>•
        <Tag tag='light'>3 минут(ы)</Tag>•
        <Like countLikes={5} showCounter />
      </div>
      <Image alt='Детальная картинка' src={'/Grid.png'} width={500} height={400}></Image>
      <p>{detail.body}</p>
    </div>
  );
}
