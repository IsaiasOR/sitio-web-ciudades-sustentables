export default function ShowPidContent({ text }) {
    return (
        <section className="my-30 md:mx-20 lg:mx-50">
            <header className="text-center font-bold text-xl p-10">
                <h3 className="text-xl md:text-2xl">{text.title}</h3>
            </header>
            <div className="px-10 text-center space-y-5">
                {text.content.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </section>
    );
}