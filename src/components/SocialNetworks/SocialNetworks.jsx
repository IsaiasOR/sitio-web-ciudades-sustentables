import { IconFacebook, IconInstagram, IconLinkedIn } from '../../assets/icons';

export default function SocialNetworks({ title }){
    return(
        <section className="flex flex-col md:flex-row items-center justify-center p-10 py-20">
            <h4 className="text-white text-center font-bold text-lg md:text-2xl md:pr-20">
                {title}
            </h4>
            <div className="flex justify-around w-40 md:w-50 pt-5 md:pt-0">
                <a href="https://ar.linkedin.com/in/ciudades-sustentables-concordia-b773031b9" target="_blank" rel="noopener noreferrer">
                    <img src={IconLinkedIn} alt="Logo de LinkedIn" className="w-10 object-contain" />
                </a>
                <a href="https://www.instagram.com/ciudades.sustentables/" target="_blank" rel="noopener noreferrer">
                    <img src={IconInstagram} alt="Logo de Instagram" className="w-10 object-contain" />
                </a>
                <a href="https://www.facebook.com/ciudadsustentables/" target="_blank" rel="noopener noreferrer">
                    <img src={IconFacebook} alt="Logo de Facebook" className="w-10 object-contain" />
                </a>
            </div>
        </section>
    );
}