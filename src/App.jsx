import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import CandidatosLista from './components/CandidatosLista';

export default function App(){

  return (
    <Container>
      <h1 className='texto-centrado'> Hola, soy un app </h1>
      <CandidatosLista />
    </Container>
  )

}