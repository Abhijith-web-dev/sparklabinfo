import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function ContactPage() {
    return (
        <main>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </main>
    );
}
