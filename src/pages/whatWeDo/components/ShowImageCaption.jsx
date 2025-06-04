export default function ShowImageCaption({ image, title = null, caption }) {
    return(
        <article className="flex flex-col h-full min-h-[400px] border-gray-300 rounded-lg shadow-md overflow-hidden">
            <div className="w-full h-70 md:h-64 lg:h-80 overflow-hidden rounded-lg mb-6">
                <img src={image} alt={caption} className="w-full h-full object-cover" />
            </div>
            {title && <h3 className="text-lg md:text-xl font-sans font-bold text-center mb-4 px-2">{title}</h3>}
            <p className="font-semibold text-center mb-6 px-2">{caption}</p>
        </article>
    );
}