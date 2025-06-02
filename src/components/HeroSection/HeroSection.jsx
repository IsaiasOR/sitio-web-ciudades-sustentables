import PropTypes from 'prop-types';

export default function HeroSection({ backgroundImage, subtitle, title, welcomeText, className = ''  }) {
    return (
        <section
            className={`relative bg-cover bg-no-repeat bg-center h-screen w-full flex items-center justify-center ${className}`}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/60 z-0" />
            <div className="relative z-10 text-center text-white px-4 tracking-wider">
                {subtitle && <h2 className="text-xl md:text-2xl font-bold uppercase">{subtitle}</h2>}
                {title && <h1 className="text-4xl md:text-6xl font-bold uppercase mt-2">{title}</h1>}
                {welcomeText && <h3 className="text-lg md:text-xl mt-4 font-semibold tracking-wide">{welcomeText}</h3>}
            </div>
        </section>
    );
}

// Validación de props
HeroSection.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string,
    welcomeText: PropTypes.string,
    className: PropTypes.string,
};
