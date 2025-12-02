export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: string;
    category: string;
    imageUrl: string;
    slug: string;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Revolutionizing Web Development: The SparkLabInfo Story",
        excerpt: "Discover how SparkLabInfo is transforming the digital landscape with cutting-edge technology, premium design, and a commitment to excellence.",
        content: `
            <h2>Welcome to the Future of Digital Innovation</h2>
            <p>In an era where digital presence is synonymous with brand identity, <strong>SparkLabInfo</strong> stands as a beacon of innovation and excellence. We are not just a web development agency; we are architects of the digital future, crafting experiences that resonate, engage, and convert.</p>

            <h3>Our Mission</h3>
            <p>At SparkLabInfo, our mission is simple yet profound: to empower businesses with digital solutions that are as functional as they are beautiful. We believe that a website is more than just code; it's a digital ecosystem that breathes life into your brand's vision.</p>

            <h3>Why We Are Different</h3>
            <p>What sets us apart is our unwavering commitment to quality and our holistic approach to development. We don't just build websites; we build partnerships. Here is what makes us unique:</p>
            <ul>
                <li><strong>Premium Aesthetics:</strong> We leverage the latest design trends—glassmorphism, neomorphism, and dynamic animations—to create visually stunning interfaces.</li>
                <li><strong>Cutting-Edge Technology:</strong> From Next.js and React to advanced AI integrations, we use the best tools to ensure your site is fast, secure, and scalable.</li>
                <li><strong>User-Centric Design:</strong> Every pixel is placed with purpose. We prioritize user experience (UX) to ensure your customers have a seamless journey.</li>
            </ul>

            <h3>Our Services</h3>
            <p>We offer a comprehensive suite of services tailored to meet the diverse needs of modern businesses:</p>
            <ul>
                <li><strong>Custom Web Development:</strong> Tailor-made solutions that fit your specific business requirements.</li>
                <li><strong>E-Commerce Solutions:</strong> Robust online stores that drive sales and enhance customer satisfaction.</li>
                <li><strong>SEO & Digital Marketing:</strong> Strategies that increase your visibility and bring your audience to you.</li>
            </ul>

            <h3>Join Us on Our Journey</h3>
            <p>As we look to the future, we are excited about the possibilities that lie ahead. We invite you to join us on this journey of innovation. Whether you are a startup looking to make your mark or an established enterprise seeking to reinvent yourself, SparkLabInfo is here to turn your vision into reality.</p>

            <p><strong>Let's build something extraordinary together.</strong></p>
        `,
        date: "Dec 1, 2025",
        author: "SparkLab Team",
        category: "Company News",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
        slug: "revolutionizing-web-development-sparklabinfo"
    },
    {
        id: 2,
        title: "The Future of Web Development: AI & No-Code",
        excerpt: "Explore how Artificial Intelligence and No-Code platforms are reshaping the landscape of web development in 2025.",
        content: "<p>Content coming soon...</p>",
        date: "Dec 1, 2025",
        author: "SparkLab Team",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        slug: "future-web-dev-ai"
    },
    {
        id: 3,
        title: "Optimizing React Applications for Performance",
        excerpt: "A deep dive into advanced techniques for making your Next.js and React applications lightning fast.",
        content: "<p>Content coming soon...</p>",
        date: "Nov 28, 2025",
        author: "Dev Team",
        category: "Development",
        imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
        slug: "optimizing-react-performance"
    },
    {
        id: 4,
        title: "UI/UX Trends to Watch in 2026",
        excerpt: "From glassmorphism to neomorphism, discover the design trends that will define the next generation of user interfaces.",
        content: "<p>Content coming soon...</p>",
        date: "Nov 25, 2025",
        author: "Design Team",
        category: "Design",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
        slug: "ui-ux-trends-2026"
    },
    {
        id: 5,
        title: "Building Scalable Enterprise Solutions",
        excerpt: "Key architectural decisions and patterns for building robust, scalable enterprise-grade web applications.",
        content: "<p>Content coming soon...</p>",
        date: "Nov 20, 2025",
        author: "Tech Lead",
        category: "Enterprise",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        slug: "scalable-enterprise-solutions"
    },
    {
        id: 6,
        title: "The Impact of 5G on Mobile Web Experiences",
        excerpt: "How 5G technology is enabling richer, more immersive mobile web experiences and what it means for developers.",
        content: "<p>Content coming soon...</p>",
        date: "Nov 15, 2025",
        author: "Mobile Team",
        category: "Mobile",
        imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
        slug: "5g-mobile-web-impact"
    },
    {
        id: 7,
        title: "Secure Coding Practices for Modern Web Apps",
        excerpt: "Essential security practices every developer should know to protect their applications against common vulnerabilities.",
        content: "<p>Content coming soon...</p>",
        date: "Nov 10, 2025",
        author: "Security Team",
        category: "Security",
        imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
        slug: "secure-coding-practices"
    }
];
