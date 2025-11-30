'use client';

import { motion } from 'framer-motion';
import { Globe, Smartphone, Cloud, Palette, CheckCircle } from 'lucide-react';
import styles from './ServiceList.module.css';

const services = [
    {
        title: 'Web Development',
        description: 'We specialize in creating robust, scalable, and high-performance web applications tailored to your business needs.',
        features: ['E-commerce Platforms', 'Custom CRM & ERP', 'SaaS Applications', 'CMS'],
        icon: <Globe size={32} />,
    },
    {
        title: 'Mobile App Development',
        description: 'From concept to launch, we design and develop iOS and Android apps that solve real-world problems.',
        features: ['Native iOS & Android', 'Cross-Platform (Flutter/React Native)', 'App Maintenance', 'UI/UX Design'],
        icon: <Smartphone size={32} />,
    },
    {
        title: 'IT & Software Services',
        description: 'Comprehensive IT services including cloud infrastructure management, DevOps, and custom software solutions.',
        features: ['Cloud Migration', 'DevOps Automation', 'Cybersecurity Audits', 'IT Consulting'],
        icon: <Cloud size={32} />,
    },
    {
        title: 'UI/UX & Branding',
        description: 'Our design team creates visually stunning and user-centric interfaces that define your brand identity.',
        features: ['User Research', 'Wireframing & Prototyping', 'Brand Identity', 'Interaction Design'],
        icon: <Palette size={32} />,
    },
];

const ServiceList = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h1 className={styles.title}>Our Services</h1>
                    <p className={styles.subtitle}>
                        Comprehensive technology solutions to drive your business forward.
                    </p>
                </motion.div>

                <div className={styles.list}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={styles.card}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.icon}>{service.icon}</div>
                                <h2 className={styles.cardTitle}>{service.title}</h2>
                            </div>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <ul className={styles.features}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <CheckCircle size={16} className={styles.checkIcon} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceList;
