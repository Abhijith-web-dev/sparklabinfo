'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import styles from './PricingCards.module.css';
import BookingModal from './BookingModal';

const PricingCards = () => {
    const [includeDomain, setIncludeDomain] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState({ name: '', price: '' });

    const openBooking = (name: string, price: string) => {
        setSelectedPlan({ name, price });
        setIsModalOpen(true);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={styles.title}
                    >
                        Transparent <span className="gradient-text">Pricing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={styles.subtitle}
                    >
                        Choose the perfect plan for your needs. From student projects to enterprise-grade solutions.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={styles.grid}
                >
                    {/* Student Project Tier */}
                    <motion.div variants={cardVariants} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.tierName}>Student Project</h3>
                            <div className={styles.priceWrapper}>
                                <span className={styles.currency}>₹</span>
                                <span className={styles.price}>2,500 - 5,000</span>
                            </div>
                        </div>
                        <ul className={styles.features}>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Complete Project Source Code
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Simplified Documentation
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Setup Instructions
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Basic Support
                            </li>
                        </ul>
                        <button
                            onClick={() => openBooking('Student Project', '₹2,500 - ₹5,000')}
                            className={styles.ctaButton}
                        >
                            Get Started <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    {/* Enterprise Landing Page Tier */}
                    <motion.div variants={cardVariants} className={`${styles.card} ${styles.popular}`}>
                        <div className={styles.badge}>Most Popular</div>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.tierName}>Landing Page</h3>
                            <div className={styles.priceWrapper}>
                                <span className={styles.currency}>₹</span>
                                <span className={styles.price}>3,500 - 6,000</span>
                            </div>
                            {includeDomain && <span style={{ display: 'block', fontSize: '0.9rem', color: '#10b981', marginTop: '0.5rem', fontWeight: 500 }}>+ Additional Amount for Domain</span>}
                        </div>

                        <div
                            className={styles.checkboxWrapper}
                            onClick={() => setIncludeDomain(!includeDomain)}
                        >
                            <input
                                type="checkbox"
                                checked={includeDomain}
                                onChange={() => { }} // Handled by parent div
                                className={styles.checkbox}
                            />
                            <span className={styles.checkboxLabel}>Include Custom Domain</span>
                        </div>

                        <ul className={styles.features}>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Professional UI/UX Design
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Mobile Responsive
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                SEO Optimization
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Contact Form Integration
                            </li>
                            {includeDomain && (
                                <motion.li
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className={styles.feature}
                                >
                                    <Check size={20} className={styles.checkIcon} />
                                    <span style={{ color: '#fff', fontWeight: 500 }}>Custom Domain (Additional Charges Apply)</span>
                                </motion.li>
                            )}
                        </ul>
                        <button
                            onClick={() => openBooking('Landing Page', '₹3,500 - ₹6,000')}
                            className={`${styles.ctaButton} ${styles.primary}`}
                        >
                            Get Started <ArrowRight size={18} />
                        </button>
                    </motion.div>

                    {/* Enterprise Web Product Tier */}
                    <motion.div variants={cardVariants} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.tierName}>Enterprise Product</h3>
                            <div className={styles.priceWrapper}>
                                <span className={styles.currency}>₹</span>
                                <span className={styles.price}>10,000+</span>
                            </div>
                        </div>
                        <ul className={styles.features}>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Custom Web Application
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Proprietary Tools & Guidelines
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Advanced Customization
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Priority Support
                            </li>
                            <li className={styles.feature}>
                                <Check size={20} className={styles.checkIcon} />
                                Scalable Architecture
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/919345858649?text=Hi%2C%20I%27m%20interested%20in%20an%20Enterprise%20Web%20Product."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.ctaButton} ${styles.whatsappButton}`}
                        >
                            Chat on WhatsApp <MessageCircle size={18} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                planName={selectedPlan.name}
                priceRange={selectedPlan.price}
                includeDomain={selectedPlan.name === 'Landing Page' ? includeDomain : undefined}
            />
        </section>
    );
};

export default PricingCards;
