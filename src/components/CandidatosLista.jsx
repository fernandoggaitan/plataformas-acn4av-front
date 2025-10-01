import Row from 'react-bootstrap/Row';

//import img from '../img/90.jpg';

import CandidatoItem from './CandidatoItem';

const candidatos = [
    {
        ID: 1,
        nombre: "Sofía",
        imagen: "https://randomuser.me/api/portraits/women/90.jpg",
        votos: 5
    },
    {
        ID: 2,
        nombre:"Pablo",
        imagen: "https://randomuser.me/api/portraits/men/49.jpg",
        votos: 3   
    },
    {
        ID: 3,
        nombre: "Valeria",
        imagen: "https://randomuser.me/api/portraits/women/61.jpg",
        votos: 2
    }
];

export default function CandidatosLista() {

    return (
        <Row>
            {
                candidatos.map( c => (
                    <CandidatoItem 
                        key={c.ID}
                        nombre={c.nombre} 
                        imagen={c.imagen}
                        initialVotos={c.votos}
                    />
                ))
            }
        </Row>
    )

}