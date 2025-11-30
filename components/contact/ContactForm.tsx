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

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.formContainer}
        >
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
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
                    <div className={styles.group}>
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your Company"
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.group}>
                        <label htmlFor="email">Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 93478 58649"
                        />
                    </div>
                </div>

                <div className={styles.group}>
                    <label htmlFor="inquiry">Inquiry Type</label>
                    <select id="inquiry" name="inquiry">
                        <option value="general">General Inquiry</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-apps">Mobile Apps</option>
                        <option value="cloud-solutions">Cloud Solutions</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                    </select>
                </div>

                <div className={styles.group}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project..."
                        required
                    />
                </div>

                {submitStatus === 'success' && (
                    <div className={styles.successMessage}>
                        Thank you! Your message has been sent successfully.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className={styles.errorMessage}>
                        Failed to send message. Please try again.
                    </div>
                )}

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={20} />
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
