import Button from "../../../components/Button/Button";
import ImageCover from '../../../assets/images/integrantes-hero.webp';

export default function Member({ name, subtitle = null, description, linkedin }) {
    return (
        <article className="min-w-[280px] max-w-xl mx-auto flex flex-col justify-around items-center rounded-lg shadow-md overflow-hidden">
            <div>
                <img src={ImageCover} alt={name} className="w-96 h-full object-cover rounded-xl" loading="lazy" />
            </div>
            <div className="text-center my-3">
                <h3 className="font-bold text-lg pb-2">{name}</h3>
                {subtitle && <h4 className="font-bold pb-3">{subtitle}</h4>}
                <div className="text-sm pt-2 px-4">
                    {description}
                </div>
            </div>
            <div className="flex justify-center">
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <Button text="LinkedIn" />
                </a>
            </div>
        </article>
    );
}