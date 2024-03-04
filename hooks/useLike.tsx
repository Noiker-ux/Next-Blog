import { useState } from 'react';

export const useLike = (initialLikes: number, initialStateLiked: boolean) => {
  const [countLikes, setLikes] = useState<number>(initialLikes);
  const [isLiked, setIsLiked] = useState<boolean>(initialStateLiked);

  const handleLike = () => {
    if (isLiked) {
      setLikes(countLikes - 1);
      setIsLiked(false);
    } else {
      setLikes(countLikes + 1);
      setIsLiked(true);
    }
  };

  return [{ countLikes, isLiked }, handleLike];
};
