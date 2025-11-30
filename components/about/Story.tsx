'use client';

import { motion } from 'framer-motion';
import { Rocket, CheckCircle, TrendingUp, Globe } from 'lucide-react';
import styles from './Story.module.css';

const milestones = [
    {
        year: 'January 2025',
        title: 'Inception',
        description: 'SparkLabInfo was founded with a vision to revolutionize the IT landscape for startups and enterprises alike.',
        icon: <Rocket size={24} />,
    },
    {
        year: 'March 2025',
        title: 'Early Success',
        description: 'Successfully delivered 3 pilot projects for local businesses, establishing a strong foundation of trust and quality.',
        icon: <CheckCircle size={24} />,
    },
    {
        year: 'June 2025',
        title: 'Growth Phase',
        description: 'Expanding our client base by leveraging our early successes to attract new partnerships and opportunities.',
        icon: <TrendingUp size={24} />,
    },
    {
        year: 'Future Vision',
        title: 'Global Impact',
        description: 'Committed to providing exceptional service that helps our clients achieve their dreams and scale globally.',
        icon: <Globe size={24} />,
    },
];

const Story = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>Our Story</h2>
                    <p className={styles.subtitle}>
                        We are a new startup established in 2025, driven by a passion to provide the best service to our clients and help them realize their dreams.
                    </p>
                </motion.div>

                <div className={styles.timeline}>
                    {milestones.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={styles.timelineItem}
                        >
                            <div className={styles.iconWrapper}>
                                {item.icon}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <span className={styles.year}>{item.year}</span>
                                <p className={styles.description}>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                    <div className={styles.line}></div>
                </div>
            </div>
        </section>
    );
};

export default Story;
