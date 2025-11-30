import React from 'react';
import styles from '../privacy-policy/page.module.css'; // Reusing styles for consistency

export const metadata = {
    title: 'Terms of Service - SparkLabInfo',
    description: 'Terms of Service for SparkLabInfo website.',
};

const TermsOfService = () => {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Terms of Service</h1>
                <p className={styles.lastUpdated}>Last Updated: November 30, 2025</p>

                <section className={styles.section}>
                    <h2>1. Agreement to Terms</h2>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and SparkLabInfo ("we," "us," or "our"), concerning your access to and use of the SparkLabInfo website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                    </p>
                    <p>
                        You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>3. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>4. Prohibited Activities</h2>
                    <p>
                        You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Limitation of Liability</h2>
                    <p>
                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the Site, even if we have been advised of the possibility of such damages.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>6. Contact Us</h2>
                    <p>
                        In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                    </p>
                    <address>
                        SparkLabInfo<br />
                        119, Gandhi street, Rajiv Nagar,<br />
                        Pallikuppam, Thiruverkadu,<br />
                        Chennai - 600077<br />
                        India<br />
                        Phone: +91 93458 58649<br />
                        Email: sparklabinfo1@gmail.com
                    </address>
                </section>
            </div>
        </main>
    );
};

export default TermsOfService;
