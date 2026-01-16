import { useEffect, useRef } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const WorkModal = ({ isOpen, onClose, project }) => {
    const modalRef = useRef(null);
    const contentRef = useRef(null);
    const currentImageIndex = useRef(0);

    useEffect(() => {
        if (isOpen && modalRef.current && contentRef.current) {
            gsap.fromTo(modalRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3, ease: 'power2.out' }
            );
            gsap.fromTo(contentRef.current,
                { scale: 0.9, opacity: 0, y: 20 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)', delay: 0.1 }
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        if (modalRef.current && contentRef.current) {
            gsap.to(contentRef.current, {
                scale: 0.9, opacity: 0, y: 20, duration: 0.2, ease: 'power2.in'
            });
            gsap.to(modalRef.current, {
                opacity: 0, duration: 0.3, ease: 'power2.in', delay: 0.1,
                onComplete: onClose
            });
        } else {
            onClose();
        }
    };

    if (!isOpen || !project) return null;

    return (
        <div
            ref={modalRef}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={handleClose}
        >
            {/* Backdrop with blur */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal Content */}
            <div
                ref={contentRef}
                className="relative w-full max-w-5xl max-h-[90vh] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 group"
                >
                    <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
                </button>

                {/* Header */}
                <div className="p-6 md:p-8 border-b border-white/10">
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${project.tagClass || 'bg-disha-red/20 text-disha-red border border-disha-red/30'}`}>
                        {project.tag}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-4">
                        {project.title}
                    </h2>
                    <p className="text-white/60 mt-2 text-lg">{project.description}</p>
                    
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-disha-red hover:bg-disha-red/80 text-white rounded-lg transition-colors duration-200 font-medium"
                        >
                            {project.linkText || 'View Project'}
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>

                {/* Image Gallery */}
                <div className="p-6 md:p-8 overflow-y-auto max-h-[60vh]">
                    {project.images && project.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.images.map((img, index) => (
                                <div
                                    key={index}
                                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} - ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Special layout for analytics/account data */}
                    {project.isAnalytics && (
                        <div className="flex flex-col items-center">
                            <img
                                src={project.analyticsImage}
                                alt="Account Data Analytics"
                                className="w-full max-w-4xl rounded-xl shadow-2xl"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WorkModal;
