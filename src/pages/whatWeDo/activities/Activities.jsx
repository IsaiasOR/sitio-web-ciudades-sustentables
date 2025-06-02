import ShowImageActivity from './ShowImageActivity';
import { Link } from 'react-router-dom';
import ImageCover from '../../../assets/images/activities-hero.jpg';

export default function() {
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
                <header className="relative z-10 text-center text-white p-15 bg-[#6ba94f]">
                    <h1 className="text-xl md:text-3xl font-sans font-bold uppercase tracking-wider">ACTIVIDADES DE VINCULACIÓN CON LA EXTENSIÓN Y LA ACADEMIA</h1>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-10 lg:mx-auto my-20 px-4 items-stretch">
                    <ShowImageActivity
                        image={ImageCover}
                        caption="Participación en la elaboración de la ley provincial de responsabilidad social"
                    />

                    <ShowImageActivity
                        image={ImageCover}
                        caption="Integración de la comisión de responsabilidad social de la provincia"
                    />

                    <ShowImageActivity
                        image={ImageCover}
                        caption="Desarrollo de eventos de difusión de los objetivos del desarrollo sostenible"
                    />

                    <ShowImageActivity
                        image={ImageCover}
                        caption="Vinculación con otros equipos de investigación en el país y del exterior"
                    />
                </section>
            </section>

            <section>
                <header className="relative z-10 text-center text-white p-15 bg-[#6ba94f]">
                    <h1 className="text-xl md:text-2xl font-sans font-bold mb-2">Proyecto Intercátedra 2024</h1>
                    <h2 className="text-lg md:text-xl font-sans font-bold">Transparencia e Inteligencia Artificial</h2>
                </header>
                <ShowImageActivity
                    image={ImageCover}
                    caption="Proyecto Intercátedra 2024"
                />
            </section>

            <section className="bg-[#6ba94f] my-10">
                <header className="relative z-10 text-center text-white py-10 px-5 md:px-10">
                    <h1 className="text-xl md:text-2xl font-sans font-bold mb-2">Actividades de difusión y concientización a estudiantes acerca de la importancia del reciclaje y el correcto uso de los cestos a través del proyecto de extensión "Si se recicla no es basura".</h1>
                </header>
                <div className="flex justify-center items-center">
                    <Link to="/que-hacemos/extension">
                        <button className="text-white font-bold bg-green-800 px-20 py-2 mx-2 my-5 hover:cursor-pointer hover:shadow-md hover:bg-green-900 rounded-lg">
                            SI SE RECICLE, NO ES BASURA
                        </button>
                    </Link>
                </div>
            </section>

            <section>
                <header className="relative z-10 text-center text-white p-15 bg-[#6ba94f]">
                    <h1 className="text-xl md:text-2xl font-sans font-bold">Los estudiantes que integran nuestro equipo participan de diferentes congresos y concursos con sus publicaciones</h1>
                </header>
            </section>
        </main>
    );
}