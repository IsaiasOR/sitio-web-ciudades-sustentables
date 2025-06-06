import HeroSection from '../../components/HeroSection/HeroSection';
import ImageCover from '../../assets/images/contacto-hero.jpg';
import SocialNetworks from '../../components/SocialNetworks/SocialNetworks';
import Button from '../../components/Button/Button';
import MapaSection from './components/MapaSection';

export default function Contacto() {
    return (
        <main>
            {/* Sección Hero */}
            <HeroSection
                backgroundImage={ImageCover}
                title="CONTACTO"
            />

            <UbicacionSection />

            <MapaSection />

            <ProyectsSection />

            <section className="bg-[#6ba94f]">
                <SocialNetworks title="NUESTRAS REDES" />
            </section>
        </main>
    );
}

function UbicacionSection() {
    return (
        <section className="bg-[#6ba94f] text-center text-white py-15 px-5">
            <h4 className="text-4xl md:text-6xl font-bold pb-5">¿Dónde estamos?</h4>
            <h5 className="font-semibold text-xl md:text-2xl">Facultad de Ciencias de la Administración - UNER</h5>
        </section>
    );
}

function ProyectsSection() {
    return (
        <section className="flex flex-col md:flex-row md:justify-around justify-center items-center bg-[#d5e5d8] px-5  md:px-30 xl:px-80 py-10">
            <h6 className="text-center text-2xl font-semibold">Otros proyectos en nuestra facultad</h6>
            <a href="https://www.fcad.uner.edu.ar/investigacion/proyectos-de-investigacion/" target="_blank" rel="noopener noreferrer">
                <Button text="INFO" />
            </a>
        </section>
    );
}