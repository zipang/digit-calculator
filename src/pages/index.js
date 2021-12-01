import Container from "../components/base/Container";
import DigitTest from "../components/DigitTest";
import SimpleLayout from "../layouts/SimpleLayout";

const HomePage = () => (
	<SimpleLayout pageTitle="Add Digits">
		<Container bgColor="white" minHeight="100vh" p={4}>
			<DigitTest />
		</Container>
	</SimpleLayout>
);

export default HomePage;
