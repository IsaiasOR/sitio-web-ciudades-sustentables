import HeroSection from '../../components/HeroSection/HeroSection';
import ImageCover from '../../assets/images/antecedentes-hero.jpg';
import MentionProyect from './components/MentionProject';
import { pidNovel7037, pidNovel7038, pid7045, pid7056, pid7082 } from '../../utils/Content/PidContent';
import { navigationItems } from '../../utils/NavigationData';

export default function Antecedentes() {
    return (
        <main>
            {/* Sección Hero */}
            <HeroSection
                backgroundImage={ImageCover}
                title="Antecedentes"
            />

            <section>
                <header className="relative z-10 text-center p-15 bg-[#6ba94f] text-white">
                    <h1 className="text-2xl md:text-5xl font-sans font-bold uppercase tracking-wider">Proyectos</h1>
                </header>

                <MentionProyect
                    title={pidNovel7037.abbreviation}
                    dates={pidNovel7037.dates}
                    link={navigationItems.antecedentes[0].path}
                />
                <div className="bg-[#6ba94f] h-10" />

                <MentionProyect
                    title={pidNovel7038.abbreviation}
                    dates={pidNovel7038.dates}
                    link={navigationItems.antecedentes[1].path}
                />
                <div className="bg-[#6ba94f] h-10" />

                <MentionProyect
                    title={pid7045.abbreviation}
                    dates={pid7045.dates}
                    link={navigationItems.antecedentes[2].path}
                />
                <div className="bg-[#6ba94f] h-10" />

                <MentionProyect
                    title={pid7056.abbreviation}
                    dates={pid7056.dates}
                    link={navigationItems.antecedentes[3].path}
                />
                <div className="bg-[#6ba94f] h-10" />

                <MentionProyect
                    title={pid7082.abbreviation}
                    dates={pid7082.dates}
                    link={navigationItems.antecedentes[4].path}
                />
            </section>
        </main>
    );
}