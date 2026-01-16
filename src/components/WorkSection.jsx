import { useEffect, useRef, memo, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Palette, BarChart3, ShoppingBag, BookOpen, ExternalLink, Maximize2 } from 'lucide-react';
import WorkModal from './WorkModal';

gsap.registerPlugin(ScrollTrigger);

const workItems = [
    {
        id: 1,
        tag: '01 / PRODUCT DESIGN',
        title: 'Arzoyi: Holi Collection',
        description: 'Product Design for Holi Collection at Arzoyi - vibrant, festive merchandise that celebrates the spirit of colors.',
        image: '/holi/holi-collection-1.jpeg',
        bgClass: 'bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white',
        tagClass: 'border-white/30 bg-white/10',
        icon: Palette,
        iconHoverClass: 'group-hover:text-yellow-300',
        link: 'https://thearzoyi.com/collections/holi-specials',
        linkText: 'View Collection',
        images: [
            '/holi/holi-collection-1.jpeg',
            '/holi/holi-collection-2.jpeg',
            '/holi/holi-collection-3.jpeg',
        ],
    },
    {
        id: 2,
        tag: '02 / MERCH DESIGN',
        title: 'Offiga: TTD×Offiga',
        description: 'Swag store merchandise designs for TTD×Offiga Bangalore event. Corporate apparel and branded merchandise.',
        image: '/TTD×Offiga/WhatsApp Image 2026-01-16 at 11.13.32 AM.jpeg',
        bgClass: 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white',
        tagClass: 'border-white/30 bg-white/10',
        icon: ShoppingBag,
        iconHoverClass: 'group-hover:text-emerald-200',
        images: [
            '/TTD×Offiga/WhatsApp Image 2026-01-16 at 11.13.32 AM.jpeg',
            '/TTD×Offiga/WhatsApp Image 2026-01-16 at 11.19.51 AM.jpeg',
            '/TTD×Offiga/WhatsApp Image 2026-01-16 at 11.19.52 AM.jpeg',
            '/TTD×Offiga/WhatsApp Image 2026-01-16 at 11.19.53 AM.jpeg',
        ],
    },
    {
        id: 3,
        tag: '03 / SOCIAL MEDIA',
        title: 'Account Data',
        description: 'The reach and visibility of accounts I managed. Made engaging posts, reels and stories that achieved 100K+ reach.',
        image: '/analytics/image.png',
        bgClass: 'bg-[#1A1A1A] text-white border border-white/10',
        tagClass: 'border-purple-400/30 bg-purple-500/20 text-purple-300',
        icon: BarChart3,
        iconHoverClass: 'group-hover:text-purple-400',
        isAnalytics: true,
        analyticsImage: '/analytics/image.png',
        images: [
            '/analytics/image copy.png',
            '/analytics/image copy 2.png',
            '/analytics/image copy 3.png',
        ],
    },
    {
        id: 4,
        tag: '04 / MERCH DESIGN',
        title: 'Coca-Cola Merch',
        description: 'Corporate merchandise and promotional materials designed for Coca-Cola brand campaigns.',
        image: '/merch_design/WhatsApp Image 2026-01-16 at 2.39.52 PM.jpeg',
        bgClass: 'bg-gradient-to-br from-red-600 to-red-800 text-white',
        tagClass: 'border-white/30 bg-white/10',
        icon: ShoppingBag,
        iconHoverClass: 'group-hover:text-yellow-200',
        images: [
            '/merch_design/WhatsApp Image 2026-01-16 at 2.39.52 PM.jpeg',
            '/merch_design/WhatsApp Image 2026-01-16 at 2.39.53 PM.jpeg',
            '/merch_design/WhatsApp Image 2026-01-16 at 2.39.53 PM (1).jpeg',
            '/merch_design/WhatsApp Image 2026-01-16 at 2.39.54 PM.jpeg',
        ],
    },
    {
        id: 5,
        tag: '05 / EDITORIAL',
        title: 'Project 01: DSR Book Club',
        description: 'Magazine design and editorial layout for Dr. S. Radhakrishnan Book Club. Bibliomaniac newsletter design.',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop',
        bgClass: 'bg-gradient-to-br from-amber-100 to-orange-100 text-charcoal',
        tagClass: 'border-charcoal/20 bg-charcoal/10 text-charcoal',
        icon: BookOpen,
        iconHoverClass: 'group-hover:text-disha-red',
        link: 'https://online.fliphtml5.com/vlosn/odap/#p=24',
        linkText: 'READ HERE',
        isBookClub: true,
    },
];

const WorkSection = memo(() => {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const ctx = gsap.context(() => {
            gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${track.scrollWidth}`,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    const handleCardClick = (item) => {
        setSelectedProject(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <>
            <section
                ref={sectionRef}
                className="h-screen w-full overflow-hidden bg-charcoal text-cream relative flex items-center"
            >
                {/* Header - Absolute positioned as in original */}
                <div className="absolute top-8 left-6 md:left-12 z-20">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight">
                        Selected<br />
                        <span className="text-disha-red">Works</span>
                    </h2>
                </div>

                {/* Track - Absolute positioned as in original */}
                <div
                    ref={trackRef}
                    className="flex gap-8 md:gap-12 px-6 md:px-12 absolute h-[65vh] will-change-transform top-[28%] md:top-[22%]"
                >
                    {workItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={item.id}
                                onClick={() => handleCardClick(item)}
                                className={`w-[85vw] md:w-[600px] h-full ${item.bgClass} p-8 md:p-12 flex flex-col justify-between rounded-xl shrink-0 group hover:scale-[1.02] transition-transform duration-500 cursor-pointer relative overflow-hidden`}
                            >
                                {/* Decorative background elements */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-xl" />

                                <div className="flex justify-between items-start relative z-10">
                                    <span className={`text-sm font-bold border ${item.tagClass} px-3 py-1 rounded-full backdrop-blur-sm`}>
                                        {item.tag}
                                    </span>
                                    <IconComponent className={`w-8 h-8 ${item.iconHoverClass} transition-colors duration-200`} />
                                </div>

                                {/* Expand icon - Left side */}
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                                        <Maximize2 className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                {/* Expand icon - Right side */}
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
                                        <Maximize2 className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <div className="relative z-10 flex-1 flex flex-col">
                                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-3">{item.title}</h3>
                                    <p className="text-base opacity-70 mb-4">{item.description}</p>

                                    {/* Special "READ HERE" button for DSR Book Club */}
                                    {item.isBookClub && item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-cream rounded-lg hover:bg-charcoal/80 transition-colors duration-200 font-bold text-lg mb-4 shadow-lg"
                                        >
                                            {item.linkText}
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}

                                    <div className="w-full h-40 md:h-52 bg-gray-200/20 rounded-lg overflow-hidden relative mt-auto">
                                        <img
                                            src={item.image}
                                            className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700"
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    {/* Spacer for proper scroll end matching original */}
                    <div className="w-[10vw] h-full shrink-0"></div>
                </div>
            </section>

            {/* Modal */}
            <WorkModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                project={selectedProject}
            />
        </>
    );
});

WorkSection.displayName = 'WorkSection';

export default WorkSection;
