import React from 'react';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
import { LeftSection } from './styled/HeroStyles';
import { HeroData } from '../constants/constants';

export default function Hero() {
	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					{HeroData.title}
				</SectionTitle>
				<SectionText>{HeroData.text}</SectionText>
				<Button onClick={() => (window.location = `mailto:${HeroData.email}`)}>Learn More</Button>
			</LeftSection>
		</Section>
	);
}
