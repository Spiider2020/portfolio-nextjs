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
						<CgWebsite size='40px' style={{ textAlign: 'center' }} />
					</ListIconContainer>
					<ListContainer>
						<ListTitle>Front-End</ListTitle>
						<ListParagraph>
							Experience with <br />
							<SiHtml5 size='14px' />
							&nbsp; HTML <br />
							<SiCss3 size='14px' />
							&nbsp; CSS <br />
							<SiSass size='14px' />
							&nbsp; Sass <br />
							<SiJavascript size='14px' />
							&nbsp; JavaScript <br />
							<SiReact size='14px' />
							&nbsp; React.js <br />
							<SiNextdotjs size='14px' />
							&nbsp; Next.js <br />
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<ListIconContainer>
						<DiDatabase size='40px' style={{ textAlign: 'center' }} />
					</ListIconContainer>
					<ListContainer>
						<ListTitle>Back-End</ListTitle>
						<ListParagraph>
							Experience with <br />
							<DiMysql size='16px' />
							&nbsp; MySQL <br />
							<SiMariadb size='15px' />
							&nbsp; MariaDB <br />
							<SiPostgresql size='14px' />
							&nbsp; PostgreSQL <br />
							<SiStrapi size='14px' />
							&nbsp; Strapi CMS <br />
						</ListParagraph>
					</ListContainer>
				</ListItem>
				<ListItem>
					<ListIconContainer>
						<MdDesignServices size='40px' style={{ textAlign: 'center' }} />
					</ListIconContainer>
					<ListContainer>
						<ListTitle>UI / UX</ListTitle>
						<ListParagraph>
							Experience with <br />
							<SiAdobexd size='14px' />
							&nbsp; Adobe XD <br />
							<SiFigma size='14px' />
							&nbsp; Figma <br />
						</ListParagraph>
					</ListContainer>
				</ListItem>
			</List>
		</Section>
	);
}
