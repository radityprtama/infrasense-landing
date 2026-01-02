import React, {
    useRef,
    useEffect,
    useMemo,
    useLayoutEffect,
    useState,
} from "react";
import { Network, Zap, ShieldCheck } from "lucide-react";
import { motion, useReducedMotion, Variants, useInView } from "framer-motion";

type Segment = { left: number; width: number };

const AnimatedLine: React.FC<{
    delay: number;
    shouldReduceMotion: boolean | null;
    isInView: boolean;
    leftPx: number;
    widthPx: number;
}> = ({ delay, shouldReduceMotion, isInView, leftPx, widthPx }) => {
    const lineVariants: Variants = {
        hidden: { scaleX: 0, opacity: 0 },
        visible: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: shouldReduceMotion ? 0 : 0.65,
                delay: shouldReduceMotion ? 0 : delay,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const glowVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0, 0.85, 0],
            transition: {
                duration: 2.2,
                delay: delay + 0.7,
                repeat: Infinity,
                repeatDelay: 1.7,
                ease: "easeInOut",
            },
        },
    };

    // travel with LEFT so it crosses the full segment
    const dotTravel: Variants = {
        hidden: { left: "0%", opacity: 0 },
        visible: {
            left: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
            transition: {
                duration: 1.55,
                delay: delay + 0.9,
                repeat: Infinity,
                repeatDelay: 2.6,
                ease: [0.4, 0, 0.2, 1],
            },
        },
    };

    const pulseTravel: Variants = {
        hidden: { left: "-15%", opacity: 0 },
        visible: {
            left: ["-15%", "115%"],
            opacity: [0, 1, 1, 0],
            transition: {
                duration: 1.25,
                delay: delay + 0.5,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
            },
        },
    };

    // Nothing to render if invalid width (e.g. before measure)
    if (widthPx <= 0) return null;

    const topPx = 60; // align to icon center line (because icon wrapper is 96px => center 48px)

    if (shouldReduceMotion) {
        return (
            <div
                className="absolute h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/40"
                style={{ top: topPx, left: leftPx, width: widthPx }}
            />
        );
    }

    return (
        <div
            className="absolute h-0.5 overflow-visible"
            style={{ top: topPx, left: leftPx, width: widthPx }}
        >
            {/* base line */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/15 via-primary/55 to-primary/15 rounded-full"
                variants={lineVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ originX: 0, transformOrigin: "left center" }}
            />

            {/* ambient glow */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent blur-md"
                variants={glowVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />

            {/* traveling highlight */}
            <motion.div
                className="absolute inset-y-0 w-10 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                variants={pulseTravel}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ filter: "blur(1.5px)" }}
            />

            {/* traveling primary dot */}
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_3px_rgba(255,107,53,0.55)]"
                variants={dotTravel}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />

            {/* traveling white dot */}
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_8px_2px_rgba(255,255,255,0.45)]"
                variants={{
                    hidden: { left: "0%", opacity: 0 },
                    visible: {
                        left: ["0%", "100%"],
                        opacity: [0, 0.9, 0.9, 0],
                        transition: {
                            duration: 1.25,
                            delay: delay + 1.45,
                            repeat: Infinity,
                            repeatDelay: 3.0,
                            ease: [0.4, 0, 0.2, 1],
                        },
                    },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
        </div>
    );
};

const steps = [
    {
        icon: <Network className="w-8 h-8 text-primary" />,
        title: "1. Connect",
        desc: "Plug into your existing observability stack in 5 minutes. No agents required.",
    },
    {
        icon: <Zap className="w-8 h-8 text-accent" />,
        title: "2. Predict",
        desc: "Our AI analyzes historical patterns and forecasts failures with high precision.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-secondary" />,
        title: "3. Prevent",
        desc: "Execute automated remediation or follow guided actions to stop the outage.",
    },
];

const integrations = [
    { name: "Datadog", logo: "/Integrations/datadog.svg" },
    { name: "Prometheus", logo: "/Integrations/prometheus.svg" },
    { name: "New Relic", logo: "/Integrations/newrelic.svg" },
    { name: "Kubernetes", logo: "/Integrations/kubernetes.svg" },
    { name: "Terraform", logo: "/Integrations/terraform.svg" },
    { name: "Slack", logo: "/Integrations/slack-new-logo.svg" },
    { name: "PagerDuty", logo: "/Integrations/pagerduty.svg" },
    { name: "GitHub", logo: "/Integrations/github.svg" },
];

export const HowItWorks: React.FC = () => {
    const integrationsRef = useRef<HTMLDivElement>(null);
    const stepsContainerRef = useRef<HTMLDivElement>(null);

    // refs for measuring icon centers
    const iconRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [segments, setSegments] = useState<Segment[]>([
        { left: 0, width: 0 },
        { left: 0, width: 0 },
    ]);

    const shouldReduceMotion = useReducedMotion();
    const isStepsInView = useInView(stepsContainerRef, {
        once: true,
        amount: 0.25,
    });

    useEffect(() => {
        const handleScroll = () => {
            if (integrationsRef.current) {
                const rect = integrationsRef.current.getBoundingClientRect();
                const startFade = 350;
                const endFade = 50;

                let opacity = 1;
                if (rect.top < startFade) {
                    opacity = Math.max(
                        0,
                        Math.min(
                            1,
                            (rect.top - endFade) / (startFade - endFade),
                        ),
                    );
                }

                integrationsRef.current.style.opacity = opacity.toString();
                const scale = 0.9 + 0.1 * opacity;
                integrationsRef.current.style.transform = `scale(${scale})`;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Measure icon centers and create segments that connect them
    useLayoutEffect(() => {
        const container = stepsContainerRef.current;
        if (!container) return;

        const compute = () => {
            const containerRect = container.getBoundingClientRect();
            const centers = iconRefs.current
                .slice(0, 3)
                .map((el) => (el ? el.getBoundingClientRect() : null))
                .map((r) =>
                    r ? r.left + r.width / 2 - containerRect.left : null,
                );

            if (centers.some((c) => c == null)) return;

            const c0 = centers[0] as number;
            const c1 = centers[1] as number;
            const c2 = centers[2] as number;

            // a little inset so the line doesn't go under the icon circle too much
            const iconRadius = 48; // 96px / 2
            const inset = 10; // tweak for visual spacing

            const left01 = Math.min(c0, c1) + iconRadius - inset;
            const right01 = Math.max(c0, c1) - iconRadius + inset;

            const left12 = Math.min(c1, c2) + iconRadius - inset;
            const right12 = Math.max(c1, c2) - iconRadius + inset;

            setSegments([
                {
                    left: Math.max(0, left01),
                    width: Math.max(0, right01 - left01),
                },
                {
                    left: Math.max(0, left12),
                    width: Math.max(0, right12 - left12),
                },
            ]);
        };

        compute();

        const ro = new ResizeObserver(() => compute());
        ro.observe(container);

        window.addEventListener("resize", compute);
        return () => {
            ro.disconnect();
            window.removeEventListener("resize", compute);
        };
    }, []);

    const {
        containerVariants,
        cardVariants,
        iconWrapperVariants,
        titleVariants,
        descVariants,
    } = useMemo(() => {
        const containerVariants: Variants = {
            hidden: { opacity: 0 },
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.16,
                    delayChildren: shouldReduceMotion ? 0 : 0.1,
                },
            },
        };

        const cardVariants: Variants = {
            hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 28,
                scale: shouldReduceMotion ? 1 : 0.985,
                filter: shouldReduceMotion ? "none" : "blur(6px)",
            },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: shouldReduceMotion
                    ? { duration: 0.2 }
                    : { type: "spring", stiffness: 90, damping: 18, mass: 0.9 },
            },
            hover: shouldReduceMotion
                ? {}
                : {
                      y: -8,
                      scale: 1.01,
                      transition: {
                          type: "spring",
                          stiffness: 320,
                          damping: 18,
                      },
                  },
        };

        const iconWrapperVariants: Variants = {
            hidden: {
                scale: shouldReduceMotion ? 1 : 0.82,
                rotate: shouldReduceMotion ? 0 : -8,
                opacity: 0,
            },
            visible: {
                scale: 1,
                rotate: 0,
                opacity: 1,
                transition: shouldReduceMotion
                    ? { duration: 0.2 }
                    : {
                          type: "spring",
                          stiffness: 140,
                          damping: 12,
                          mass: 0.7,
                      },
            },
            hover: shouldReduceMotion
                ? {}
                : {
                      scale: 1.06,
                      boxShadow: "0 0 28px rgba(255, 107, 53, 0.35)",
                      borderColor: "rgba(255, 107, 53, 0.35)",
                      transition: { duration: 0.25 },
                  },
        };

        const titleVariants: Variants = {
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 8 },
            visible: {
                opacity: 1,
                y: 0,
                transition: shouldReduceMotion
                    ? { duration: 0.2 }
                    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            },
        };

        const descVariants: Variants = {
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
            visible: {
                opacity: 1,
                y: 0,
                transition: shouldReduceMotion
                    ? { duration: 0.2 }
                    : { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
        };

        return {
            containerVariants,
            cardVariants,
            iconWrapperVariants,
            titleVariants,
            descVariants,
        };
    }, [shouldReduceMotion]);

    return (
        <section
            id="how-it-works"
            className="py-24 bg-light-bg dark:bg-dark-900 border-t border-light-border dark:border-dark-700 transition-colors duration-300"
        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-light-text dark:text-white">
                        From Signal to Prevention
                    </h2>
                    <p className="text-light-textSecondary dark:text-gray-400 max-w-2xl mx-auto">
                        A seamless workflow that integrates with your existing
                        tools, not replaces them.
                    </p>
                </div>

                <motion.div
                    ref={stepsContainerRef}
                    className="grid md:grid-cols-3 gap-10 mb-20 relative"
                    initial="hidden"
                    animate={isStepsInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* ✅ connectors only on desktop */}
                    <div className="hidden md:block absolute inset-0 pointer-events-none">
                        <AnimatedLine
                            delay={0.25}
                            shouldReduceMotion={shouldReduceMotion}
                            isInView={isStepsInView}
                            leftPx={segments[0].left}
                            widthPx={segments[0].width}
                        />
                        <AnimatedLine
                            delay={0.45}
                            shouldReduceMotion={shouldReduceMotion}
                            isInView={isStepsInView}
                            leftPx={segments[1].left}
                            widthPx={segments[1].width}
                        />
                    </div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center text-center group relative"
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.div className="w-full rounded-2xl p-2 md:p-4 relative">
                                <motion.div
                                    ref={(el) => {
                                        iconRefs.current[idx] = el;
                                    }}
                                    className="w-24 h-24 bg-light-surface dark:bg-dark-800 rounded-full border border-light-border dark:border-dark-700 flex items-center justify-center mb-6 shadow-xl relative z-10 mx-auto"
                                    variants={iconWrapperVariants}
                                >
                                    {step.icon}

                                    {!shouldReduceMotion && (
                                        <motion.div
                                            aria-hidden="true"
                                            className="absolute inset-0 rounded-full"
                                            initial={{ opacity: 0 }}
                                            animate={
                                                isStepsInView
                                                    ? {
                                                          opacity: [
                                                              0, 0.45, 0.15,
                                                          ],
                                                          transition: {
                                                              duration: 1.0,
                                                              delay:
                                                                  0.15 +
                                                                  idx * 0.12,
                                                              ease: "easeOut",
                                                          },
                                                      }
                                                    : { opacity: 0 }
                                            }
                                            style={{
                                                boxShadow:
                                                    "0 0 40px rgba(255, 107, 53, 0.16)",
                                            }}
                                        />
                                    )}
                                </motion.div>

                                <motion.h3
                                    className="text-2xl font-bold text-light-text dark:text-white mb-4"
                                    variants={titleVariants}
                                >
                                    {step.title}
                                </motion.h3>

                                <motion.p
                                    className="text-light-textSecondary dark:text-gray-400"
                                    variants={descVariants}
                                >
                                    {step.desc}
                                </motion.p>

                                {!shouldReduceMotion && (
                                    <motion.div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 rounded-2xl"
                                        initial={false}
                                        whileHover={{
                                            boxShadow:
                                                "0 18px 45px rgba(0,0,0,0.10), 0 0 0 1px rgba(255,107,53,0.10) inset",
                                            transition: {
                                                duration: 0.18,
                                                ease: "easeOut",
                                            },
                                        }}
                                    />
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Integrations */}
                <div className="bg-light-surface dark:bg-dark-800/50 rounded-2xl p-10 border border-light-border dark:border-dark-700 text-center overflow-hidden">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                        Integrates seamlessly with
                    </p>
                    <div
                        ref={integrationsRef}
                        className="flex flex-wrap justify-center gap-x-12 gap-y-8 transition-transform duration-75 ease-out will-change-transform will-change-opacity"
                    >
                        {integrations.map((item) => (
                            <img
                                key={item.name}
                                src={item.logo}
                                alt={item.name}
                                className="h-8 w-auto opacity-60 hover:opacity-100 transition-all cursor-default grayscale hover:grayscale-0 dark:invert dark:hover:invert-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
