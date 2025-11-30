'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Layout, Smartphone, Box } from 'lucide-react';
import styles from './TechStack.module.css';

const techs = [
    { name: 'React', icon: <Code2 size={32} /> },
    { name: 'Next.js', icon: <Server size={32} /> },
    { name: 'Node.js', icon: <Database size={32} /> },
    { name: 'Python', icon: <Code2 size={32} /> },
    { name: 'AWS', icon: <Cloud size={32} /> },
    { name: 'Docker', icon: <Box size={32} /> },
    { name: 'Figma', icon: <Layout size={32} /> },
    { name: 'Flutter', icon: <Smartphone size={32} /> },
];

const TechStack = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={styles.title}
                >
                    Technologies We Use
                </motion.h2>

                <div className={styles.grid}>
                    {techs.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className={styles.card}
                        >
                            <span className={styles.icon}>{tech.icon}</span>
                            <span className={styles.name}>{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
