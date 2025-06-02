import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useHoverSupport from './UseHoverSupport';
import classNames from 'classnames';
import { navLinkStyles } from '../../utils/styles';
import { useEffect, useRef } from 'react';

export default function DropdownMenu({ title, basePath, items, icon, closeAll }) {
    const [open, setOpen] = useState(false);
    const supportsHover = useHoverSupport();
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        if (!supportsHover) setOpen(!open);
    };

    const handleTitleClick = (e) => {
        if (!supportsHover) {
            e.preventDefault();
            handleToggle();
        }
    };

    const handleItemClick = (path) => {
        setOpen(false); // Cerrar el dropdown inmediatamente
        closeAll?.();
        navigate(path);
    };

    useEffect(() => {
    if (!supportsHover && open) {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }
    }, [open, supportsHover]);


    return (
        <div
            ref={dropdownRef}
            className={classNames("relative ml-4", {
                "group": supportsHover
            })}
            onMouseLeave={() => supportsHover && setOpen(false)}
        >
            <div
                onClick={handleTitleClick}
                className={navLinkStyles.dropdownMenu}
                onMouseEnter={() => supportsHover && setOpen(true)}
            >
                <Link to={basePath}>{title}</Link>
                {icon && (
                    <img
                        src={icon}
                        alt="Arrow"
                        className={`size-3 lg:size-4 transform transition-transform duration-300 ${open ? 'rotate-180' : ''} invert`}
                    />
                )}
            </div>
            <div
                className={`
                    absolute top-full left-0 bg-white text-black rounded shadow-md p-2 space-y-1 w-48 z-50
                    transition-opacity duration-300
                    ${supportsHover ? 'opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto'
                                    : open ? 'opacity-100 pointer-events-auto'
                                        : 'opacity-0 pointer-events-none'}
                `}
            >
                {items.map((item) => (
                    <div
                        key={item.path}
                        onClick={() => handleItemClick(item.path)}
                        className="block px-2 py-1 rounded hover:bg-gray-100 cursor-pointer"
                    >
                        {item.label}
                    </div>
                ))}
            </div>
        </div>
    );
}