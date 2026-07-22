/**
 * ============================================================
 * Logo
 * ------------------------------------------------------------
 * Identidad visual principal de PGL Pulse.
 *
 * El logo se carga desde la carpeta /public/images
 * mediante Next/Image para obtener optimización automática.
 * ============================================================
 */

import Image from "next/image";

export default function Logo() {
    return (
        <div className="logo">
            <Image
                src="/images/logo-pgl-pulse.svg"
                alt="PGL Pulse"
                className="logo-image"
                width={240}
                height={48}
                priority
            />
        </div>
    );
}