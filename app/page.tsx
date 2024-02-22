import { Like } from '@/components';
import styles from './page.module.css';

export default function Home(): JSX.Element {
	return (
		<main>
			<Like hasCounter={true}>15</Like>
			<Like hasCounter={false} />
		</main>
	);
}
