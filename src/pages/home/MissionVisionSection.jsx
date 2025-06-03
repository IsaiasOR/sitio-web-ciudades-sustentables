export default function MissionVisionSection({ image, title, paragraphs }) {
    return (
        <section className="flex flex-col justify-around md:justify-between h-full min-h-[500px] border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-48 md:h-64 lg:h-72 overflow-hidden rounded-lg">
                <img src={image} alt={title} className="w-full h-full object-cover"/>
            </div>
            <header className="relative z-10 text-center px-10 py-5 text-green-900">
                <h3 className="text-lg md:text-2xl font-sans font-bold tracking-wider">{title}</h3>
            </header>
            <div className="relative z-10 text-center font-sans text-sm md:text-lg px-10 py-2 md:px-10">
                {paragraphs.map((item) => (
                    <p key={item.id} className="mb-4">{item.text}</p>
                ))}
            </div>
        </section>
    );
}