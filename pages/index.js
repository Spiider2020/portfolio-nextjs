import { Layout } from '../components/Layout';
import { Section } from '../styles/GlobalComponents';
import Hero from '../components/Hero';
import BgAnimation from '../components/BgAnimation';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import TimeLine from '../components/TimeLine';
// import Achievements from '../components/Achievements';
import ProjectCarousel from '../components/ProjectCarousel';

export default function Home() {
	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<Projects />
			<ProjectCarousel />
			<Technologies />
			<TimeLine />
			{/* <Achievements /> */}
		</Layout>
	);
}
