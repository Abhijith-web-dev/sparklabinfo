'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import styles from './WorkProcess.module.css';

const steps = [
    {
        id: '01',
        title: 'Discover',
        description: 'We dive deep into your business goals and challenges to understand your unique needs.',
        icon: <Search size={28} />,
    },
    {
        id: '02',
        title: 'Design',
        description: 'Our experts craft intuitive and visually stunning designs that align with your brand.',
        icon: <PenTool size={28} />,
    },
    {
        id: '03',
        title: 'Develop',
        description: 'We build robust, scalable solutions using the latest technologies and best practices.',
        icon: <Code size={28} />,
    },
    {
        id: '04',
        title: 'Deploy',
        description: 'Seamless launch and ongoing support to ensure your solution performs optimally.',
        icon: <Rocket size={28} />,
    },
];

const WorkProcess = () => {
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
                    <h2 className={styles.title}>Our Work Process</h2>
                    <p className={styles.subtitle}>
                        A streamlined approach to delivering excellence, from concept to launch.
                    </p>
                </motion.div>

                <div className={styles.steps}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={styles.step}
                        >
                            <div className={styles.stepHeader}>
                                <span className={styles.stepNumber}>{step.id}</span>
                                <div className={styles.iconWrapper}>{step.icon}</div>
                            </div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                            {index < steps.length - 1 && <div className={styles.connector} />}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
