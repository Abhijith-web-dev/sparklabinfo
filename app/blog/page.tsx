import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Blog() {
    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Blog Coming Soon
                </h1>
                <p className="text-xl text-text-muted max-w-2xl">
                    We are crafting insightful articles on technology, innovation, and digital transformation. Stay tuned!
                </p>
            </div>
            <Footer />
        </main>
    );
}
