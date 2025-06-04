import { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const AutomaticCarousel = ({ images = [], caption }) => {
    const cantidad = images.length;
    const [index, setIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);
    const intervalo = useRef(null);

    const irA = (dir) => {
        setAutoplay(false)
        setIndex((prev) =>
        dir === 'left' ? (prev - 1 + cantidad) % cantidad : (prev + 1) % cantidad
        )
    };

    const irADirectamente = (i) => {
        setAutoplay(false)
        setIndex(i)
    };

    useEffect(() => {
        if (!autoplay || cantidad === 0) return

        intervalo.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % cantidad)
        }, 4000)

        return () => clearInterval(intervalo.current)
    }, [autoplay, cantidad])

    if (cantidad === 0) return null;

    return (
        <div className="w-full col-span-1 md:col-span-2 max-w-4xl mx-auto my-5 border-gray-300 rounded-lg shadow-md">
            <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                <div
                    className="w-full flex transition-transform duration-700 ease-in-out h-48 sm:h-64 md:h-100"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`img-${i}`}
                            className="w-full flex-shrink-0 object-cover object-center"
                        />
                    ))}
                </div>

                {/* Botones */}
                <button
                    onClick={() => irA('left')}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md transition"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={() => irA('right')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full shadow-md transition"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bolitas */}
                <div className="absolute bottom-3 w-full flex justify-center gap-2">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => irADirectamente(i)}
                            className={`w-3 h-3 rounded-full transition ${
                                index === i ? 'bg-green-800' : 'bg-gray-300'
                            }`}
                        ></button>
                    ))}
                </div>
            </div>

            {/* Caption */}
            {caption && (
                <p className="text-center py-6 text-sm md:text-base font-medium text-gray-800">
                    {caption}
                </p>
            )}
        </div>
    )
}

export default AutomaticCarousel