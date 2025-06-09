import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Arrow from '../../assets/icons/arrow.webp';
import { navigationItems } from '../../utils/NavigationData';
import { navLinkStyles } from '../../utils/Styles.jsx';

export default function MobileMenu({ isOpen, closeMenu, menuButtonRef }) {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    const handleItemClick = (path) => {
        setOpenSubmenu(null);
        closeMenu?.(); // Cierra todo el menú móvil
        navigate(path); // Navega a la ruta seleccionada
    };

    const toggleSubmenu = (menuKey) => {
        setOpenSubmenu(openSubmenu === menuKey ? null : menuKey);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
            const clickedOutsideButton = menuButtonRef?.current && !menuButtonRef.current.contains(event.target);

            if (clickedOutsideMenu && clickedOutsideButton) {
                closeMenu?.();
                setOpenSubmenu(null);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, closeMenu, menuButtonRef]);

    const renderSubmenu = (items, basePath, baseLabel) => (
        <div className="ml-4 space-y-1">
            <div
                onClick={() => handleItemClick(basePath)}
                className={navLinkStyles.renderSubmenu}
            >
                {baseLabel}
            </div>
            {items.map((subItem) => (
                <div
                    key={subItem.path}
                    onClick={() => handleItemClick(subItem.path)}
                    className={navLinkStyles.renderSubmenu}
                >
                    {subItem.label}
                </div>
            ))}
        </div>
    );

    return (
        <div
            ref={menuRef}
            className={`absolute top-16 left-0 w-full bg-green-800 text-white flex flex-col space-y-3 p-4 z-20 md:hidden
                        transition-all duration-300 transform
                        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        >
            <div onClick={() => handleItemClick("/")} className={navLinkStyles.mobileMenu}>Inicio</div>
            <div onClick={() => handleItemClick("/novedades")} className={navLinkStyles.mobileMenu}>Novedades</div>

            {/* Antecedentes */}
            <button type="button" onClick={() => toggleSubmenu("antecedentes")} className={navLinkStyles.mobileSubMenu}>
                Antecedentes
                <img src={Arrow} className={`size-4 invert transform transition-transform duration-300 ${openSubmenu === "antecedentes" ? "rotate-180" : ""}`} />
            </button>
            {openSubmenu === "antecedentes" && renderSubmenu(navigationItems.antecedentes, "/antecedentes", "Antecedentes")}

            {/* Qué hacemos */}
            <button type="button" onClick={() => toggleSubmenu("queHacemos")} className={navLinkStyles.mobileSubMenu}>
                Qué hacemos
                <img src={Arrow} className={`size-4 invert transform transition-transform duration-300 ${openSubmenu === "queHacemos" ? "rotate-180" : ""}`} />
            </button>
            {openSubmenu === "queHacemos" && renderSubmenu(navigationItems.queHacemos, "/que-hacemos", "Qué hacemos")}

            <div onClick={() => handleItemClick("/integrantes")} className={navLinkStyles.mobileMenu}>Integrantes</div>
            <div onClick={() => handleItemClick("/contacto")} className={navLinkStyles.mobileMenu}>Contacto</div>
        </div>
    );
}
