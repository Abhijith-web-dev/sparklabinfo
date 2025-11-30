'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
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
                    <h2 className={styles.title}>What Our Clients Say</h2>
                    <p className={styles.subtitle}>
                        Real stories from businesses we've helped transform.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.testimonialCard}
                >
                    <div className={styles.quoteIcon}>
                        <Quote size={48} />
                    </div>
                    <p className={styles.quote}>
                        "SparkLabInfo transformed my portfolio into a stunning digital experience. The design perfectly captures my creative style, and the site performance is incredible. It's exactly what I needed to showcase my work."
                    </p>
                    <div className={styles.author}>
                        <div className={styles.avatar}>KK</div>
                        <div>
                            <h4 className={styles.name}>Krishna Kumar</h4>
                            <p className={styles.role}>Graphic Designer & Content Creator</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
