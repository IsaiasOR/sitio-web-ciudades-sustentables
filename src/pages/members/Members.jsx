import HeroSection from '../../components/HeroSection/HeroSection';
import ImageCover from '../../assets/images/integrantes-hero.webp';
import Member from './components/Member';
import { members } from '../../utils/Content/MembersContent'

export default function Integrantes() {
    return (
        <main>
            {/* Sección Hero */}
            <HeroSection
                backgroundImage={ImageCover}
                title="INTEGRANTES"
            />

            <section>
                <header className="relative z-10 text-center p-15 xl:px-70 bg-[#6ba94f] text-white">
                    <h2 className="text-xl md:text-3xl font-sans font-bold">
                        Estamos orgullosos de la riqueza profesional, pero fundamentalmente de la humana que tiene nuestro equipo
                    </h2>
                </header>

                <section className="my-10 xl:mx-50 grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {members.map((member, index) => (
                        <Member
                            key={index}
                            // image={member.image}
                            name={member.name}
                            subtitle={member.position}
                            description={member.description}
                            linkedin={member.linkedin}
                        />
                    ))}
                </section>
            </section>
        </main>
    );
}