const baseNavLink = "text-white px-2 py-1.5 rounded-full hover:bg-green-900 transition-colors";

export const navLinkStyles = {
    default: baseNavLink,
    desktop: `${baseNavLink} ml-4`,
    dropdownMenu: `${baseNavLink} flex items-center space-x-2 cursor-pointer`,
    mobileMenu: `${baseNavLink} block font-normal cursor-pointer`,
    mobileSubMenu: `${baseNavLink} flex justify-between items-center font-normal cursor-pointer`,
    renderSubmenu: `${baseNavLink} block cursor-pointer font-extralight`
};