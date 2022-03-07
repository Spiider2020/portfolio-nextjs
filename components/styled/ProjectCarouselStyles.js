import styled from 'styled-components';
import { cardSizes } from '../../constants/projectCarouselSettings';
const { xl, lg, sm } = cardSizes;
const carouselXL = xl.width * xl.visible + (xl.visible - 1) * xl.gap + 4;
const carouselLG = lg.width * lg.visible + (lg.visible - 1) * lg.gap + 4;
const carrouselSM = sm.width * sm.visible + (sm.visible - 1) * sm.gap + 4;

export const ProjectCarouselFull = styled.div`
	width: 100%;
	margin-top: 20px;
	display: flex;
	gap: 20px;
	justify-content: center;
	align-items: center;
	@media ${(props) => props.theme.breakpoints.sm} {
		gap: 7px;
	}
`;

export const ProjectCarouselContainer = styled.div`
	max-width: 100%;
	width: ${carouselXL}px;
	background: #0f1624;
	padding: 20px 2px;
	list-style: none;
	display: flex;
	justify-content: space-between;
	gap: ${xl.gap}px;
	overflow-x: scroll;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		width: ${carouselLG}px;
		gap: ${lg.gap}px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: ${carrouselSM}px;
		gap: ${sm.gap}px;
		scroll-snap-type: x mandatory;
		scroll-padding-left: 2px;
		touch-action: pan-x;
		justify-content: initial;
	}
`;

export const MobileScrollNode = styled.div`
	display: flex;
`;

export const ProjectItem = styled.div`
	background: #0e131f;
	border-radius: 5px;
	padding: 20px;
	min-width: ${xl.width}px;
	box-shadow: 0 0 3px 1px rgba(255, 255, 255, 0.4);
	&:hover {
		cursor: pointer;
		outline: 2px solid #945dd6;
	}
	@media ${(props) => props.theme.breakpoints.lg} {
		min-width: ${lg.width}px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 15px;
		min-width: ${sm.width}px;
		scroll-snap-align: start;
	}
`;

export const ProjectItemTitle = styled.h4`
	text-align: center;
	font-size: 18px;
	color: #9cc9e3;
	margin-bottom: 20px;
`;

export const ProjectItemText = styled.p`
	text-align: center;
`;
