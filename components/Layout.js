import Header from './Header';
import Footer from './Footer';
import { Container } from './styled/LayoutStyles';

export const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<main>{children}</main>
			<Footer />
		</Container>
	);
};
