'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './PortfolioGrid.module.css';

const projects = [
    {
        id: 1,
        title: 'Webaid',
        category: 'Web Development',
        image: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200605223543/Top-10-Tools-That-Every-Web-Developer-Must-Try-Once.png',
        tags: ['React', 'AWS', 'Python'],
        description: 'Front-end loaded web developer tools',
    },
    {
        id: 2,
        title: 'Gitmind',
        category: 'Web Development',
        image: 'https://images.unsplash.com/photo-1654277041218-84424c78f0ae?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2l0aHVifGVufDB8fDB8fHww',
        tags: ['React', 'Firebase', 'Github', 'Tailwind css'],
        description: 'Github repo search engine with Ai enabled platform',
    },
    // {
    //     id: 3,
    //     title: 'Logistics Pro',
    //     category: 'Cloud Solutions',
    //     image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    //     tags: ['Google Cloud', 'Go', 'Kubernetes'],
    //     description: 'Real-time fleet tracking and optimization.',
    // },
    // {
    //     id: 4,
    //     title: 'Retail Giant',
    //     category: 'Web Development',
    //     image: 'https://images.unsplash.com/photo-1472851294608-41525b3f5834?q=80&w=2070&auto=format&fit=crop',
    //     tags: ['Shopify', 'Node.js', 'GraphQL'],
    //     description: 'E-commerce site with personalized recommendations.',
    // },
    // {
    //     id: 5,
    //     title: 'EduTech Innovators',
    //     category: 'Mobile Apps',
    //     image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop',
    //     tags: ['React Native', 'Node.js', 'MongoDB'],
    //     description: 'Interactive e-learning mobile application.',
    // },
    // {
    //     id: 6,
    //     title: 'TravelNow',
    //     category: 'Cloud Solutions',
    //     image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop',
    //     tags: ['AWS Lambda', 'Python', 'DynamoDB'],
    //     description: 'Cloud-native booking engine for global travel.',
    // },
];

const categories = ['All', 'Web Development', 'Cloud Solutions', 'Mobile Apps', 'Data Analytics'];

const PortfolioGrid = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={styles.header}
                >
                    <h1 className={styles.title}>Our Proven Track Record</h1>
                    <p className={styles.subtitle}>
                        We deliver innovative and reliable IT solutions that drive growth and efficiency for our clients.
                    </p>
                </motion.div>

                <div className={styles.filters}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={styles.card}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className={styles.image}
                                    />
                                    <div className={styles.overlay} />
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
