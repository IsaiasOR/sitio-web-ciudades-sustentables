export default function ShowImageActivity({ image, title, caption }) {
    return(
        <article className="flex flex-col items-center py-10">
            <img src={image} alt={caption} className="w-120 mb-5" />
            <p className="font-bold text-center">{caption}</p>
        </article>
    );
}