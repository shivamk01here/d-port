import { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        company: 'TechChefz Digital',
        role: 'Marketing Associate',
        location: 'Noida, India',
        period: 'Apr 2025 – Present',
        color: 'bg-disha-red',
        points: [
            'Led and executed integrated digital marketing initiatives, including webinars, founder-led events, and campaigns, owning promotions, creatives, audience engagement, and post-event content amplification.',
            'Drove LinkedIn marketing strategy by planning and managing content calendars; oversaw creation of static posts, carousels, polls, and campaign assets aligned with B2B growth objectives.',
            'Owned the design and execution of monthly newsletters, delivering personalized, client-specific communication and managing email campaigns using SendGrid to improve engagement and reach.',
            'Managed website content and updates using Strapi CMS, supporting SEO initiatives through keyword research, on-page optimization, and content alignment across campaigns.',
            'Built and maintained performance dashboards in Looker Studio to track campaign effectiveness and audience behavior; supported marketing operations using Zoho CRM and cross-team collaboration via Confluence.',
        ],
    },
    {
        id: 2,
        company: 'OFFIGA',
        role: "Founder's Office Intern",
        location: 'Connaught Place, Delhi',
        period: 'Jan 2025 – Feb 2025',
        color: 'bg-disha-yellow',
        points: [
            'Developed marketing strategies for social media platforms and planned structured social media calendars.',
            "Designed product creatives for Arzoyi's Holi Collection and merch designs for OFFIGA and The Talent Deck event in Bengaluru.",
            'Worked closely with founders, gaining exposure to corporate gifting workflows and client pitching processes.',
        ],
    },
    {
        id: 3,
        company: 'IXAMBEE',
        role: 'Digital Marketing Intern',
        location: 'Noida, India',
        period: 'Jul 2024 – Oct 2024',
        color: 'bg-charcoal dark:bg-cream',
        points: [
            'Boosted Instagram engagement by 25% through high-quality content, including reels, posts, and stories.',
            'Leveraged trending hashtags and influencer collaborations, resulting in 30% follower growth within three months.',
            'Analyzed user engagement using MoEngage analytics; executed personalized campaigns and implemented automated push notifications and in-app messages to improve interaction rates.',
        ],
    },
];

const Experience = memo(() => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const cards = cardsRef.current.filter(Boolean);
        const ctx = gsap.context(() => {
            cards.forEach((card) => {
                gsap.from(card, {
                    y: 50,
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
        <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-cream dark:bg-charcoal relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-disha-red/5 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-10 w-48 h-48 bg-disha-yellow/10 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 text-disha-red font-display font-bold uppercase tracking-widest mb-4">
                        <Briefcase className="w-5 h-5" />
                        <span>Experience</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">
                        Where I've <span className="text-disha-red">Worked</span>
                    </h2>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-disha-red via-disha-yellow to-charcoal/20 dark:to-cream/20 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={exp.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="relative pl-0 md:pl-20 group"
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-0 md:left-6 top-8 w-4 h-4 rounded-full ${exp.color} border-4 border-cream dark:border-charcoal hidden md:block group-hover:scale-125 transition-transform duration-300`} />

                                {/* Card */}
                                <div className="relative p-6 md:p-8 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-display font-bold group-hover:text-disha-red transition-colors duration-300">
                                                {exp.company}
                                            </h3>
                                            <p className="text-lg text-grey-text">{exp.role}</p>
                                        </div>
                                        <div className="flex flex-col md:items-end gap-1 text-sm text-grey-text">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Points */}
                                    <ul className="space-y-3 text-sm md:text-base text-charcoal/80 dark:text-cream/80">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <ArrowUpRight className="w-4 h-4 text-disha-red mt-1 shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

Experience.displayName = 'Experience';

export default Experience;
