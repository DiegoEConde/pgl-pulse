// contenedor reutilizable para secciones de la aplicación

type CardProps = {
  title: string;
  children: React.ReactNode;
};

export default function Card({
  title,
  children,
}: CardProps) {
  return (
    <section className="card">
      <header className="card-header">
        <h3>{title}</h3>
      </header>

      <div className="card-content">
        {children}
      </div>
    </section>
  );
}