import { Layout } from '../components/Layout';
import { Section } from '../styles/GlobalComponents';
import Hero from '../components/Hero';
import BgAnimation from '../components/BgAnimation';

export default function Home() {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
		</Layout>
	);
}
