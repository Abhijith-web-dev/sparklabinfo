import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCards from '@/components/pricing/PricingCards';

export const metadata = {
    title: 'Pricing - SparkLabInfo',
    description: 'Transparent pricing for student projects, landing pages, and enterprise web solutions.',
};

export default function Pricing() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <PricingCards />
            <Footer />
        </main>
    );
}
