'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Palette, ArrowRight } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: 'Web Development',
        description: 'Scalable and high-performance web applications tailored to your business needs.',
        icon: <Globe size={32} />,
    },
    {
        title: 'Mobile Apps',
        description: 'Native and cross-platform mobile solutions that deliver exceptional user experiences.',
        icon: <Smartphone size={32} />,
    },
    {
        title: 'Cloud Solutions',
        description: 'Secure and efficient cloud infrastructure management and migration services.',
        icon: <Cloud size={32} />,
    },
    {
        title: 'UI/UX Design',
        description: 'Visually stunning and user-centric interfaces that define your brand identity.',
        icon: <Palette size={32} />,
    },
];

const Services = () => {
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
                    <h2 className={styles.title}>Our Core Services</h2>
                    <p className={styles.subtitle}>
                        Comprehensive technology solutions designed to drive innovation and growth.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <div className={styles.arrow}>
                                <ArrowRight size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
