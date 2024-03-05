import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Деталка',
};

export default function detail({ params }: { params: { alias: string } }) {
  return <div>{params.alias}</div>;
}
