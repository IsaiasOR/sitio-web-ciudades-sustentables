import HeroSection from '../../components/HeroSection/HeroSection';
import ImageCover from '../../assets/images/novedades-hero.webp';
import NewCard from './components/NewCard';
import { proyectoIntecatedraTranspareciaIA, segundaJIJI, reseniaPID7056, equipoCiudadesSustentablesAvances } from '../../utils/Content/NewsContent'
import SocialNetworks from '../../components/SocialNetworks/SocialNetworks';

export default function Novedades() {
    const newsItems = [
        {
            noticia: proyectoIntecatedraTranspareciaIA,
        },
        {
            noticia: segundaJIJI,
        },
        {
            noticia: reseniaPID7056,
        },
        {
            noticia: equipoCiudadesSustentablesAvances,
        },
    ];

    return (
            <main>
                {/* Sección Hero */}
                <HeroSection
                    backgroundImage={ImageCover}
                    title="Novedades"
                />

                {/* Sección Noticias */}
                <section className="my-20">
                    {newsItems.map((item, index) => (
                        <NewCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            noticia={item.noticia}
                        />
                    ))}
                </section>

                <section className="bg-[#6ba94f]">
                    <SocialNetworks title="No te pierdas de ninguna novedad - Seguinos en redes!" />
                </section>
            </main>
    );
}