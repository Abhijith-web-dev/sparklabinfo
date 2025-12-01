'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, TrendingUp, RefreshCw } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const features = [
    {
        title: 'Expert-Led Teams',
        description: 'Industry veterans with deep domain knowledge driving your success.',
        icon: <Users size={24} />,
    },
    {
        title: 'Proven ROI',
        description: 'Strategic focus on delivering measurable results that impact your bottom line.',
        icon: <TrendingUp size={24} />,
    },
    {
        title: 'Agile Methodology',
        description: 'Flexible processes ensuring fast delivery and alignment with your goals.',
        icon: <RefreshCw size={24} />,
    },
];

const WhyChooseUs = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <h2 className={styles.title}>Why Choose Us?</h2>
                    <p className={styles.subtitle}>
                        We combine cutting-edge technology with strategic expertise to deliver solutions that are not just effective, but transformative.
                    </p>

                    <div className={styles.features}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.feature}>
                                <div className={styles.iconWrapper}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDescription}>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.imageWrapper}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                            alt="Team working"
                            fill
                            style={{ objectFit: 'cover' }}
                            className={styles.image}
                            unoptimized
                        />
                        <div className={styles.overlay} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
