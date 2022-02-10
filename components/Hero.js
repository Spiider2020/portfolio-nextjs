import React from 'react';
import { Section, SectionText, SectionTitle } from '../styles/GlobalComponents';
import Button from '../styles/GlobalComponents/Button';
import { LeftSection } from './styled/HeroStyles';
import { HeroData } from '../constants/sitedata';

export default function Hero() {
	return (
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					{HeroData.title}
				</SectionTitle>
				<SectionText>{HeroData.text}</SectionText>
				<Button onClick={() => (window.location = `mailto:${HeroData.email}`)}>{HeroData.btnText}</Button>
			</LeftSection>
		</Section>
	);
}
