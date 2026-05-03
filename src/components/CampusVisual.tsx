import React from 'react';

const CampusVisual: React.FC = () => {
    return (
        <section className="relative w-full h-[50vh] lg:h-[70vh] min-h-[400px] overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="SRIT campus aerial view"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            {/* Centered caption */}
            <div className="absolute inset-0 flex items-end justify-center pb-16 lg:pb-24 px-6">
                <div className="text-center reveal">
                    <p className="label-caps text-white/35 tracking-[0.35em] mb-4">
                        Our Campus
                    </p>
                    <p className="font-serif text-2xl lg:text-4xl text-white font-semibold leading-snug">
                        Where Innovation Meets Tradition
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CampusVisual;
