import React from 'react';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, LogoDiv, Span, NavigationDiv, SocialDiv, NavLink, SocialIcons } from './styled/HeaderStyles';

export default function Header() {
	return (
		<Container>
			<LogoDiv>
				<Link href='/'>
					<a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
						<DiCssdeck size='3rem' /> <Span>Portfolio</Span>
					</a>
				</Link>
			</LogoDiv>
			<NavigationDiv>
				<li>
					<Link href='#projects'>
						<NavLink>Projects</NavLink>
					</Link>
				</li>
				<li>
					<Link href='#tech'>
						<NavLink>Technologies</NavLink>
					</Link>
				</li>
				<li>
					<Link href='#about'>
						<NavLink>About</NavLink>
					</Link>
				</li>
			</NavigationDiv>
			<SocialDiv>
				<SocialIcons href='https://github.com/Spiider2020'>
					<AiFillGithub size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://www.linkedin.com/'>
					<AiFillLinkedin size='3rem' />
				</SocialIcons>
				<SocialIcons href='https://www.instagram.com/'>
					<AiFillInstagram size='3rem' />
				</SocialIcons>
			</SocialDiv>
		</Container>
	);
}
