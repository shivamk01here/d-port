import { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
    {
        id: 1,
        institution: 'University of Delhi',
        degree: 'Bachelor of Science (B.Sc.) Honors in Computer Science',
        grade: 'CGPA: 7.5 / 10',
        location: 'Delhi, India',
        period: 'July 2021 - June 2024',
        icon: GraduationCap,
    },
    {
        id: 2,
        institution: 'Ramjas School, Pusa Road',
        degree: 'Higher Secondary Certificate (XII) - PCM + Computer Science',
        grade: '94.5%',
        location: 'New Delhi, India',
        period: 'April 2014 - July 2021',
        icon: Award,
    },
];

const Education = memo(() => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);
        const ctx = gsap.context(() => {
            cards.forEach((card, index) => {
                gsap.from(card, {
                    x: index % 2 === 0 ? -40 : 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                });
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-white/5 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-10 left-1/4 w-40 h-40 bg-disha-yellow/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-56 h-56 bg-disha-red/5 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 text-disha-red font-display font-bold uppercase tracking-widest mb-4">
                        <GraduationCap className="w-5 h-5" />
                        <span>Education</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Academic <span className="text-disha-yellow">Journey</span>
                    </h2>
                </div>

                {/* Education Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {educationData.map((edu, index) => {
                        const IconComponent = edu.icon;
                        return (
                            <div
                                key={edu.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="group"
                            >
                                <div className="relative p-8 rounded-3xl bg-cream dark:bg-charcoal border border-black/5 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden h-full">
                                    {/* Decorative Corner */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 ${index === 0 ? 'bg-disha-red' : 'bg-disha-yellow'} opacity-10 rounded-bl-full`} />

                                    {/* Icon */}
                                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${index === 0 ? 'bg-disha-red/10 text-disha-red' : 'bg-disha-yellow/20 text-disha-yellow'} mb-6`}>
                                        <IconComponent className="w-7 h-7" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-disha-red transition-colors duration-300">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-base text-charcoal/80 dark:text-cream/80 mb-4">
                                        {edu.degree}
                                    </p>

                                    {/* Grade Badge */}
                                    <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${index === 0 ? 'bg-disha-red/10 text-disha-red' : 'bg-disha-yellow/20 text-disha-yellow'} mb-4`}>
                                        {edu.grade}
                                    </div>

                                    {/* Meta Info */}
                                    <div className="flex flex-wrap gap-4 text-sm text-grey-text mt-2">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            <span>{edu.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
});

Education.displayName = 'Education';

export default Education;
