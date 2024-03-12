import { getPosts } from '@/api/getPosts';
import { CardList } from '@/components/CardList/CardList';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <CardList posts={posts} />
    </main>
  );
}
