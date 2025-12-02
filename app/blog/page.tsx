import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BLOG_POSTS } from '@/lib/blogData';
import styles from './Blog.module.css';

export const metadata = {
    title: 'Insights - SparkLabInfo',
    description: 'Exploring the frontiers of technology, design, and digital innovation.',
};

export default function Blog() {
    const featuredPost = BLOG_POSTS[0];
    const otherPosts = BLOG_POSTS.slice(1);

    return (
        <main className={styles.container}>
            <Navbar />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src={featuredPost.imageUrl}
                        alt={featuredPost.title}
                        fill
                        className={styles.heroImage}
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                <div className={styles.heroContent}>
                    <span className={styles.heroTag}>Featured Story</span>
                    <h1 className={styles.heroTitle}>{featuredPost.title}</h1>
                    <p className={styles.heroExcerpt}>{featuredPost.excerpt}</p>
                    <Link href={`/blog/${featuredPost.slug}`} className={styles.readMoreBtn}>
                        Read Full Story <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Filter Bar */}
            <div className={styles.filterBar}>
                <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
                <button className={styles.filterBtn}>Design</button>
                <button className={styles.filterBtn}>Technology</button>
                <button className={styles.filterBtn}>Business</button>
            </div>

            {/* Grid Section */}
            <section className={styles.gridSection}>
                <div className={styles.grid}>
                    {otherPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.slug}`} className={styles.postItem}>
                            <div className={styles.postImageWrapper}>
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    fill
                                    className={styles.postImage}
                                    unoptimized
                                />
                            </div>
                            <div className={styles.postContent}>
                                <div className={styles.postMeta}>
                                    <span>{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h2 className={styles.postTitle}>{post.title}</h2>
                                <p className={styles.postExcerpt}>{post.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
