// Intentionally left blank or simple.
const globalUniversities = [
    "Top recruiters include TCS, Infosys, Cognizant, HCLTech, Lumen",
    "Partnerships with Eduskills, Quantum Learning",
    "Collaborations with AWS Academy, Cisco Networking Academy, Red Hat Academy, UiPath (RPA), and Blueprism University Academy",

];

const GlobalTieUps: React.FC = () => {
    return (
        <section className="bg-neutral-900 border-y border-neutral-800 py-6 overflow-hidden relative">
            {/* Gradient overlays for smooth fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />

            <div className="flex items-center">
                <div className="px-6 md:px-12 z-20 shrink-0 border-r border-neutral-700/50">
                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase whitespace-nowrap">
                        Global Academic Ties
                    </span>
                </div>

                <div className="flex-1 overflow-hidden ml-6 flex">
                    <div className="animate-marquee flex gap-12 whitespace-nowrap min-w-full items-center">
                        {globalUniversities.concat(globalUniversities).map((uni, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                <span className="font-serif text-[15px] md:text-[17px] text-white/80 tracking-wide">
                                    {uni}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalTieUps;
