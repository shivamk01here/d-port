import { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';

const brands = ['TECHCHEFZ', 'OFFIGA', 'IXAMBEE', 'DU'];

const Marquee = memo(() => {
    const marqueeRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        // Use GSAP for infinite smooth marquee
        animationRef.current = gsap.to(marquee, {
            xPercent: -50,
            repeat: -1,
            duration: 25,
            ease: 'none',
        });

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, []);

    // Double the brands for seamless loop
    const allBrands = [...brands, ...brands];

    return (
        <section className="py-12 border-y border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-white/5">
            <div
                ref={marqueeRef}
                className="flex whitespace-nowrap gap-16 md:gap-32 text-4xl md:text-6xl font-display font-bold text-transparent stroke-text opacity-50 will-change-transform"
            >
                {allBrands.map((brand, index) => (
                    <span
                        key={index}
                        className="hover:text-black dark:hover:text-white transition-colors duration-200 cursor-default shrink-0"
                    >
                        {brand}
                    </span>
                ))}
            </div>
        </section>
    );
});

Marquee.displayName = 'Marquee';

export default Marquee;
