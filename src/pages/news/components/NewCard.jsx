export default function NewCard({ image, noticia, title }) {
    return (
        <article className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden mx-5 md:mx-20 my-8">
            <div className="md:w-1/3 w-full h-auto">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            {/* Contenido a la derecha */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
                <header className="mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
                </header>
                <div className="text-sm md:text-base text-gray-700 space-y-2">
                    {Array.isArray(noticia.text) ? noticia.text.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))
                        : <p>{noticia.text}</p>
                    }
                </div>
            </div>
        </article>
    );
}