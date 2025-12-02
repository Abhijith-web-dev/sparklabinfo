import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BLOG_POSTS } from '@/lib/blogData';

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    if (!post) return { title: 'Post Not Found' };

    return {
        title: `${post.title} - SparkLabInfo Blog`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-primary/30">
            <Navbar />

            <article>
                {/* Cinematic Hero Section */}
                <div className="relative h-[85vh] w-full">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black" />

                    <div className="absolute inset-0 flex flex-col justify-end pb-20 px-4 md:px-8">
                        <div className="max-w-4xl mx-auto w-full">
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group backdrop-blur-md bg-white/10 px-4 py-2 rounded-full w-fit border border-white/10"
                            >
                                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium">Back to Insights</span>
                            </Link>

                            <div className="flex flex-wrap items-center gap-4 text-sm font-medium tracking-wide text-white/90 mb-6">
                                <span className="bg-primary px-3 py-1 rounded-full text-black font-bold uppercase text-xs">
                                    {post.category}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar size={16} /> {post.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={16} /> 5 min read
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-black font-bold">
                                        {post.author.charAt(0)}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-white">{post.author}</span>
                                        <span className="text-xs text-gray-400">Author</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-3xl mx-auto px-4 md:px-8 py-20">
                    <div className="flex justify-between items-start gap-8 relative">
                        {/* Social Sidebar (Desktop) */}
                        <div className="hidden lg:flex flex-col gap-6 sticky top-32">
                            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5 hover:border-white/20">
                                <Share2 size={20} />
                            </button>
                            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all border border-white/5 hover:border-white/20">
                                <Bookmark size={20} />
                            </button>
                        </div>

                        {/* Main Content */}
                        <div className="flex-1">
                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 font-light border-l-4 border-primary pl-6">
                                {post.excerpt}
                            </p>

                            <div
                                className="prose prose-invert prose-lg max-w-none 
                                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white 
                                prose-p:text-gray-300 prose-p:leading-8 prose-p:font-light
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                prose-strong:text-white prose-strong:font-semibold
                                prose-ul:text-gray-300 prose-li:marker:text-primary
                                prose-blockquote:border-l-primary prose-blockquote:bg-white/5 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </div>
                </div>

                {/* Read Next Section */}
                <section className="border-t border-white/10 py-20 px-4 md:px-8 bg-black/50">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-10">Read Next</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
                                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group block">
                                    <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src={relatedPost.imageUrl}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            unoptimized
                                        />
                                    </div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2">
                                        {relatedPost.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 line-clamp-2">{relatedPost.excerpt}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </article>

            <Footer />
        </main>
    );
}
