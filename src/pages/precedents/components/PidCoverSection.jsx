import ImageCover from '../../../assets/images/pid-hero.jpg'

export default function PidCoverSection({ title }) {
    return (
        <section
            className="relative bg-cover bg-no-repeat bg-center min-h-[30rem] w-full flex items-center justify-center py-20 md:py-40"
            style={{ backgroundImage: `url(${ImageCover})` }}
        >
            <div className="absolute inset-0 bg-black/60 z-0"/>
            <header className="z-10 text-center text-white px-4 tracking-wider">
                <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
            </header>
        </section>
    );
}