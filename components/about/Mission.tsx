'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Mission.module.css';

const Mission = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <h1 className={styles.title}>
                        Our Mission is to Empower <br />
                        Businesses Through Innovative <br />
                        <span className="gradient-text">Technology</span>
                    </h1>
                    <p className={styles.description}>
                        We are dedicated to building innovative solutions that empower businesses to thrive in a digital-first world.
                    </p>
                </motion.div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                        alt="Team meeting"
                        fill
                        style={{ objectFit: 'cover' }}
                        className={styles.image}
                        priority
                    />
                    <div className={styles.overlay} />
                </div>
            </div>
        </section>
    );
};

export default Mission;
