export const getPosts = async () => {
  const responce = await fetch(process.env.NEXT_PUBLIC_DOMAIN + '/posts', {
    next: { revalidate: 30 },
  });
  if (!responce) {
    return null;
  }
  return responce.json();
};
