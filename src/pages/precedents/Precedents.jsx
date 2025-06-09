import HeroSection from '../../components/HeroSection/HeroSection';
import ImageCover from '../../assets/images/antecedentes-hero.webp';
import MentionProyect from './components/MentionProject';
import { pidNovel7037, pidNovel7038, pid7045, pid7056, pid7082 } from '../../utils/Content/PidContent';
import { navigationItems } from '../../utils/NavigationData';

export default function Antecedentes() {

const proyectos = [
    { ...pidNovel7037, link: navigationItems.antecedentes[0].path },
    { ...pidNovel7038, link: navigationItems.antecedentes[1].path },
    { ...pid7045, link: navigationItems.antecedentes[2].path },
    { ...pid7056, link: navigationItems.antecedentes[3].path },
    { ...pid7082, link: navigationItems.antecedentes[4].path },
];

    return (
        <main>
            {/* Sección Hero */}
            <HeroSection
                backgroundImage={ImageCover}
                title="Antecedentes"
            />

            <section>
                <header className="relative z-10 text-center p-15 bg-[#6ba94f] text-white">
                    <h2 className="text-2xl md:text-5xl font-sans font-bold uppercase tracking-wider">Proyectos</h2>
                </header>

                {proyectos.map(({ abbreviation, dates, link }, index) => (
                    <div key={index}>
                        <MentionProyect
                            title={abbreviation}
                            dates={dates}
                            link={link}
                        />
                        {/* Separador salvo en el último */}
                        {index < proyectos.length - 1 && <div className="bg-[#6ba94f] h-10" />}
                    </div>
                ))}
            </section>
        </main>
    );
}