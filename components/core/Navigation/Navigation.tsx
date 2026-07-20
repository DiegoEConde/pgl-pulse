import { navigationItems } from "@/config/navigation";

// COMPONENTE
export default function Navigation() {
    return (
        <nav className="navigation">
            {navigationItems.map((item) => (
                <div
                    key={item.id}
                    className="navigation-item"
                >
                    <button className="navigation-button">
                        {item.label}
                    </button>
                </div>
            ))}
        </nav>
    );
}