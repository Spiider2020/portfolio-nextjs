import { route } from 'next/dist/server/router';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { projects } from '../constants/sitedata';
import { Section, SectionDivider, SectionTitle } from '../styles/GlobalComponents';
import {
	GridContainer,
	BlogCard,
	CardInfo,
	TruncateOverflow,
	ExternalLinks,
	HeaderThree,
	Hr,
	TagList,
	Tag,
	TitleContent,
	UtilityList,
	Img,
} from './styled/ProjectsStyles';

export default function Projects() {
	const router = useRouter();
	return (
		<Section nopadding id='projects'>
			<SectionDivider />
			<SectionTitle main>Projects</SectionTitle>
			<GridContainer>
				{projects.map((item) => (
					<BlogCard key={item.id}>
						<Img src={`${router.basePath}/` + item.imagesPath + '1.png'} />
						<TitleContent>
							<HeaderThree thetitle>{item.title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo>
							<TruncateOverflow>{item.description}</TruncateOverflow>
						</CardInfo>
						<div style={{ margin: '1.5rem 0 0 0' }}>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{item.tags.map((tag, index) => (
									<Tag key={'tag-' + item.id + '-' + index}>{tag}</Tag>
								))}
							</TagList>
						</div>
						<UtilityList>
							{item.source !== '' ? (
								<ExternalLinks href={item.source} target='_blank'>
									Code
								</ExternalLinks>
							) : (
								<></>
							)}
							{item.visit !== '' ? (
								<ExternalLinks href={item.visit} target='_blank'>
									Demo
								</ExternalLinks>
							) : (
								<></>
							)}
							<Link href={`/projects/${item.id}`} passHref>
								<ExternalLinks>More about</ExternalLinks>
							</Link>
						</UtilityList>
					</BlogCard>
				))}
			</GridContainer>
		</Section>
	);
}
