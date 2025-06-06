import PropTypes from 'prop-types';

export default function AboutUsSection({ title, paragraphs }) {
    return (
        <section>
                <header className="relative z-10 text-center p-10 bg-[#6ba94f] text-white">
                    <h3 className="text-xl md:text-3xl font-sans font-bold uppercase tracking-wider">{title}</h3>
                </header>
                <div className="relative z-10 text-center text-sm md:text-lg py-10 px-10 md:px-50 bg-[#d5e5d8]">
                    {paragraphs.map((item) => (
                        <p key={item.id} className="mb-4">{item.text}</p>
                    ))}
                </div>
        </section>
    );
}

AboutUsSection.propTypes = {
    title: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            text: PropTypes.string.isRequired,
        })
    ).isRequired,
};