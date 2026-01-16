import { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';

const Loader = memo(({ onComplete }) => {
    const loaderRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        tl.to(textRef.current, {
            opacity: 1,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out'
        })
            .to(loaderRef.current, {
                y: '-100%',
                duration: 1,
                ease: 'power3.inOut'
            });

        return () => tl.kill();
    }, [onComplete]);

    return (
        <div
            ref={loaderRef}
            className="fixed top-0 left-0 w-full h-full bg-disha-red z-[9999] flex items-center justify-center will-change-transform"
        >
            <h1 ref={textRef} className="text-6xl font-display font-bold text-white opacity-0">
                DISHA KANOJIA
            </h1>
        </div>
    );
});

Loader.displayName = 'Loader';

export default Loader;
