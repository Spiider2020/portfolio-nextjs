import styled from 'styled-components';

export const ProjectContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		padding-bottom: 0;
	}
`;

export const ImgGallery = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ImgSelected = styled.img`
	width: 100%;
	height: 400px;
	object-fit: cover;
	overflow: hidden;
	outline: 1px solid rgba(255, 255, 255, 0.4);
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 265px;
	}
`;

export const ImgNav = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding: 2rem 0;
	align-items: center;
	justify-content: space-evenly;
	gap: 2rem;
`;

export const ImgNavItem = styled.img`
	width: 100px;
	height: 66px;
	opacity: 0.5;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
	&.selected-img {
		outline: 2px solid white;
		opacity: 1;
	}
`;

export const BackContainer = styled.div`
	padding: 3rem 0 0 3rem;
	& a {
		text-decoration: none;
		color: rgba(255, 255, 255, 0.75);
	}
	& a:hover {
		color: white;
	}
`;

export const ProjectInfoContainer = styled.div`
	display: block;
	& h1 {
		text-align: center;
	}
`;

export const ProjectDescription = styled.p`
	text-indent: 3rem;
	padding: 3rem 2rem;
	line-height: 2.5rem;
`;

export const FeaturesContainer = styled.div`
	display: block;
	padding: 0 2rem;
`;

export const MainFeaturesList = styled.ul`
	padding: 1rem 3rem;
	li {
		list-style: square;
	}
`;

export const TechContainer = styled.div`
	padding: 3rem 2rem;
	line-height: 2.5rem;
`;

export const TagsList = styled.ul`
	padding: 2rem 0;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	li {
		width: 100px;
		min-width: fit-content;
		text-align: center;
		background-color: #6b3030;
		padding: 3px 2px;
		border-radius: 5px;
	}
`;

export const LinkContainer = styled.div`
	padding: 3rem 0 0 0;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const ProjectLink = styled.a`
	color: #d4c0c0;
	width: 150px;
	text-align: center;
	font-size: 1.6rem;
	padding: 1rem 1.5rem;
	background: #6b3030;
	border-radius: 15px;
	transition: 0.5s;
	cursor: pointer;
	&:hover {
		background: #801414;
	}
`;
