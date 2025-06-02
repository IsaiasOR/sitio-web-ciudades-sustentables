import { temasInvestigacion } from '../../../utils/Content/WhatWedoContent';

export default function ShowResearchTopics() {
    return(
        <section className="md:w-1/3">
            <h3 className="font-bold text-lg md:text-xl my-5">Temas que investigamos:</h3>
            <ul className="list-disc pl-6 text-md md:text-lg">
            {temasInvestigacion.topics.map((item, index) => (
                <li key={index} className="mb-2">
                    {item}
                </li>
            ))}
            </ul>
        </section>
    );
}