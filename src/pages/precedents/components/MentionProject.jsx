import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button.jsx'

export default function MentionProyect({ title, dates, link }) {
    const [boldPart, ...rest] = title.split(':');

    return(
        <section className="px-4 py-10 md:px-20 xl:px-60 bg-[#d5e5d8]">
            <h3 className="text-center text-2xl md:text-4xl py-6">
                <strong className="tracking-wider">{boldPart}:</strong>{rest.join(':')}
            </h3>
            <p className="text-center font-bold text-base md:text-lg my-5">{dates}</p>
            <div className="flex items-center justify-center">
                <Link to={link}>
                    <Button text="Más información" />
                </Link>
            </div>
        </section>
    );
}