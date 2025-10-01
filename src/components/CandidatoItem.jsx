import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import { useState } from 'react';

export default function CandidatoItem( {nombre, imagen, initialVotos} ) {

    const [votos, setVotos] = useState(initialVotos);

    const sumar = () => {
        const votos_temp = votos + 1;
        setVotos(votos_temp);
    }

    const restar = () => {
        const votos_temp = votos - 1;
        setVotos(votos_temp);
    }

    const handleVotos = (e) => {
        const votos_temp = parseInt( e.target.value, 10 );
        if( isNaN(votos_temp) || votos_temp < 0 ) return
        setVotos(votos_temp);
    }

    return (
        <Col lg="3" md="6" sm="12" className='mb-3'>
            <Card>
                <Card.Img style={{ maxWidth: '128px' }} variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title> {nombre} </Card.Title>
                    <Button onClick={sumar} variant="success" className='m-1'> + </Button>
                    <Button disabled={votos < 1} onClick={restar} variant="danger"> - </Button>
                    <Form.Control size="lg" type="text" value={votos} onChange={handleVotos} />
                </Card.Body>
            </Card>
        </Col>
    )

}