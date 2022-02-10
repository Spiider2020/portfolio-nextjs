import React from 'react';
import { AchievementsData } from '../constants/sitedata';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './styled/AchievementsStyles';

export default function Achievements() {
	return (
		<Section>
			<SectionDivider />
			<SectionTitle main='true'>Personal Achievements</SectionTitle>
			<Boxes>
				{AchievementsData.map((card, index) => (
					<Box key={index}>
						<BoxNum>{card.number}+</BoxNum>
						<BoxText>{card.text}</BoxText>
					</Box>
				))}
			</Boxes>
		</Section>
	);
}
