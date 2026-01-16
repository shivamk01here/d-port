import { memo } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navbar = memo(({ isDark, toggleTheme }) => {
    return (
        <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
            <div className="text-lg font-display font-bold tracking-widest uppercase">Disha.</div>
            <div className="flex items-center gap-6">
                <button
                    onClick={toggleTheme}
                    className="hover:text-disha-red transition-colors duration-200"
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a
                    href="mailto:dishakanojia87@gmail.com"
                    className="hidden md:block border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 text-sm font-medium"
                >
                    Let's Talk
                </a>
            </div>
        </nav>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
