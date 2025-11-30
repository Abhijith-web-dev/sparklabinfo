'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
    children: string;
    className?: string;
}

const TextReveal = ({ children, className }: TextRevealProps) => {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const words = children.split(' ');

    useEffect(() => {
        if (!containerRef.current) return;

        const spans = containerRef.current.querySelectorAll('span');

        gsap.to(spans, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [children]);

    return (
        <h1 ref={containerRef} className={className} style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25em' }}>
            {words.map((word, index) => (
                <span
                    key={index}
                    style={{
                        display: 'inline-block',
                        opacity: 0,
                        transform: 'translateY(20px)'
                    }}
                >
                    {word}
                </span>
            ))}
        </h1>
    );
};

export default TextReveal;
