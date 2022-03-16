import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkedItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './styled/FooterStyles';
import { SocialIcons } from './styled/HeaderStyles';
import { HeaderData } from '../constants/sitedata';

export default function Footer() {
	return (
		<FooterWrapper>
			<LinkList>
				<LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkedItem href='tel:+40723786540'>+40723786540</LinkedItem>
				</LinkColumn>
				<LinkColumn>
					<LinkTitle>Email</LinkTitle>
					<LinkedItem href='mailto:catalin.stancalie@creativedb.ro'>
						catalin.stancalie@creativedb.ro
					</LinkedItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>High quality websites</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href={HeaderData.github} target='_blank'>
						<AiFillGithub style={{ fontSize: '3rem' }} />
					</SocialIcons>
					<SocialIcons href={HeaderData.linkedin} target='_blank'>
						<AiFillLinkedin style={{ fontSize: '3rem' }} />
					</SocialIcons>
					<SocialIcons href={HeaderData.instagram} target='_blank'>
						<AiFillInstagram style={{ fontSize: '3rem' }} />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	);
}
