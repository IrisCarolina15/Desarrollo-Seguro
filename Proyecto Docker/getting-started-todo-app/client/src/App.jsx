import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TodoListCard } from './components/TodoListCard';
import { Greeting } from './components/Greeting';

function App() {
    // VULNERABILIDAD: XSS usando dangerouslySetInnerHTML
    const userInput = "<img src='x' onerror='alert(\"XSS\")' />";
    return (
        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>
                    <Greeting />
                     
                    {/* Aquí renderizamos el contenido malicioso */}
                    <div>Peligro XSS:</div>
                    <div dangerouslySetInnerHTML={{ __html: userInput }} />
                    
                    <TodoListCard />
                </Col>
            </Row>
        </Container>
    );
}
// VULNERABILIDAD: uso de eval()
const userInput = "2 + 2";  
const result = eval(userInput);
console.log("Resultado (eval):", result);

export default App;
