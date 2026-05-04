import React from 'react';

const certSlides = [
    { src: '/cert-iic.jpg', alt: 'IIC Innovation Cell Certificate' },
    { src: '/cert-salesforce.jpg', alt: 'Salesforce Talent Visionary Award' },
    { src: '/cert-eduskills.jpg', alt: 'EduSkills All India Rank 4' },
    { src: '/cert-nptel.jpg', alt: 'NPTEL Local Chapter A Rating' },
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-28 lg:py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left — text */}
                    <div>
                        <p className="text-primary text-sm lg:text-base font-bold tracking-[0.15em] uppercase mb-5">
                            About SRIT
                        </p>
                        <h2 className="font-serif text-4xl lg:text-5xl font-black text-neutral-dark leading-tight mb-8">
                            Inspired by the Legacy of<br />
                            Srinivasa Ramanujan
                        </h2>
                        <div className="space-y-6 text-neutral-700 leading-[1.8] text-base lg:text-lg">
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
                            className="inline-flex items-center gap-2 mt-10 text-primary text-base font-bold hover:text-primary-dark transition-colors duration-300 group"
                        >
                            Explore Departments
                            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </a>
                    </div>

                    {/* Right — certificate grid */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6">
                        {certSlides.map((slide, index) => (
                            <div 
                                key={slide.src} 
                                className={`relative overflow-hidden rounded-2xl shadow-lg border border-neutral-100 bg-white group aspect-[4/3] ${
                                    index % 2 === 0 ? 'lg:translate-y-8' : 'lg:-translate-y-4'
                                }`}
                            >
                                <img
                                    src={slide.src}
                                    alt={slide.alt}
                                    className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
