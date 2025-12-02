'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    slug: string;
}

const BlogCard = ({ post, index }: { post: BlogPost; index: number }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col h-full"
        >
            <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                    <Image
                        src={post.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />

                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-bold tracking-wider text-black uppercase bg-white/90 backdrop-blur-md rounded-full">
                            {post.category}
                        </span>
                    </div>
                </div>

                <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-600" />
                        <div className="flex items-center gap-1.5">
                            <Clock size={14} />
                            <span>5 min read</span>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                    </h3>

                    <p className="text-gray-400 mb-6 line-clamp-2 text-base leading-relaxed">
                        {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center text-sm font-semibold text-white group-hover:text-primary transition-colors">
                        Read Article <ArrowUpRight size={18} className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};

export default BlogCard;
