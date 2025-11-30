'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './ContactInfo.module.css';

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.infoContainer}
        >
            <div className={styles.header}>
                <span className={styles.breadcrumb}>Home / Contact Us</span>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.description}>
                    Ready to transform your IT infrastructure? Reach out for a free consultation. We're here to help you achieve your business goals.
                </p>
            </div>

            <div className={styles.details}>
                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <Mail size={24} />
                    </div>
                    <div>
                        <h3 className={styles.itemTitle}>Email Us</h3>
                        <p className={styles.itemText}>sparklabinfo1@gmail.com</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <Phone size={24} />
                    </div>
                    <div>
                        <h3 className={styles.itemTitle}>Call Us</h3>
                        <p className={styles.itemText}>+91 93458 58649</p>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.iconWrapper}>
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h3 className={styles.itemTitle}>Visit Us</h3>
                        <p className={styles.itemText}>119, Gandhi street, Rajiv Nagar, Pallikuppam, Thiruverkadu, chennai-600077</p>
                    </div>
                </div>
            </div>

            <div className={styles.mapPlaceholder}>
                <iframe
                    src="https://maps.google.com/maps?q=13.054859,80.146033&z=15&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: '24px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </motion.div>
    );
};

export default ContactInfo;
