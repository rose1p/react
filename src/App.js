import './App.css';
import HeaderPage from './component/Shop/HeaderPage';
import { Container } from 'react-bootstrap';
import RouterPage from './component/Shop/RouterPage';

const App = () => {
	const background = "/images/header02.png";
	return (
		<Container>
			<img src={background} width="100%" />
			<HeaderPage />
			<RouterPage />
		</Container>
	);
}

export default App;
