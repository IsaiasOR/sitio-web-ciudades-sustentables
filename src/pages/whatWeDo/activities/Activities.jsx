import ImageCover from '../../../assets/images/activities-hero.jpg';
import { Link } from 'react-router-dom';
import ShowImageCaption from '../components/ShowImageCaption.jsx';
import SectionHeaderActivity from './SectionHeaderActivity.jsx';
import AutomaticCarousel from '../components/AutomaticCarousel.jsx';
import Activity from '../../../assets/images/activities-hero.jpg'

export default function Activities() {
    const images = [Activity, Activity, Activity, Activity];

    return (
        <main>
            <section
                className="relative bg-cover bg-no-repeat bg-center min-h-[30rem] w-full flex items-center justify-center py-20 md:py-40"
                style={{ backgroundImage: `url(${ImageCover})` }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"/>
                <header className="z-10 text-center text-white px-4 tracking-wider">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase">Actividades</h1>
                </header>
            </section>

            <section>
                <SectionHeaderActivity title="ACTIVIDADES DE VINCULACIÓN CON LA EXTENSIÓN Y LA ACADEMIA"/>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-15 lg:mx-auto my-20 px-4 items-stretch">
                    <ShowImageCaption
                        image={ImageCover}
                        caption="Participación en la elaboración de la ley provincial de responsabilidad social"
                    />

                    <ShowImageCaption
                        image={ImageCover}
                        caption="Integración de la comisión de responsabilidad social de la provincia"
                    />

                    <AutomaticCarousel images={images} caption="Caption" />

                    <ShowImageCaption
                        image={ImageCover}
                        caption="Desarrollo de eventos de difusión de los objetivos del desarrollo sostenible"
                    />

                    <ShowImageCaption
                        image={ImageCover}
                        caption="Vinculación con otros equipos de investigación en el país y del exterior"
                    />

                    <AutomaticCarousel images={images} caption="Caption" />
                </section>
            </section>

            <section>
                <SectionHeaderActivity
                    title="Proyecto Intercátedra 2024"
                    subtitle="Transparencia e Inteligencia Artificial"
                />

                <div className="max-w-6xl mx-15 lg:mx-auto my-20 px-4 flex justify-center">
                    <div className="w-full md:w-1/2">
                        <ShowImageCaption
                            image={ImageCover}
                            caption="Proyecto Intercátedra 2024"
                        />
                    </div>
                </div>
            </section>

            <section>
                <SectionHeaderActivity
                    title="Los estudiantes que integran nuestro equipo participan de diferentes congresos y concursos con sus publicaciones"
                />

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-20 lg:mx-auto my-20 px-4 items-stretch">
                    <ShowImageCaption
                        image={ImageCover}
                        title="AUGM"
                        caption="JORNADAS DE JOVENES INVESTIGADORES"
                    />

                    <ShowImageCaption
                        image={ImageCover}
                        title="CONLAD"
                        caption="CONGRESO LATINOAMERICANO DE ADMINISTRACIÓN"
                    />

                    <ShowImageCaption
                        image={ImageCover}
                        title="JAI"
                        caption="JORNADAS NACIONALES DE ADMINISTRACIÓN E INFORMATICA"
                    />
                </section>
            </section>


            <section className="bg-[#6ba94f] my-20 py-10 px-5 md:px-20">
                <SectionHeaderActivity
                    title='Actividades de difusión y concientización a estudiantes acerca de la importancia del reciclaje y el correcto uso de los cestos a través del proyecto de extensión "Si se recicla no es basura".'/>

                <div className="flex justify-center items-center">
                    <Link to="/que-hacemos/extension">
                        <button className="text-white font-bold bg-green-800 px-10 md:px-20 py-2 mx-2 mb-5 hover:cursor-pointer hover:shadow-md hover:bg-green-900 rounded-lg">
                            SI SE RECICLE, NO ES BASURA
                        </button>
                    </Link>
                </div>
            </section>

        </main>
    );
}