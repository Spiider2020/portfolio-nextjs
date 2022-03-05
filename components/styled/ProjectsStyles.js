import styled from 'styled-components';

export const Img = styled.img`
	width: 100%;
	height: 225px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	overflow: hidden;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	padding: 3rem;
	place-items: center;
	column-gap: 2rem;
	row-gap: 3rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		padding-bottom: 0;
	}
`;
export const BlogCard = styled.div`
	border-radius: 10px;
	box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
	text-align: center;
	width: 400px;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
		box-shadow: 0px 0px 10px 5px rgba(80, 78, 78, 0.7);
	}
`;
export const TitleContent = styled.div`
	text-align: center;
	z-index: 20;
	width: 100%;
`;

export const HeaderThree = styled.h3`
	font-weight: 500;
	letter-spacing: 2px;
	color: #9cc9e3;
	padding: 0.5rem 0;
	font-size: ${(props) => (props.thetitle ? '3rem' : '2rem')};
`;

export const Hr = styled.hr`
	width: 50px;
	height: 3px;
	margin: 20px auto;
	border: 0;
	background: #d0bb57;
`;

export const Intro = styled.div`
	width: 170px;
	margin: 0 auto;
	color: #dce3e7;
	font-family: 'Droid Serif', serif;
	font-size: 13px;
	font-style: italic;
	line-height: 18px;
`;

export const CardInfo = styled.div`
	width: 100%;
	padding: 0 25px;
	color: #e4e6e7;
	font-style: 2rem;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0.3rem;
	}
`;

export const TruncateOverflow = styled.p`
	--lh: 2.5rem;
	--max-lines: 3;
	text-align: center;
	line-height: var(--lh);
	position: relative;
	max-height: calc(var(--lh) * var(--max-lines));
	overflow: hidden;
	padding-right: 3rem;
	&:before {
		position: absolute;
		content: '...';
		bottom: 0;
		right: 1.5rem;
		z-index: 1;
	}
	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		right: 1rem;
		width: 1rem;
		height: 1rem;
		z-index: 0;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding-left: 2rem;
	}
`;

export const UtilityList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-around;
	margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
	color: #d4c0c0;
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

export const TagList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: space-around;
	padding: 2rem;
`;
export const Tag = styled.li`
	color: #d8bfbf;
	font-size: 1.5rem;
`;
