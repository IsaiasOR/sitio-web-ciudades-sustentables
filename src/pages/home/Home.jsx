import ImageCover from '../../assets/images/home-hero.webp';
import HeroSection from '../../components/HeroSection/HeroSection';
import AboutUsSection from './AboutUsSection';
import { quienesSomosTextos, queBuscamos } from '../../utils/Content/AboutUsContent';
import MissionVisionSection from './MissionVisionSection';
import { missionVissionContent } from '../../utils/Content/MissionVisionContent.jsx';
import ValuesSection from './ValuesSection';
import { IconConfianza, IconRespeto, IconRigurosidad, IconSolidaridad, IconTransparencia } from '../../assets/icons/index.jsx';
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

                    {missionVissionContent.map((item, index) => (
                        <div
                            key={index}
                            className={index === missionVissionContent.length - 1 ? "md:col-span-2" : ""}
                        >
                            <MissionVisionSection
                                image={item.image}
                                title={item.title}
                                paragraphs={item.text}
                            />
                        </div>
                    ))}
            </section>

            {/* Sección valores */}
            <ValuesSectionHome />

            {/* Redes sociales */}
            <section className="bg-[#6ba94f]">
                <SocialNetworks title="Podes comunicarte con el equipo en nuestras redes" />
            </section>
        </main>
    );
}

function ValuesSectionHome() {
    return (
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
    );
}