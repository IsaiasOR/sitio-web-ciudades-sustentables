export default function SectionHeaderActivity({ title, subtitle = null }) {
    return (
        <header className="relative z-10 text-center text-white p-15 bg-[#6ba94f]">
            <h2 className="text-xl md:text-2xl font-sans font-bold mb-2">{title}</h2>
            {subtitle && <h3 className="text-lg md:text-xl font-sans font-bold">{subtitle}</h3>}
        </header>
    );
}