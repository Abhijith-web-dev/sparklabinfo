'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image src="/logo.png" alt="SparkLabInfo Logo" width={40} height={40} className={styles.logoImage} />
                    <span className={styles.logoText}>SparkLabInfo</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/services" className={styles.link}>Services</Link>
                    <Link href="/portfolio" className={styles.link}>Case Studies</Link>
                    <Link href="/about" className={styles.link}>About Us</Link>
                    <Link href="/contact" className={styles.cta}>
                        Get a Quote <ChevronRight size={16} />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={styles.mobileMenu}
                        >
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link href="/portfolio" onClick={() => setIsOpen(false)}>Case Studies</Link>
                            <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className={styles.mobileCta}>
                                Get a Quote
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
