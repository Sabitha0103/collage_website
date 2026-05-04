import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Briefcase, ArrowUpRight } from 'lucide-react';
import { alumniStories } from '../data/alumni';

const AlumniSuccess: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="alumni" ref={ref} className="section-y-lg bg-white border-t border-neutral-200">
            <div className="section-container">

                {/* Section Header */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-black text-neutral-900 mb-12"
                >
                    Alumni Success Stories
                </motion.h2>

                {/* Cards Grid — exactly 3 per row like the reference image */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1300px]">
                    {alumniStories.slice(0, 3).map((alumni, i) => (
                        <motion.div
                            key={alumni.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            /* Outer wrapper — positioned so pseudo-cutouts can sit outside */
                            className="relative"
                            style={{ padding: '0' }}
                        >
                            {/*
                             * ─────────────────────────────────────────────────────────
                             *  CARD SHAPE
                             *  The card is orange-bg rounded rectangle.
                             *  Two white "bite" shapes sit over the top-left and
                             *  bottom-right corners to create the exact cutout effect
                             *  from the reference image.
                             * ─────────────────────────────────────────────────────────
                             */}
                            <div className="relative rounded-[24px] bg-[#FFA952] overflow-visible min-h-[320px]">

                                {/* ── TOP-LEFT WHITE CUTOUT ── */}
                                <div
                                    className="absolute top-0 left-0 bg-white z-10"
                                    style={{
                                        width: '130px',
                                        height: '52px',
                                        borderBottomRightRadius: '24px',
                                    }}
                                />
                                {/* Top Edge Outer Curve */}
                                <div 
                                    className="absolute top-0 z-10 pointer-events-none"
                                    style={{
                                        left: '130px',
                                        width: '24px',
                                        height: '24px',
                                        background: 'radial-gradient(circle at 100% 100%, transparent 24px, white 24px)'
                                    }}
                                />
                                {/* Left Edge Outer Curve */}
                                <div 
                                    className="absolute left-0 z-10 pointer-events-none"
                                    style={{
                                        top: '52px',
                                        width: '24px',
                                        height: '24px',
                                        background: 'radial-gradient(circle at 100% 100%, transparent 24px, white 24px)'
                                    }}
                                />

                                {/* ── BOTTOM-RIGHT WHITE CUTOUT ── */}
                                <div
                                    className="absolute bottom-0 right-0 bg-white z-10"
                                    style={{
                                        width: '150px',
                                        height: '52px',
                                        borderTopLeftRadius: '24px',
                                    }}
                                />
                                {/* Bottom Edge Outer Curve */}
                                <div 
                                    className="absolute bottom-0 z-10 pointer-events-none"
                                    style={{
                                        right: '150px',
                                        width: '24px',
                                        height: '24px',
                                        background: 'radial-gradient(circle at 0% 0%, transparent 24px, white 24px)'
                                    }}
                                />
                                {/* Right Edge Outer Curve */}
                                <div 
                                    className="absolute right-0 z-10 pointer-events-none"
                                    style={{
                                        bottom: '52px',
                                        width: '24px',
                                        height: '24px',
                                        background: 'radial-gradient(circle at 0% 0%, transparent 24px, white 24px)'
                                    }}
                                />

                                {/* ── CARD CONTENT (sits above the white cutouts via z-20 on individual items) */}
                                <div className="relative flex flex-col h-full p-7 pt-4">

                                    {/* ROW 1: Batch (inside cutout space) + Role badge */}
                                    <div className="flex items-center justify-between mb-1">
                                        {/* Batch text – sits inside the top-left white area */}
                                        <span className="z-20 text-base font-bold text-neutral-800 w-[100px] text-center -ml-5 -mt-1">
                                            {alumni.batch} Batch
                                        </span>

                                        {/* Top-right badge */}
                                        <div className="z-20 flex items-center gap-1.5 bg-orange-200/70 text-orange-900 text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full -mr-1 -mt-1">
                                            <Briefcase className="w-3.5 h-3.5" />
                                            {alumni.company}
                                        </div>
                                    </div>

                                    {/* ROW 2: Title */}
                                    <h3 className="z-20 mt-6 text-2xl md:text-3xl font-bold text-neutral-900 leading-snug line-clamp-2">
                                        {alumni.name}
                                    </h3>

                                    {/* ROW 3: Description */}
                                    <p className="z-20 mt-3 text-base text-neutral-700 leading-relaxed line-clamp-3">
                                        {alumni.role} driving excellence and innovation in top-tier global tech companies.
                                    </p>

                                    {/* ROW 4: Location */}
                                    <div className="z-20 flex items-center gap-1.5 mt-5 text-base text-neutral-700 font-medium">
                                        <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                                        SRIT Alumni Network
                                    </div>

                                    {/* ROW 5: Bottom — button + register link */}
                                    <div className="z-20 flex items-end justify-between mt-7 pb-2">
                                        {/* Bottom-left: View Details button */}
                                        <button className="bg-[#ea580c] hover:bg-orange-600 text-white text-base font-bold px-6 py-3 rounded-lg transition-colors shadow-sm">
                                            View Details
                                        </button>

                                        {/* Bottom-right: sits inside the white cutout — "Register Here ↗" */}
                                        <a
                                            href="#"
                                            className="absolute bottom-0 right-0 z-20 w-[134px] h-[52px] flex items-center justify-center gap-1 text-orange-700 hover:text-orange-900 font-bold text-base transition-colors"
                                        >
                                            Connect Here
                                            <ArrowUpRight className="w-4 h-4" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* "View More" link below cards — exactly as in reference image */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-10"
                >
                    <a href="#" className="inline-flex items-center gap-1.5 text-orange-700 hover:text-orange-900 font-bold text-lg md:text-xl transition-colors">
                        View More
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default AlumniSuccess;
