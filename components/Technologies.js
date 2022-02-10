import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { MdDesignServices } from 'react-icons/md';
import { DiMysql, DiDatabase } from 'react-icons/di';
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiSass,
	SiReact,
	SiNextdotjs,
	SiMariadb,
	SiPostgresql,
	SiStrapi,
	SiAdobexd,
	SiFigma,
} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../styles/GlobalComponents';
import {
	List,
	ListContainer,
	ListItem,
	ListParagraph,
	ListTitle,
	ListIconContainer,
} from './styled/TechnologiesStyles';

export default function Technologies() {
	return (
		<Section id='tech'>
			<SectionDivider />
			<SectionTitle main='true'>Technologies</SectionTitle>
			<SectionText>I've worked with a range of technologies in the web development world.</SectionText>
			<List>
				<ListItem>
					<ListIconContainer>
						<CgWebsite size='4rem' style={{ textAlign: 'center' }} />
					</ListIconContainer>
					<ListContainer>
						<ListTitle>Front-End</ListTitle>
						<ListParagraph>
							Experience with <br />
							<SiHtml5 size='1.4rem' />
							&nbsp; HTML <br />
							<SiCss3 size='1.4rem' />
							&nbsp; CSS <br />
							<SiSass size='1.4rem' />
							&nbsp; Sass <br />
							<SiJavascript size='1.4rem' />
							&nbsp; JavaScript <br />
							<SiReact size='1.4rem' />
							&nbsp; React.js <br />
							<SiNextdotjs size='1.4rem' />
							&nbsp; Next.js <br />
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<ListIconContainer>
						<DiDatabase size='4rem' style={{ textAlign: 'center' }} />
					</ListIconContainer>
					<ListContainer>
						<ListTitle>Back-End</ListTitle>
						<ListParagraph>
							Experience with <br />
							<DiMysql size='1.6rem' />
							&nbsp; MySQL <br />
							<SiMariadb size='1.5rem' />
							&nbsp; MariaDB <br />
							<SiPostgresql size='1.4rem' />
							&nbsp; PostgreSQL <br />
							<SiStrapi size='1.4rem' />
							&nbsp; Strapi CMS <br />
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<ListIconContainer>
						<MdDesignServices size='4rem' style={{ textAlign: 'center' }} />
					</ListIconContainer>
					<ListContainer>
						<ListTitle>UI / UX</ListTitle>
						<ListParagraph>
							Experience with <br />
							<SiAdobexd size='1.4rem' />
							&nbsp; Adobe XD <br />
							<SiFigma size='1.4rem' />
							&nbsp; Figma <br />
						</ListParagraph>
					</ListContainer>
				</ListItem>
			</List>
		</Section>
	);
}
