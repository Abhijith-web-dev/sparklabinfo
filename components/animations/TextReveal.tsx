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
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const words = children.split(' ');
        textRef.current.innerHTML = '';

        words.forEach((word) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            textRef.current?.appendChild(span);
        });

        const spans = textRef.current.children;

        gsap.to(spans, {
            scrollTrigger: {
                trigger: textRef.current,
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
        <h1 ref={textRef} className={className} style={{ overflow: 'hidden' }}>
            {children}
        </h1>
    );
};

export default TextReveal;
