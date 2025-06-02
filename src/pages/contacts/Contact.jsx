import HeroSection from '../../components/HeroSection/HeroSection';
import ImageCover from '../../assets/images/contacto-hero.jpg';

export default function Contacto() {
    return (
                <main>
                    {/* Sección Hero */}
                    <HeroSection
                        backgroundImage={ImageCover}
                        title="CONTACTO"
                    />
                </main>
            );
}