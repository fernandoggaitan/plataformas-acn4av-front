import Table from 'react-bootstrap/Table';
import ProductoItem from '../components/ProductoItem';
import { useState } from 'react';

const productos = [
    { ID: 1, nombre: "Lápiz", precio: 500 },
    { ID: 2, nombre: "Cuaderno", precio: 1200 },
    { ID: 3, nombre: "Borrador", precio: 300 },
    { ID: 4, nombre: "Tijeras", precio: 2000 },
    { ID: 5, nombre: "Pegamento", precio: 1500 }
];

export default function ProductosLista() {

    const [total, setTotal] = useState(0);

    const handleTotal = (total_viejo, total_nuevo) => {
        setTotal( total - total_viejo + total_nuevo );
    }

    return (
        <>
            <h1> Lista </h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Precio </th>
                        <th> Cantidad </th>
                        <th> Total </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map(item => (
                            <ProductoItem
                                key={item.ID}
                                ID={item.ID}
                                nombre={item.nombre}
                                precio={item.precio}
                                onChangeTotal={handleTotal}
                            />
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4" className='text-end'>
                            Total: {total}
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </>
    )

}