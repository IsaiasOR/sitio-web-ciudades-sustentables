export default function NewCard({ noticia }) {
    const Figure = (
        <img
            src={noticia.image}
            alt={noticia.title}
            className="w-full h-full object-scale-down"
            loading="lazy"
        />
    );
    return (
        <article className="flex flex-col lg:flex-row rounded-lg shadow-md overflow-hidden mx-5 lg:mx-20 my-8">
            <div className="lg:w-1/3 w-full h-auto">
                {noticia.link ? (
                    <a
                        href={noticia.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {Figure}
                    </a>
                    ) : (
                    Figure
                )}
            </div>

            {/* Contenido a la derecha */}
            <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center">
                <header className="mb-2">
                    <h3 className="text-xl lg:text-2xl font-semibold">{noticia.title}</h3>
                </header>
                <div className="text-sm lg:text-base text-gray-700 space-y-2">
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