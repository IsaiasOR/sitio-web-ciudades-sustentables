export default function ValuesSection({ image, title }) {
    return (
        <div className="flex flex-col items-center md:p-5">
            <div className="border-10 p-4 border-[#6ba94f] rounded-full">
                <img src={image} alt={title} className="w-20" />
            </div>
            <p className="text-xl md:text-xl lg:text-2xl font-sans font-semibold pt-4 mb-20">{title}</p>
        </div>
    );
}