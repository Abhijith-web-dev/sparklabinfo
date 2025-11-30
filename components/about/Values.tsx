'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Shield, Handshake } from 'lucide-react';
import styles from './Values.module.css';

const values = [
    {
        title: 'Innovation',
        description: 'We constantly seek better ways to solve problems and create value for our clients.',
        icon: <Lightbulb size={32} />,
    },
    {
        title: 'Integrity',
        description: 'We operate with transparency and honesty, building trust with every interaction.',
        icon: <Shield size={32} />,
    },
    {
        title: 'Collaboration',
        description: 'We believe that the best results come from working together, both internally and with our clients.',
        icon: <Handshake size={32} />,
    },
];

const Values = () => {
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
                    <h2 className={styles.title}>Our Core Values</h2>
                    <p className={styles.subtitle}>
                        Our values are the foundation of our culture and the guide for our every decision.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>{value.icon}</div>
                            <h3 className={styles.cardTitle}>{value.title}</h3>
                            <p className={styles.cardDescription}>{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
