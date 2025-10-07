import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter, Routes, Route } from "react-router-dom"

//Importar las páginas.
import Inicio from './pages/Inicio';
import CandidatosLista from './pages/CandidatosLista';
import ProductosLista from './pages/ProductosLista';
import Pokemons from './pages/Pokemons';
import Error404 from './pages/Error404';

export default function App(){

  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={ <Inicio /> } />          
          <Route path='/candidatos' element={ <CandidatosLista /> } />
          <Route path='/productos' element={ <ProductosLista /> } />
          <Route path='/pokemones' element={ <Pokemons /> } />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )

}