'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import TextReveal from './animations/TextReveal';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.glow} />
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className={styles.badge}
                >
                    <Sparkles size={14} className={styles.badgeIcon} />
                    <span>Next-Gen IT Solutions</span>
                </motion.div>

                <div className={styles.titleWrapper}>
                    <TextReveal className={styles.title}>
                        Engineering the Future of Your Business
                    </TextReveal>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className={styles.subtitle}
                >
                    We deliver innovative, scalable, and secure technology solutions to accelerate your digital transformation journey.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className={styles.actions}
                >
                    <Link href="/services" className={styles.primaryCta}>
                        Discover Solutions <ArrowRight size={18} />
                    </Link>
                    <Link href="/contact" className={styles.secondaryCta}>
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
