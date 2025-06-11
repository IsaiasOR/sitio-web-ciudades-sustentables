import HeroSection from '../../components/HeroSection/HeroSection';
import ImageCover from '../../assets/images/que-hacemos-hero.webp';
import ShowResearchTopics from './components/ShowResearchTopics';
import { metodologia } from '../../utils/Content/WhatWedoContent';
import { Link } from "react-router-dom";
import Button from '../../components/Button/Button';

export default function QueHacemos() {
    const [boldPart, ...rest] = metodologia.methodology.split(':');

    return (
            <main>
                {/* Sección Hero */}
                <HeroSection
                    backgroundImage={ImageCover}
                    title="¿Qué hacemos?"
                />

                <section className="flex justify-center my-10">
                    <ShowResearchTopics />
                </section>

                <section className="bg-[#6ba94f] text-white text-center py-16 px-5 text-lg md:text-xl mb-12">
                    <p><strong>{boldPart}:</strong>{rest.join(':')}</p>
                </section>

                <section className="bg-[#6ba94f] text-white text-center py-16 px-5 flex justify-center items-center flex-col gap-y-5 md:flex-row md:justify-evenly mb-12">
                    <h1 className="font-bold text-xl md:text-3xl break-words text-center">Algunas de nuestras actividades</h1>
                    <Link to="/que-hacemos/actividades">
                        <Button text="Actividades" />
                    </Link>
                </section>
            </main>
        );
}