import ImageCover from '../../assets/images/home-hero.jpg';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutUsSection from './AboutUsSection';
import { quienesSomosTextos, queBuscamos } from '../../utils/Content/AboutUsContent';
import MissionVisionSection from './MissionVisionSection';
import { mision, vision, proposito } from '../../utils/Content/MissionVisionContent.jsx';
import ImageMision from '../../assets/images/mision.jpg'
import ImageVision from '../../assets/images/vision.jpg'
import ImageProposito from '../../assets/images/proposito.jpg'
import ValuesSection from './ValuesSection';
import IconRigurosidad from '../../assets/icons/rigurosidad.png';
import IconRespeto from '../../assets/icons/respeto.png';
import IconSolidaridad from '../../assets/icons/solidaridad.png';
import IconConfianza from '../../assets/icons/confianza.png';
import IconTransparencia from '../../assets/icons/transparencia.png';
import SocialNetworks from '../../components/SocialNetworks/SocialNetworks.jsx';

export default function Home() {
    return (
        <main>
            {/* Sección Hero */}
            <HeroSection
                backgroundImage={ImageCover}
                subtitle="EQUIPO DE INVESTIGACIÓN"
                title="CIUDADES SUSTENTABLES"
                welcomeText="Bienvenidos"
            />

            {/* Sección ¿Quiénes Somos? */}
            <AboutUsSection title="¿QUIÉNES SOMOS?" paragraphs={quienesSomosTextos} />

            {/* Sección ¿Qué buscamos? */}
            <AboutUsSection title="¿QUÉ BUSCAMOS?" paragraphs={queBuscamos} />

            {/* Sección misión, visión, propósito */}
            <section
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-10 lg:mx-auto my-20 px-4 items-stretch"
                    aria-labelledby="mision-vision-proposito">
                <div>
                    <MissionVisionSection
                        image={ImageMision}
                        title="Nuestra misión"
                        paragraphs={mision}
                    />
                </div>

                <div>
                    <MissionVisionSection
                        image={ImageVision}
                        title="Nuestra visión"
                        paragraphs={vision}
                    />
                </div>

                <div className="md:col-span-2">
                    <MissionVisionSection
                        image={ImageProposito}
                        title="Nuestro propósito"
                        paragraphs={proposito}
                    />
                </div>
            </section>

            {/* Sección valores */}
            <section className="bg-[#d5e5d8] mt-20">
                <h2 className="text-xl md:text-3xl font-sans font-bold uppercase tracking-wider text-center py-20 px-4">
                    NUESTROS VALORES
                </h2>
                <div className="flex justify-center flex-col md:flex-row">
                    <ValuesSection
                        image={IconRigurosidad}
                        title="Rigurosidad"
                    />

                    <ValuesSection
                        image={IconTransparencia}
                        title="Transparencia"
                    />

                    <ValuesSection
                        image={IconSolidaridad}
                        title="Solidaridad"
                    />

                    <ValuesSection
                        image={IconRespeto}
                        title="Respeto"
                    />

                    <ValuesSection
                        image={IconConfianza}
                        title="Confianza"
                    />
                </div>
            </section>

            {/* Redes sociales */}
            <section className="bg-[#6ba94f]">
                <SocialNetworks title="Podes comunicarte con el equipo en nuestras redes" />
            </section>
        </main>
    );
}
