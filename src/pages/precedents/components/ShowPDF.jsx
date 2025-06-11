export default function ShowPDF({ pdf, title }) {
    return (
        <div className="w-full">
            {/* Móviles y pantallas pequeñas: solo botón de abrir */}
            <div className="block lg:hidden text-center mb-4">
                <a
                    href={`${import.meta.env.BASE_URL}${pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-700 text-white px-10 py-2 rounded hover:bg-green-800 transition"
                >
                    Ver PDF
                </a>
            </div>

            {/* Pantallas grandes: mostrar el PDF embebido */}
            <div className="hidden lg:flex justify-center items-center">
                <iframe
                    src={`${import.meta.env.BASE_URL}${pdf}`}
                    className="border border-gray-300 w-full lg:w-3/5 h-[600px]"
                    title={`Vista previa del PDF ${title}`}
                />
            </div>
        </div>
    );
}