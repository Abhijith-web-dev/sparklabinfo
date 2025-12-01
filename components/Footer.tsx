'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook, ArrowRight, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setMessage('');

        try {
            const res = await fetch('/api/newsletter', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setMessage(data.message || 'Subscribed successfully!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Failed to send request.');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <Image
                                src="/logo.png"
                                alt="SparkLabInfo Logo"
                                width={40}
                                height={40}
                                className={styles.logoImage}
                                unoptimized
                            />
                            SparkLabInfo
                        </Link>
                        <p className={styles.tagline}>
                            Engineering the future of business through innovative technology solutions.
                        </p>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4>Company</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/portfolio">Case Studies</Link>
                        <Link href="/contact">Contact</Link>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4>Resources</h4>
                        <Link href="/blog">Blog</Link>
                        <Link href="#">Whitepapers</Link>
                        <Link href="#">Support</Link>
                    </div>

                    <div className={styles.newsletter}>
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for the latest tech insights.</p>
                        <form onSubmit={handleSubmit} className={styles.inputGroup}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={status === 'loading' || status === 'success'}
                                required
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                disabled={status === 'loading' || status === 'success'}
                            >
                                {status === 'loading' ? <Loader2 size={20} className={styles.spin} /> :
                                    status === 'success' ? <CheckCircle size={20} color="#10b981" /> :
                                        <ArrowRight size={20} />}
                            </button>
                        </form>
                        {message && (
                            <p className={`${styles.message} ${status === 'error' ? styles.error : styles.success}`}>
                                {status === 'error' && <AlertCircle size={14} />}
                                {message}
                            </p>
                        )}
                        <div className={styles.socials}>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} SparkLabInfo. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
