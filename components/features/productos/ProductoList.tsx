import { Producto } from "./types";

import styles from "./ProductoList.module.css";

interface ProductoListProps {
    productos: Producto[];
}

export default function ProductoList({
    productos,
}: ProductoListProps) {

    return (

        <div className={styles.list}>

            {productos.map((producto) => (

                <div
                    key={producto.id}
                    className={styles.item}
                >

                    <div>

                        <strong>{producto.nombre}</strong>

                        <span>
                            {producto.marca} • {producto.categoria}
                        </span>

                    </div>

                </div>

            ))}

        </div>

    );

}