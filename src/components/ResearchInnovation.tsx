import React from 'react';

const themes = [
    {
        title: 'Artificial Intelligence',
        description: 'Pioneering research in machine learning, deep learning, and intelligent systems that shape tomorrow\'s technology landscape.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Smart Infrastructure',
        description: 'Developing sustainable, intelligent infrastructure solutions through advanced civil and mechanical engineering research.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
        title: 'Advanced Electronics',
        description: 'Innovation in embedded systems, VLSI design, and next-generation communication technologies.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
];

const ResearchInnovation: React.FC = () => {
    return (
        <section id="research" className="py-28 lg:py-32 bg-white">
            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary text-[13px] font-semibold tracking-[0.15em] uppercase mb-4">
                        Innovation
                    </p>
                    <h2 className="font-serif text-3xl lg:text-[2.5rem] font-bold text-neutral-dark">
                        Research & Innovation
                    </h2>
                </div>

                {/* Theme cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {themes.map((theme) => (
                        <div key={theme.title} className="group">
                            <div className="overflow-hidden rounded-lg mb-6">
                                <img
                                    src={theme.image}
                                    alt={theme.title}
                                    className="w-full h-56 object-cover group-hover:scale-[1.04] transition-transform duration-700"
                                />
                            </div>
                            <h3 className="font-serif text-xl font-semibold text-neutral-dark mb-3 group-hover:text-primary transition-colors duration-300">
                                {theme.title}
                            </h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">
                                {theme.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchInnovation;
