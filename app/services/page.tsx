import ServiceList from '@/components/services/ServiceList';
import TechStack from '@/components/services/TechStack';
import Footer from '@/components/Footer';

export default function ServicesPage() {
    return (
        <main>
            <ServiceList />
            <TechStack />
            <Footer />
        </main>
    );
}
