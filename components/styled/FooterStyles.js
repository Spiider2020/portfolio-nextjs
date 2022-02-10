import styled from 'styled-components';

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
	max-width: 1040px;
	padding: 2rem 48px 40px;
	margin: 1rem auto;
	box-sizing: content-box;
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 0 16px 48px;
		width: calc(100vw - 32px);
	}
`;

export const LinkedItem = styled.a`
	font-size: 18px;
	line-height: 30px;
`;
