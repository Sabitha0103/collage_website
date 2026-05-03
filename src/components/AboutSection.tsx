import React, { useState, useEffect } from 'react';

const certSlides = [
    { src: '/cert-iic.jpg', alt: 'IIC Innovation Cell Certificate' },
    { src: '/cert-salesforce.jpg', alt: 'Salesforce Talent Visionary Award' },
    { src: '/cert-eduskills.jpg', alt: 'EduSkills All India Rank 4' },
    { src: '/cert-nptel.jpg', alt: 'NPTEL Local Chapter A Rating' },
];

const AboutSection: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % certSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="about" className="py-28 lg:py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left — text */}
                    <div>
                        <p className="text-primary text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
                            About SRIT
                        </p>
                        <h2 className="font-serif text-3xl lg:text-[2.5rem] font-bold text-neutral-dark leading-tight mb-8">
                            Inspired by the Legacy of<br />
                            Srinivasa Ramanujan
                        </h2>
                        <div className="space-y-5 text-neutral-700 leading-[1.8] text-[15px]">
                            <p>
                                Srinivasa Ramanujan Institute of Technology was established in 2007 by
                                Founder-cum-Secretary Sri Aluru Sambasiva Reddy under the
                                Smt. Aluru Narayanamma Memorial Educational Society — to give
                                shape to his firm belief that "Education is a Key Enabler for Progress."
                            </p>
                            <p>
                                Located in Ananthapuramu, Andhra Pradesh, SRIT is committed to
                                creating engineers who are industry-ready, socially responsible,
                                and equipped with the knowledge and skills to make a meaningful
                                impact on the world. Our faculty, infrastructure, and academic
                                programs are designed to nurture the next generation of innovators.
                            </p>
                        </div>
                        <a
                            href="#departments"
                            className="inline-flex items-center gap-2 mt-8 text-primary text-sm font-semibold hover:text-primary-dark transition-colors duration-300 group"
                        >
                            Explore Departments
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                    </div>

                    {/* Right — certificate slideshow */}
                    <div className="relative overflow-hidden rounded-lg h-[460px] bg-gray-100 shadow-lg">
                        {certSlides.map((slide, i) => (
                            <img
                                key={slide.src}
                                src={slide.src}
                                alt={slide.alt}
                                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-1000"
                                style={{ opacity: i === current ? 1 : 0 }}
                            />
                        ))}

                        {/* Slide counter */}
                        <div className="absolute top-3 right-4 bg-black/40 text-white text-[11px] font-semibold px-2 py-1 rounded-full z-10">
                            {current + 1} / {certSlides.length}
                        </div>

                        {/* Dot indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            {certSlides.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                                    style={{
                                        backgroundColor: i === current ? '#F85E00' : 'rgba(255,255,255,0.5)',
                                        transform: i === current ? 'scale(1.3)' : 'scale(1)',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
