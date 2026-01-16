import { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { Heart, Mail, Sparkles } from 'lucide-react';

const Hero = memo(({ isLoaded }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (!isLoaded) return;

        animationRef.current = gsap.timeline();

        animationRef.current
            .to('.hero-title', {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            })
            .to('.hero-subtitle', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.5')
            .to('.hero-skills', {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out'
            }, '-=0.4')

            .to('.hero-image', {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, '-=0.6');

        return () => {
            if (animationRef.current) {
                animationRef.current.kill();
            }
        };
    }, [isLoaded]);

    return (
        <section className="min-h-screen w-full flex items-center px-6 md:px-12 lg:px-24 relative overflow-hidden" id="hero">
            {/* Floating Hearts */}
            <div className="absolute top-20 left-12 opacity-30 animate-pulse hidden md:block">
                <Heart className="w-8 h-8 text-pink-300" strokeWidth={1} />
            </div>
            <div className="absolute top-16 right-20 opacity-40 animate-pulse hidden md:block">
                <Heart className="w-6 h-6 text-disha-red fill-disha-red" />
            </div>
            <div className="absolute bottom-32 left-20 opacity-20 animate-pulse hidden md:block">
                <Heart className="w-5 h-5 text-pink-300" strokeWidth={1} />
            </div>

            <div ref={containerRef} className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 py-8 lg:py-0">
                {/* Left Content */}
                <div ref={contentRef} className="flex-[1.2] text-center lg:text-left z-10">
                    <h1 className="hero-title text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight opacity-0 translate-y-10 animated-title flex flex-wrap justify-center lg:justify-start items-center gap-x-2 md:gap-x-3 whitespace-normal md:whitespace-nowrap">
                        Hey, it's me <span className="relative inline-block align-middle">
                            <span className="disha-logo text-disha-red text-4xl md:text-5xl lg:text-6xl">
                                D
                                <span className="i-container">
                                    <span className="i-base">i</span>
                                    <span className="heart-dot text-disha-red">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                    </span>
                                </span>
                                sha
                            </span>
                            {/* Squiggle Underline */}
                            <div className="absolute -bottom-1 left-0 w-full h-2 text-disha-yellow opacity-90 pointer-events-none">
                                <svg width="100%" height="100%" viewBox="0 0 100 20" preserveAspectRatio="none">
                                    <path d="M5 12 Q 30 2, 50 12 T 95 12" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                                </svg>
                            </div>
                        </span>
                    </h1>

                    <p className="hero-subtitle text-base md:text-lg text-charcoal/80 dark:text-cream/80 mt-3 opacity-0 translate-y-10 will-change-transform">
                        Content Marketing Associate.
                    </p>

                    <p className="hero-skills text-xs md:text-sm text-grey-text mt-2 max-w-md mx-auto lg:mx-0 opacity-0 translate-y-10 will-change-transform font-light">
                        Proficient in: <span className="font-medium text-charcoal dark:text-cream">Brand Strategy, Brand Design, Graphic Design & Illustration.</span>
                    </p>


                </div>

                {/* Right Image */}
                <div
                    ref={imageRef}
                    className="hero-image flex-1 flex justify-center lg:justify-end opacity-0 translate-x-10 will-change-transform"
                >
                    <img
                        src="/hero.png"
                        alt="Disha - Creative Strategist"
                        className="w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] h-auto object-contain"
                    />
                </div>
            </div>

            {/* Rough Edges Filter for Hand-drawn look */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="rough-edges">
                    <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
            </svg>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
