import { memo } from 'react';

const Footer = memo(() => {
    return (
        <footer className="bg-charcoal text-cream py-24 px-6 md:px-24 rounded-t-3xl mt-12">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 hover:text-disha-yellow transition-colors duration-300 cursor-pointer">
                    LET'S WORK <br /> TOGETHER
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-center text-lg">
                    <a
                        href="mailto:dishakanojia87@gmail.com"
                        className="border-b border-white/30 hover:border-disha-red hover:text-disha-red pb-1 transition-all duration-200"
                    >
                        dishakanojia87@gmail.com
                    </a>
                    <span className="hidden md:block text-white/30">•</span>
                    <a
                        href="https://linkedin.com/in/disha87"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-b border-white/30 hover:border-disha-red hover:text-disha-red pb-1 transition-all duration-200"
                    >
                        LinkedIn
                    </a>
                    <span className="hidden md:block text-white/30">•</span>
                    <span className="opacity-50">+91 8368985704</span>
                </div>
                <p className="mt-24 text-sm opacity-30">© 2026 Disha Kanojia. Crafted with Logic & Love.</p>
            </div>
        </footer>
    );
});

Footer.displayName = 'Footer';

export default Footer;
