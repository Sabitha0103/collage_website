import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { DepartmentData } from '../../data/departments';

interface DepartmentGalleryProps {
    dept: DepartmentData;
}

interface GalleryImage {
    src: string;
    caption: string;
    category: string;
}

/* ── Gallery data per department ───────────────────────── */

const galleryData: Record<string, GalleryImage[]> = {
    cse: [
        { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', caption: 'Annual Hackathon 2025', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80', caption: 'Coding Lab Session', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Team Project Discussion', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80', caption: 'Workshop on Cloud Computing', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', caption: 'Coding Club Meet', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', caption: 'Student Seminar Presentation', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800&q=80', caption: 'Tech Fest Opening Ceremony', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', caption: 'Placement Training Session', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', caption: 'AI & ML Workshop', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', caption: 'Computer Lab Infrastructure', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', caption: 'Innovation Club Brainstorm', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', caption: 'Annual Day Celebration', category: 'Events' },
    ],
    csm: [
        { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80', caption: 'AI Research Lab', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', caption: 'Robotics Club Demo', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'ML Project Showcase', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Deep Learning Workshop', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', caption: 'Neural Networks Seminar', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', caption: 'AI Club Meeting', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', caption: 'Hackathon Participants', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', caption: 'Tech Symposium', category: 'Events' },
    ],
    ece: [
        { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', caption: 'Circuit Design Lab', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', caption: 'Electronics Workshop', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&w=800&q=80', caption: 'VLSI Design Session', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'ECE Student Group', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', caption: 'IoT Project Expo', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', caption: 'Embedded Systems Club', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Signal Processing Seminar', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', caption: 'Industry Visit', category: 'Students' },
    ],
    eee: [
        { src: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80', caption: 'Power Systems Lab', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80', caption: 'Renewable Energy Workshop', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'EEE Students Team', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', caption: 'Electrical Machines Demo', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', caption: 'Energy Club Meet', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', caption: 'Annual Tech Fest', category: 'Events' },
    ],
    mec: [
        { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80', caption: 'Workshop Practical Session', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80', caption: 'CAD/CAM Lab', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', caption: 'Design Competition', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Mechanical Students', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', caption: 'SAE Club Activities', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Industrial Visit', category: 'Events' },
    ],
    cad: [
        { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', caption: 'Data Analytics Lab', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', caption: 'Data Science Workshop', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'AI&DS Student Team', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', caption: 'Kaggle Club Meetup', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', caption: 'Data Hackathon', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', caption: 'Guest Lecture on Big Data', category: 'Students' },
    ],
    civil: [
        { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', caption: 'Construction Site Visit', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80', caption: 'Surveying Practical', category: 'Labs' },
        { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80', caption: 'Civil Engineering Students', category: 'Students' },
        { src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', caption: 'Bridge Model Competition', category: 'Events' },
        { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', caption: 'ASCE Student Chapter', category: 'Clubs' },
        { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80', caption: 'Geo-Technical Seminar', category: 'Events' },
    ],
};

const categories = ['All', 'Events', 'Students', 'Clubs', 'Labs'];

const DepartmentGallery: React.FC<DepartmentGalleryProps> = ({ dept }) => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    const images = galleryData[dept.slug] || galleryData['cse'];
    const filtered = activeCategory === 'All'
        ? images
        : images.filter((img) => img.category === activeCategory);

    return (
        <div className="space-y-8">
            {/* ── Header ───────────────────────────────────── */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-[2px] rounded-full" style={{ background: '#F85E00' }} />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: '#F85E00' }}>
                        {dept.code} · Gallery
                    </span>
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold mb-3" style={{ color: '#0A0903' }}>
                    Photo Gallery
                </h2>
                <p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
                    A glimpse into the vibrant life of the {dept.name} department — events, student activities, clubs, and laboratories.
                </p>
            </div>

            {/* ── Category Filter ──────────────────────────── */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className="px-5 py-2 text-[13px] font-medium rounded-full transition-all duration-300 shrink-0"
                        style={{
                            background: activeCategory === cat ? '#F85E00' : 'white',
                            color: activeCategory === cat ? 'white' : '#0A0903',
                            border: `1px solid ${activeCategory === cat ? '#F85E00' : 'rgba(248, 94, 0, 0.12)'}`,
                            boxShadow: activeCategory === cat ? '0 4px 12px rgba(248, 94, 0, 0.25)' : '0 1px 4px rgba(0,0,0,0.03)',
                        }}
                        onMouseEnter={(e) => {
                            if (activeCategory !== cat) {
                                e.currentTarget.style.borderColor = '#FFB563';
                                e.currentTarget.style.background = 'rgba(255, 210, 157, 0.15)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeCategory !== cat) {
                                e.currentTarget.style.borderColor = 'rgba(248, 94, 0, 0.12)';
                                e.currentTarget.style.background = 'white';
                            }
                        }}
                    >
                        {cat}
                    </button>
                ))}
                <span className="text-xs text-neutral-400 ml-2 shrink-0">
                    {filtered.length} photos
                </span>
            </div>

            {/* ── Image Grid ──────────────────────────────── */}
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <AnimatePresence mode="popLayout">
                    {filtered.map((img, index) => (
                        <motion.div
                            key={img.src + img.caption}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.35, delay: index * 0.04 }}
                            className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                            style={{
                                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                            }}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay on hover */}
                            <div
                                className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background: 'linear-gradient(to top, rgba(10, 9, 3, 0.85) 0%, transparent 60%)',
                                }}
                            >
                                <p className="text-white text-sm font-medium leading-snug">
                                    {img.caption}
                                </p>
                                <span
                                    className="inline-block mt-1.5 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full w-fit"
                                    style={{ background: 'rgba(248, 94, 0, 0.8)', color: 'white' }}
                                >
                                    {img.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* ── Lightbox Modal ───────────────────────────── */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6"
                        style={{ background: 'rgba(10, 9, 3, 0.9)', backdropFilter: 'blur(8px)' }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden"
                            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.caption}
                                className="w-full h-full object-contain"
                                style={{ maxHeight: '75vh' }}
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 px-6 py-4"
                                style={{ background: 'linear-gradient(to top, rgba(10, 9, 3, 0.9) 0%, transparent 100%)' }}
                            >
                                <p className="text-white font-serif text-lg font-semibold">
                                    {selectedImage.caption}
                                </p>
                                <span
                                    className="inline-block mt-1 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
                                    style={{ background: '#F85E00', color: 'white' }}
                                >
                                    {selectedImage.category}
                                </span>
                            </div>
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
                                style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = '#F85E00'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                            >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default DepartmentGallery;
