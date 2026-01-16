import { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CareerSummary = memo(({ isDark }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        if (!textElement) return;

        // Split text into words only once
        const content = "Digital marketing professional with hands-on experience in B2B campaigns, social media handling, SEO content, and basic analytics. Have worked on webinars, newsletters, website content, and LinkedIn marketing. Background in computer science helps in using tools and data to improve campaign performance.";

        textElement.innerHTML = content
            .split(' ')
            .map((word) => `<span class="inline-block opacity-20 transition-none mr-[0.3em]">${word}</span>`)
            .join('');

        const spans = textElement.querySelectorAll('span');

        // Kill previous animation if exists
        if (animationRef.current) {
            animationRef.current.kill();
        }

        animationRef.current = gsap.to(spans, {
            scrollTrigger: {
                trigger: textElement,
                start: 'top 85%',
                end: 'bottom 40%',
                scrub: 0.5, // Reduced scrub for smoother feel
            },
            opacity: 1,
            stagger: 0.05, // Reduced stagger for smoother animation
            ease: 'none',
        });

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
            ScrollTrigger.getAll().forEach(t => {
                if (t.vars?.trigger === textElement) {
                    t.kill();
                }
            });
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="min-h-[60vh] flex items-center justify-center px-6 md:px-24 py-16"
        >
            <div className="max-w-4xl">
                <h3 className="text-disha-red font-display font-bold uppercase tracking-widest mb-6 text-sm md:text-base">
                    Career Summary
                </h3>
                <p
                    ref={textRef}
                    className="text-2xl md:text-4xl font-display leading-snug"
                />
            </div>
        </section>
    );
});

CareerSummary.displayName = 'CareerSummary';

export default CareerSummary;
