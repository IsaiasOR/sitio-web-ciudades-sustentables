import HeaderExtension from './HeaderExtension.jsx';
import ImageCover from '../../../assets/images/activities-hero.webp';
import AutomaticCarousel from '../components/AutomaticCarousel.jsx';
import { siSeRecicle } from '../../../utils/Content/ExtensionContent.jsx';
import LinkNewsExtension from './LinkNewsExtension.jsx';
import ShowImageCaption from '../components/ShowImageCaption.jsx';

export default function() {
    const images = [ImageCover, ImageCover, ImageCover, ImageCover];

    return (
        <main>
            <HeaderExtension />

            <section>
                <article className="md:mx-20 lg:mx-56 my-20 flex flex-col justify-center items-center">
                    <div className="p-5 m-5">
                        <h2 className="text-green-700 text-center text-2xl md:text-4xl font-bold mb-10 tracking-wide">{siSeRecicle.title}</h2>
                        <p className="font-serif text-center leading-relaxed">{siSeRecicle.text}</p>
                    </div>
                </article>

                <section className="max-w-6xl mx-15 lg:mx-auto my-20 px-4 space-y-12">
                    {/* Grid de imágenes: 2 columnas en pantallas medianas+ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        <ShowImageCaption
                        image={ImageCover}
                        caption="Separado es un recurso"
                        />

                        <ShowImageCaption
                        image={ImageCover}
                        caption="Estación de separación en planta baja"
                        />

                        <div className="md:col-span-2">
                            <ShowImageCaption
                            image={ImageCover}
                            caption="Charla de concientización realizada a los ingresantes de las carrera de Contador Público y Licentiatura en Administración"
                            />
                        </div>
                    </div>

                    {/* Componente LinkNewsExtension en su propia fila */}
                    <div className="w-full flex justify-center">
                        <LinkNewsExtension />
                    </div>

                    {/* Carrusel en su propia fila */}
                    <div className="w-full">
                        <AutomaticCarousel images={images} caption="Flayer de difusión y concientización" />
                    </div>
                </section>
            </section>
        </main>
    );
}