import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
    {
        name: "Tejaswini",
        role: "Mechanical Student",
        quote: "As being a student from the Department of Mechanical Engineering. I've secured a job in Infosys as a System Engineer with a package of 3.6 LPA. I strongly believe that the branch you choose doesn't stop you from getting into the IT industry."
    },
    {
        name: "Abhimanyu Reddy",
        role: "Mechanical Student",
        quote: "My four years at SRIT were great memory to cherish for a lifetime. It was full of learning and grooming oneself. It gave me an opportunity to meet myself and learn many things. I am thankful to the whole faculty and mentors for sculpting me into a great sculpture."
    },
    {
        name: "Ravichandra Reddy",
        role: "Mechanical Student",
        quote: "I believe that Mechanical Engineers have the power to shift the trend. We are seeing a burst of opportunities in the industry. I thank each and everyone who believed in me & contributed to my success. Placed in Mobileum as an Associate Software Engineer with a package of 7 LPA."
    }
];

// Duplicate array for seamless infinite marquee scrolling
const duplicatedAchievements = [...achievements, ...achievements];

const StudentAchievements: React.FC = () => {
    return (
        <section id="student-achievements" className="py-20 bg-[#fcd4a6] overflow-hidden border-t border-orange-200">
            <div className="container mx-auto px-6 mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-[#0a2540] mb-4">
                    Students Achievements
                </h2>
                <p className="text-orange-900 max-w-3xl leading-relaxed text-lg">
                    Our Students have been achieving their dreams in all aspects. In short, our students have been spread over various fields and streams of society and have been growing with greater positions in society.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden py-10">
                {/* CSS animation for infinite right-to-left scroll */}
                <motion.div
                    className="flex w-max"
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        ease: 'linear',
                        duration: 30, // Adjust speed here
                        repeat: Infinity,
                    }}
                >
                    {duplicatedAchievements.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative w-[320px] md:w-[450px] shrink-0 mx-4 md:mx-6 flex flex-col justify-between"
                        >
                            {/* Simple Card Content */}
                            <div className="relative z-10 bg-orange-300 p-8 md:p-10 rounded-2xl h-full flex flex-col shadow-sm">
                                <p className="text-neutral-900 text-base md:text-lg leading-relaxed text-left mb-10 flex-grow">
                                    {item.quote}
                                </p>
                                <div className="text-right mt-auto">
                                    <h4 className="text-orange-950 font-black text-xl md:text-2xl mb-1">{item.name}</h4>
                                    <p className="text-orange-900 font-bold text-base">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default StudentAchievements;
