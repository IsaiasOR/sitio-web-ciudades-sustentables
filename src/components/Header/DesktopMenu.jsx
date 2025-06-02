import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import { navigationItems } from '../../utils/NavigationData';
import Arrow from '../../assets/icons/arrow.png';
import { navLinkStyles } from '../../utils/Styles.jsx';

export default function DesktopMenu({ closeAllMenus }) {
    return (
        <div className="hidden md:flex md:space-x-1 lg:space-x-4 text-sm lg:text-base">
            <Link to="/" className={navLinkStyles.desktop} onClick={closeAllMenus}>Inicio</Link>
            <Link to="/novedades" className={navLinkStyles.desktop} onClick={closeAllMenus}>Novedades</Link>

            <DropdownMenu
                title="Antecedentes"
                basePath="/antecedentes"
                items={navigationItems.antecedentes}
                icon={Arrow}
                closeAll={closeAllMenus}
            />

            <DropdownMenu
                title="Qué hacemos"
                basePath="/que-hacemos"
                items={navigationItems.queHacemos}
                icon={Arrow}
                closeAll={closeAllMenus}
            />

            <Link to="/integrantes" className={navLinkStyles.desktop} onClick={closeAllMenus}>Integrantes</Link>
            <Link to="/contacto" className={navLinkStyles.desktop} onClick={closeAllMenus}>Contacto</Link>
        </div>
    );
}
