import { Link } from "react-router-dom";

export default function MentionProyect({ title, dates, link }) {
    const [boldPart, ...rest] = title.split(':');

    return(
        <section className="px-4 py-10 md:px-20 xl:px-60 bg-[#d5e5d8]">
            <h2 className="text-center text-2xl md:text-4xl py-6">
                <strong className="tracking-wider">{boldPart}:</strong>{rest.join(':')}
            </h2>
            <p className="text-center font-bold text-base md:text-lg my-5">{dates}</p>
            <div className="flex items-center justify-center">
                <Link to={link}>
                    <button className="text-white bg-green-800 px-20 py-2 mx-2 my-5 hover:cursor-pointer hover:shadow-md hover:bg-green-900 rounded-lg">
                        Más información
                    </button>
                </Link>
            </div>
        </section>
    );
}