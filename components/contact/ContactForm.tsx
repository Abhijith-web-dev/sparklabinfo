'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiry: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [feedback, setFeedback] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setFeedback('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setFeedback('Message sent successfully! We will get back to you soon.');
                setFormData({ name: '', company: '', email: '', phone: '', inquiry: '', message: '' });
            } else {
                setStatus('error');
                setFeedback(data.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setFeedback('Something went wrong. Please try again later.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.formContainer}
        >
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                    <div className={styles.group}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="company">Company</label>
                        <input type="text" id="company" placeholder="Tech Corp" value={formData.company} onChange={handleChange} />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.group}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className={styles.group}>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" placeholder="+91 93478 58649" value={formData.phone} onChange={handleChange} />
                    </div>
                </div>

                <div className={styles.group}>
                    <label htmlFor="inquiry">Inquiry Type</label>
                    <select id="inquiry" value={formData.inquiry} onChange={handleChange}>
                        <option value="">Select an option</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className={styles.group}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows={5} placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} required></textarea>
                </div>

                {feedback && (
                    <p className={status === 'success' ? styles.successMessage : styles.errorMessage}>
                        {feedback}
                    </p>
                )}

                <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
