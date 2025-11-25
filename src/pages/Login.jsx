import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import { useAuth } from '@contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const {login} = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const handleLogin = async(e) => {
        e.preventDefault();
        
        try{
            //Intentamos iniciar sesión
            const response = await axios.post("http://localhost:3000/login", {
                email,
                contrasena
            });
            //Le pasamos al login el accessToken para guardarlo como estado.
            login(response.data);
            navigate("/dashboard");
        }catch(error){
            //Error al intentar iniciar sesión.
            alert("Error al intentar iniciar sesión");
            console.log(error);
        }

    }

    return (
        <>
            <h1> Login </h1>
            <Form>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} />
                    </Col>
                </Form.Group>
                <Button onClick={handleLogin} type='submit' variant='primary'> Iniciar sesión </Button>
            </Form>
        </>
    )

}