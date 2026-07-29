"use client";

// React
import { useState } from "react";

// Componentes UI
import Button from "@/components/ui/Button";
import EmptyState from "@/components/ui/EmptyState";
import Modal from "@/components/ui/Modal";
import Panel from "@/components/ui/Panel";
import Search from "@/components/ui/Search";

// Estilos
import styles from "./ProductosCard.module.css";

// Tarjeta principal del módulo Productos.
export default function ProductosCard() {

    // Estado del modal.
    const [open, setOpen] = useState(false);

    // Estado del buscador.
    const [search, setSearch] = useState("");

    return (

        <>

            {/* Tarjeta de acceso al módulo */}
            <Panel title="Productos">

                <p className={styles.description}>
                    Administrá el catálogo de productos del sistema.
                </p>

                <Button
                    fullWidth
                    onClick={() => setOpen(true)}
                >
                    Administrar
                </Button>

            </Panel>

            {/* Modal principal */}
            <Modal
                open={open}
                title="Productos"
                description="Administrá el catálogo de productos."
                size="xl"
                onClose={() => setOpen(false)}
            >

                {/* Barra superior */}
                <div className={styles.toolbar}>

                    <Search
                        placeholder="Buscar producto..."
                        value={search}
                        fullWidth
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <Button>Nuevo</Button>
                </div>

                {/* Estado vacío */}
                <EmptyState
                    title="No hay productos"
                    description="Todavía no cargaste ningún producto."
                />
            </Modal>
        </>
    );
}