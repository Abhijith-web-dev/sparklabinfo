'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setSubmitStatus('success');
                form.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className={styles.formContainer}
        >
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className={styles.form}
            >
                {/* Hidden input for Netlify Forms */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Honeypot field for spam protection */}
                <p style={{ display: 'none' }}>
                    <label>
                        Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                </p>

                <div className={styles.row}>
                    <motion.div variants={itemVariants} className={styles.group}>
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className={styles.group}>
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your Company"
                        />
                    </motion.div>
                </div>

                <div className={styles.row}>
                    <motion.div variants={itemVariants} className={styles.group}>
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className={styles.group}>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 93478 58649"
                        />
                    </motion.div>
                </div>

                <motion.div variants={itemVariants} className={styles.group}>
                    <label htmlFor="inquiry">Inquiry Type</label>
                    <div className={styles.selectWrapper}>
                        <select id="inquiry" name="inquiry">
                            <option value="general">General Inquiry</option>
                            <option value="web-development">Web Development</option>
                            <option value="mobile-apps">Mobile Apps</option>
                            <option value="cloud-solutions">Cloud Solutions</option>
                            <option value="ui-ux-design">UI/UX Design</option>
                        </select>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className={styles.group}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        required
                    />
                </motion.div>

                {submitStatus === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={styles.successMessage}
                    >
                        Thank you! Your message has been sent successfully.
                    </motion.div>
                )}

                {submitStatus === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className={styles.errorMessage}
                    >
                        Failed to send message. Please try again.
                    </motion.div>
                )}

                <motion.button
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <span className={styles.loadingDots}>Sending...</span>
                    ) : (
                        <>
                            Send Message <Send size={20} />
                        </>
                    )}
                </motion.button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
