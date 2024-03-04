export default interface ICardProps {
  id: number;
  image: string;
  tags: string[];
  timestamp: string;
  likes: number;
  isLiked: boolean;
  title: string;
  anons: string;
  timeReading: number;
}
