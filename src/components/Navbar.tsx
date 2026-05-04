import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface SubItem {
    label: string;
    href: string;
}

interface NavLink {
    label: string;
    href: string;
    hasDropdown: boolean;
    subItems?: SubItem[];
}

const navLinks: NavLink[] = [
    { label: 'Home', href: '/', hasDropdown: false },
    { 
        label: 'About Us', 
        href: '/#about', 
        hasDropdown: true,
        subItems: [
            { label: 'Overview', href: '/#about' },
            { label: 'Vision & Mission', href: '/#vision' },
            { label: 'Leadership', href: '/#leadership' }
        ]
    },
    { 
        label: 'Admissions', 
        href: '/#admissions', 
        hasDropdown: true,
        subItems: [
            { label: 'B.Tech Programs', href: '/#btech' },
            { label: 'M.Tech Programs', href: '/#mtech' },
            { label: 'Admission Process', href: '/#process' }
        ]
    },
    { 
        label: 'Academics', 
        href: '/departments', 
        hasDropdown: true,
        subItems: [
            { label: 'Departments', href: '/departments' },
            { label: 'Curriculum', href: '/#curriculum' },
            { label: 'Academic Calendar', href: '/#calendar' }
        ]
    },
    { 
        label: 'Campus Life', 
        href: '/#campus', 
        hasDropdown: true,
        subItems: [
            { label: 'Infrastructure', href: '/#campus' },
            { label: 'Hostel Facilities', href: '/#campus' },
            { label: 'Sports', href: '/#campus' }
        ]
    },
    { 
        label: 'Student Chapters', 
        href: '/#chapters', 
        hasDropdown: true,
        subItems: [
            { label: 'IEEE Student Branch', href: '/#chapters' },
            { label: 'CSI Chapter', href: '/#chapters' },
            { label: 'Technical Clubs', href: '/#chapters' }
        ]
    },
    { 
        label: 'Examination', 
        href: '/#exams', 
        hasDropdown: true,
        subItems: [
            { label: 'Exam Cell', href: '/#exams' },
            { label: 'Results', href: '/#exams' },
            { label: 'Notifications', href: '/#exams' }
        ]
    },
    { 
        label: 'Placements', 
        href: '/#placements', 
        hasDropdown: true,
        subItems: [
            { label: 'Placement overview', href: '/#placements' },
            { label: 'Placement Records', href: '/#placements' },
            { label: 'Our Recruiters', href: '/#placements' }
        ]
    },
    { 
        label: 'Committees', 
        href: '/#committees', 
        hasDropdown: true,
        subItems: [
            { label: 'Anti-Ragging', href: '/#committees' },
            { label: 'Women Empowerment', href: '/#committees' },
            { label: 'Grivelance Redressal', href: '/#committees' }
        ]
    },
    { 
        label: 'Community Services', 
        href: '/#community', 
        hasDropdown: true,
        subItems: [
            { label: 'NSS Unit', href: '/#community' },
            { label: 'Outreach Programs', href: '/#community' }
        ]
    },
];

const NavItem = ({ link, isSolid }: { link: NavLink, isSolid: boolean }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a
                href={link.href}
                className={`flex items-center gap-1.5 text-[15px] xl:text-[16px] font-semibold tracking-[0.02em] transition-colors duration-200 whitespace-nowrap py-6 ${isSolid ? 'text-neutral-700 hover:text-primary' : 'text-white/95 hover:text-white'}`}
            >
                {link.label}
                {link.hasDropdown && <ChevronDown className={`w-[16px] h-[16px] transition-transform duration-300 ${isHovered ? '-rotate-180' : ''}`} />}
            </a>

            {link.hasDropdown && (
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-[80%] left-0 min-w-[220px] bg-white rounded-xl shadow-2xl border border-neutral-100 overflow-hidden py-2"
                        >
                            {link.subItems?.map((sub: SubItem, idx: number) => (
                                <a 
                                    key={idx} 
                                    href={sub.href}
                                    className="block px-5 py-3 text-[16px] font-medium text-neutral-700 hover:text-primary hover:bg-orange-50/50 transition-colors"
                                >
                                    {sub.label}
                                </a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </div>
    );
};

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // Always solid on non-home pages
    const isSolid = scrolled || location.pathname !== '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });

        // Initial check
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolid
                ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-[1500px] mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between lg:justify-between h-[72px]">
                    {/* Desktop links — Fully Center/Expanded Layout */}
                    <div className="hidden w-full lg:flex items-center justify-center gap-4 xl:gap-6">
                        {navLinks.map((link) => (
                            <NavItem key={link.label} link={link} isSolid={isSolid} />
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden relative w-6 h-5 z-50"
                        aria-label="Toggle menu"
                    >
                        <span className={`absolute left-0 w-full h-[1.5px] transition-all duration-300 ${(isSolid || mobileOpen) ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
                        <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] transition-all duration-300 ${(isSolid || mobileOpen) ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`absolute left-0 w-full h-[1.5px] transition-all duration-300 ${(isSolid || mobileOpen) ? 'bg-neutral-dark' : 'bg-white'
                            } ${mobileOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
                    </button>
                </div>

                {/* Mobile dropdown */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden overflow-hidden bg-white shadow-xl rounded-b-2xl border-t border-neutral-100"
                        >
                            <div className="flex flex-col gap-1 pb-6 pt-4 px-4 max-h-[80vh] overflow-y-auto">
                                {navLinks.map((link) => (
                                    <div key={link.label} className="border-b border-neutral-50 last:border-none">
                                        <div className="flex items-center justify-between py-4">
                                            <a
                                                href={link.href}
                                                onClick={() => !link.hasDropdown && setMobileOpen(false)}
                                                className="text-[17px] font-semibold text-neutral-800"
                                            >
                                                {link.label}
                                            </a>
                                            {link.hasDropdown && (
                                                <button 
                                                    className="p-2 -mr-2"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        // Toggle sub-items if we had state for it, 
                                                        // but for now let's just make it a link.
                                                    }}
                                                >
                                                    <ChevronDown className="w-5 h-5 opacity-40" />
                                                </button>
                                            )}
                                        </div>
                                        {link.hasDropdown && (
                                            <div className="grid grid-cols-1 gap-2 pb-4 pl-4">
                                                {link.subItems?.map((sub) => (
                                                    <a 
                                                        key={sub.label}
                                                        href={sub.href}
                                                        onClick={() => setMobileOpen(false)}
                                                        className="text-[16px] font-medium text-neutral-600 py-2"
                                                    >
                                                        {sub.label}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
