import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, LogoDiv, Span, NavigationDiv, SocialDiv, NavLink, SocialIcons } from './styled/HeaderStyles';
import { HeaderData } from '../constants/sitedata';

export default function Header() {
	const router = useRouter();
	return (
		<Container>
			<LogoDiv>
				<Link href='/'>
					<a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
						<DiCssdeck style={{ fontSize: '3rem' }} /> <Span>{HeaderData.LogoText}</Span>
					</a>
				</Link>
			</LogoDiv>
			<NavigationDiv>
				{router.pathname === '/'
					? HeaderData.nav.map((item, index) => {
							return (
								<li key={`nav-${index}`}>
									<Link href={item.link} passHref>
										<NavLink>{item.text}</NavLink>
									</Link>
								</li>
							);
					  })
					: ''}
			</NavigationDiv>
			<SocialDiv>
				<SocialIcons href={HeaderData.github} target='_blank'>
					<AiFillGithub style={{ fontSize: '3rem' }} />
				</SocialIcons>
				<SocialIcons href={HeaderData.linkedin} target='_blank'>
					<AiFillLinkedin style={{ fontSize: '3rem' }} />
				</SocialIcons>
				<SocialIcons href={HeaderData.instagram} target='_blank'>
					<AiFillInstagram style={{ fontSize: '3rem' }} />
				</SocialIcons>
			</SocialDiv>
		</Container>
	);
}
