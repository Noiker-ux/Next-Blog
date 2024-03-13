interface IDetail {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const getDetail = async (id: number): Promise<IDetail | null> => {
  const responce = await fetch(process.env.NEXT_PUBLIC_DOMAIN + `/posts/${id}`, {
    next: { revalidate: 3 },
  });
  if (!responce) {
    return null;
  }
  return responce.json();
};
