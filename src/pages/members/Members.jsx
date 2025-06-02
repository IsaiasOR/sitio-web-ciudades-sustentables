import HeroSection from '../../components/HeroSection/HeroSection';
import ImageCover from '../../assets/images/integrantes-hero.jpg';

export default function Integrantes() {
    return (
                <main>
                    {/* Sección Hero */}
                    <HeroSection
                        backgroundImage={ImageCover}
                        title="INTEGRANTES"
                    />
                </main>
            );
}