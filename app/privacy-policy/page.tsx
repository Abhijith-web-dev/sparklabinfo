import React from 'react';
import styles from './page.module.css';

export const metadata = {
    title: 'Privacy Policy - SparkLabInfo',
    description: 'Privacy Policy for SparkLabInfo website.',
};

const PrivacyPolicy = () => {
    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: November 30, 2025</p>

                <section className={styles.section}>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to SparkLabInfo ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please contact us at sparklabinfo1@gmail.com.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>2. Information We Collect</h2>
                    <p>
                        We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.
                    </p>
                    <ul>
                        <li><strong>Personal Information Provided by You:</strong> We collect names; phone numbers; email addresses; job titles; and other similar information.</li>
                        <li><strong>Automatically Collected Information:</strong> We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Website, and other technical information.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>3. How We Use Your Information</h2>
                    <p>
                        We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                    </p>
                    <ul>
                        <li>To send you marketing and promotional communications.</li>
                        <li>To send administrative information to you.</li>
                        <li>To fulfill and manage your orders.</li>
                        <li>To post testimonials.</li>
                        <li>To deliver and facilitate delivery of services to the user.</li>
                        <li>To respond to user inquiries/offer support to users.</li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2>4. Sharing Your Information</h2>
                    <p>
                        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>5. Security of Your Information</h2>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2>6. Contact Us</h2>
                    <p>
                        If you have questions or comments about this policy, you may email us at sparklabinfo1@gmail.com or by post to:
                    </p>
                    <address>
                        SparkLabInfo<br />
                        119, Gandhi street, Rajiv Nagar,<br />
                        Pallikuppam, Thiruverkadu,<br />
                        Chennai - 600077<br />
                        India
                    </address>
                </section>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
