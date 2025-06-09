import ImageCover from '../../../assets/images/activities-hero.webp';

export default function LinkNewsExtension() {
    return(
        <article className="flex flex-col justify-center items-center my-4">
            <a
                href="https://despertarentrerriano.com/alumnos-de-uner-llaman-a-concientizacion-sobre-separacion-de-residuos-en-la-comunidad/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full max-w-xl h-auto rounded-lg border border-gray-50 overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
                <div>
                    <img
                        src={ImageCover}
                        alt="Alumnos de UNER concientizan sobre separación de residuos"
                        className="w-full h-64 object-cover"
                    />
                </div>
                <div className="p-4 bg-white">
                    <h3 className="text-blue-800 font-semibold text-lg mb-2">
                        Alumnos de UNER llaman a concientización sobre separación de residuos en la comunidad - Despertar Entrerriano
                    </h3>
                    <p className="text-gray-700 text-sm">
                        Dialogamos con Silvia Echeverría e Ignacio Legarreta, estudiantes de la carrera de Contador Público...
                    </p>
                </div>
            </a>
        </article>
    );
}