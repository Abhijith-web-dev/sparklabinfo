'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import styles from './BookingModal.module.css';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    planName: string;
    priceRange: string;
    includeDomain?: boolean;
}

const BookingModal = ({ isOpen, onClose, planName, priceRange, includeDomain }: BookingModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        whatsapp: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const subject = `${planName} Inquiry`;
        const body = `Hi SparkLabInfo,

I'm interested in the ${planName} (${priceRange}).
${includeDomain ? 'Custom Domain Required: Yes' : ''}

My Details:
Name: ${formData.name}
Phone: ${formData.phone}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}

Message:
${formData.message}

Thanks.`;

        // Construct Gmail Compose URL
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=sparklabinfo1@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open in new tab
        window.open(gmailUrl, '_blank');

        setIsSubmitting(false);
        onClose();
        setFormData({ name: '', email: '', phone: '', whatsapp: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className={styles.closeButton} onClick={onClose}>
                            <X size={24} />
                        </button>

                        {isSuccess ? (
                            <div className={styles.successMessage}>
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="flex justify-center"
                                >
                                    <CheckCircle size={64} className={styles.successIcon} />
                                </motion.div>
                                <h3 className={styles.successTitle}>Booking Received!</h3>
                                <p className={styles.successText}>
                                    Thanks for your interest in the {planName}.<br />
                                    We'll contact you shortly via WhatsApp/Email.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h2 className={styles.title}>Get Started</h2>
                                <p className={styles.subtitle}>
                                    You selected: <span className="text-primary font-semibold">{planName}</span>
                                    <br />
                                    <span className="text-sm opacity-80">
                                        {priceRange} {includeDomain && '(+ Domain)'}
                                    </span>
                                </p>

                                <form
                                    className={styles.form}
                                    onSubmit={handleSubmit}
                                    name="booking"
                                    data-netlify="true"
                                    netlify-honeypot="bot-field"
                                >
                                    <input type="hidden" name="form-name" value="booking" />
                                    <input type="hidden" name="bot-field" />
                                    <input type="hidden" name="plan_name" value={planName} />
                                    <input type="hidden" name="price_range" value={priceRange} />
                                    <input type="hidden" name="include_domain" value={includeDomain ? 'Yes' : 'No'} />

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className={styles.input}
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                className={styles.input}
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div className={styles.inputGroup}>
                                            <label className={styles.label}>WhatsApp Number</label>
                                            <input
                                                type="tel"
                                                name="whatsapp"
                                                required
                                                className={styles.input}
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                                placeholder="Same as phone?"
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className={styles.input}
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className={styles.inputGroup}>
                                        <label className={styles.label}>Message (Optional)</label>
                                        <textarea
                                            name="message"
                                            className={styles.textarea}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={styles.submitBtn}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <Loader2 className="animate-spin" size={20} />
                                                Sending...
                                            </span>
                                        ) : 'Confirm Booking'}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
