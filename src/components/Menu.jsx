import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@contexts/AuthContext';
import { Button } from 'react-bootstrap';

/*
function SubMenu(p_is_logueado){
    if( p_is_logueado ){
        return <Nav.Link as={Link} to="/dashboard"> Dashboard </Nav.Link>
    }else{
        return <Nav.Link as={Link} to="/login"> Login </Nav.Link>
    }
}
*/

export default function Menu() {

    const {is_logueado, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login");
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/"> Inicio </Nav.Link>
                        <Nav.Link as={Link} to="/candidatos"> Votación </Nav.Link>
                        <Nav.Link as={Link} to="/productos"> Tarea </Nav.Link>
                        <Nav.Link as={Link} to="/pokemones"> Pokemones </Nav.Link>
                        {
                            (is_logueado)
                            ?
                                <>
                                    <Nav.Link as={Link} to="/dashboard"> Dashboard </Nav.Link>
                                    <Button onClick={handleLogout} variant='danger' type='button'> Cerrar sesión </Button>
                                </>
                            :
                                <Nav.Link as={Link} to="/login"> Login </Nav.Link>
                        }                                                
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

}