'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Linkedin, Github, Twitter } from 'lucide-react';
import styles from './Team.module.css';

const founder = {
    name: 'Abhijith',
    role: 'Founder & Lead Developer',
    image: '/founder.png',
    link: 'https://abhijith-dev.web.app/',
    bio: 'Passionate about building scalable solutions and empowering startups to achieve their digital dreams.',
};

const Team = () => {
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
                    <h2 className={styles.title}>Meet the Founder</h2>
                    <p className={styles.subtitle}>
                        Driven by a vision to innovate and inspire.
                    </p>
                </motion.div>

                <div className={styles.centerWrapper}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -10 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className={styles.card}
                    >
                        <div className={styles.cardContent}>
                            <Link href={founder.link} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                        className={styles.image}
                                    />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewProfile}>
                                            View Profile <ExternalLink size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <div className={styles.info}>
                                <Link href={founder.link} target="_blank" rel="noopener noreferrer" className={styles.nameLink}>
                                    <h3 className={styles.name}>{founder.name}</h3>
                                </Link>
                                <p className={styles.role}>{founder.role}</p>
                                <p className={styles.bio}>{founder.bio}</p>

                                <div className={styles.socials}>
                                    <a href='https://github.com/Abhijith-web-dev' target='_blank' rel="noopener noreferrer"><div className={styles.socialIcon}><Github size={20} /></div></a>
                                    <a href='https://www.linkedin.com/in/abhijith-s-354b5b382?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel="noopener noreferrer"><div className={styles.socialIcon}><Linkedin size={20} /></div></a>
                                    {/* <div className={styles.socialIcon}><Twitter size={20} /></div> */}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Team;
