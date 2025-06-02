import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Logo from '../../assets/icons/logoSustentable.svg';
import Menu from '../../assets/icons/menu.png';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu.jsx';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);

    return (
        <nav className="bg-green-800 py-4 px-8 w-full flex justify-between items-center z-50 relative">
            {/* Logo */}
            <div>
                <Link to="/">
                    <img src={Logo} alt="logo-sustentable" className="size-9" />
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                <button
                    ref={menuButtonRef}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-full hover:bg-green-900 transition-colors"
                >
                    <img src={Menu} alt="menu" className="size-6 invert" />
                </button>
                <MobileMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)}  menuButtonRef={menuButtonRef} />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
                <DesktopMenu closeAllMenus={() => setIsMenuOpen(false)} />
            </div>
        </nav>
    );
}