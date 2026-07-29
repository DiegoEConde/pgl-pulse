import Section from "@/components/ui/Section";

import ProductosCard from "@/components/features/productos/ProductosCard";

import styles from "./Datos.module.css";

export default function Datos() {
    return (
        <Section title="Datos" description="Administrá la información principal del sistema.">
            <div className={styles.grid}>
                <ProductosCard />
            </div>
        </Section>
    );
}