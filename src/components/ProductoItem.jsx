import { useState } from "react"
import Form from 'react-bootstrap/Form';

export default function ProductoItem( {ID, nombre, precio, onChangeTotal} ){

    const [cantidad, setCantidad] = useState(0);
    const [total, setTotal] = useState(0);

    const handleCantidad = (e) => {
        //Validar la información.
        const cantidad_nuevo = parseInt(e.target.value, 10);
        if( isNaN(cantidad_nuevo) || cantidad_nuevo < 0 ) return;
        //
        const total_nuevo = cantidad_nuevo * precio;

        onChangeTotal( total, total_nuevo );

        //Setters
        setCantidad(cantidad_nuevo);
        setTotal(total_nuevo);
    }

    return (
        <tr>
            <td> {nombre} </td>
            <td> {precio} </td>
            <td>  
                <Form.Control type="number" value={cantidad} onChange={handleCantidad} />
            </td>
            <td> {total} </td>
        </tr>
    )

}