import { useEffect, useState } from 'react';

export default function useHoverSupport() {
    const [supportsHover, setSupportsHover] = useState(true);

    useEffect(() => {
        const mql = window.matchMedia('(hover: hover)');
        setSupportsHover(mql.matches);

        const handler = (e) => setSupportsHover(e.matches);
        mql.addEventListener('change', handler);
        return () => mql.removeEventListener('change', handler);
    }, []);

    return supportsHover;
}