import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
// Removed unused icons

import { useEffect } from 'react';

// To display a live Instagram feed without complex backend authentication or paid third-party tools, 
// a free customized widget must be created by the account owner on platforms like Curator.io, Elfsight, or Taggbox.
// For this template, we are using a placeholder iframe that perfectly mimics a live feed widget 
// until an actual Widget ID is provided by the SRIT admin.
const INSTAGRAM_WIDGET_PLACEHOLDER = "https://www.instagram.com/sritatp/embed";

// For Twitter, we use the official Twitter embedding script.

const SocialMediaFeeds: React.FC = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    // Load Twitter Embed Script dynamically
    useEffect(() => {
        const scriptId = 'twitter-wjs';
        let script = document.getElementById(scriptId) as HTMLScriptElement;

        if (!script) {
            script = document.createElement('script');
            script.id = scriptId;
            script.src = "https://platform.twitter.com/widgets.js";
            script.async = true;
            document.body.appendChild(script);
        }

        script.onload = () => {
            // @ts-ignore
            if (window.twttr && window.twttr.widgets) {
                // @ts-ignore
                window.twttr.widgets.load();
            }
        };

        // If the script is already loaded but component re-mounts
        // @ts-ignore
        if (window.twttr && window.twttr.widgets) {
            // @ts-ignore
            window.twttr.widgets.load();
        }
    }, []);

    return (
        <section ref={ref} className="pt-16 lg:pt-20 pb-4 lg:pb-8 bg-neutral-50 relative">
            <div className="section-container">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <p className="label-caps text-primary tracking-[0.25em] mb-4">
                        Campus Life & Updates
                    </p>
                    <h2 className="font-serif text-3xl lg:text-5xl font-bold text-neutral-900 tracking-tight">
                        Connect With SRIT
                    </h2>
                    <p className="mt-6 text-neutral-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
                        Stay updated with the latest news, events, and everyday life at our vibrant campus through our official digital channels.
                    </p>
                </motion.div>

                {/* Feeds Container */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* Left: Instagram Feed (Uses iframe embed) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col w-full max-w-[400px] mx-auto overflow-hidden h-[600px] relative shrink-0"
                    >
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col pt-4 overflow-hidden bg-neutral-50">
                            <div className="flex justify-center mb-2 shrink-0 z-10 w-full">
                                <a href="https://instagram.com/sritatp" target="_blank" rel="noreferrer" className="text-[14px] font-bold text-neutral-900 border border-neutral-200 bg-white px-4 py-1.5 rounded-full hover:bg-neutral-50 transition-colors shadow-sm text-center">
                                    View @sritatp on Instagram
                                </a>
                            </div>
                            <div className="flex-1 w-full bg-white relative overflow-hidden mt-2">
                                {/* Note: Native Instagram profile embedding without an API key or auth token often fails due to IG strict policies. 
                                      For a robust production site, use a widget generator like Elfsight.com or Curator.io and drop the iframe here. */}
                                <iframe
                                    src={INSTAGRAM_WIDGET_PLACEHOLDER}
                                    className="absolute top-[-50px] left-0 w-full h-[calc(100%+50px)] border-none"
                                    scrolling="yes"
                                    frameBorder="0"
                                    title="Instagram Feed"
                                    allowTransparency={true}
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Twitter Feed (Uses Official Twitter Widget) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="bg-white rounded-2xl border border-neutral-200 shadow-sm flex flex-col w-full max-w-[400px] mx-auto overflow-hidden h-[600px] overflow-y-auto custom-scrollbar shrink-0"
                    >
                        {/* Twitter Embed Timeline */}
                        <div id="twitter-feed-container" className="w-full h-full bg-neutral-50 p-4">
                            <h3 className="font-bold text-center mb-4 text-neutral-800">Latest Updates</h3>
                            <a
                                className="twitter-timeline"
                                data-height="550"
                                data-theme="light"
                                href="https://twitter.com/sritatp?ref_src=twsrc%5Etfw"
                            >
                                Tweets by sritatp
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SocialMediaFeeds;
