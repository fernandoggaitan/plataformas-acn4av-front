import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { BrowserRouter, Routes, Route } from "react-router-dom"

//Contextos
import AuthProvider from '@contexts/AuthContext';
import ProtectedRoute from '@contexts//ProtectedRoute';

//Importar las páginas.
import Inicio from '@pages/Inicio';
import CandidatosLista from '@pages/CandidatosLista';
import ProductosLista from '@pages/ProductosLista';
import Pokemons from '@pages/Pokemons';
import Pokemon from '@pages/Pokemon';
import Login from '@pages/Login';
import Dashboard from '@pages/Dashboard';
import Error404 from '@pages/Error404';

//Importar el menú.
import Menu from '@components/Menu';

export default function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/candidatos' element={<CandidatosLista />} />
            <Route path='/productos' element={<ProductosLista />} />
            <Route path='/pokemones' element={<Pokemons />} />
            <Route path='/pokemon/:nombre' element={<Pokemon />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </AuthProvider>
  )

}