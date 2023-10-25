import './App.css';
import BookSearch from './component/ex03/BookSearch';
import { Row, Col} from 'react-bootstrap'


const App = () => {

	return (
		<div className="App">
			<Row>
			<Col><BookSearch /></Col>
			<Col><BookSearch /></Col>
			</Row>
		</div>
	)
}

export default App;
