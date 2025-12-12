import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    useEffect(() => {
        document.title = "About Offerve - India's #1 Coupon & Deal Discovery Engine";
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', 'Learn about Offerve, the leading destination for verified coupons, promo codes, and exclusive deals in India. Discover how we help millions save money daily.');
        }
    }, []);

    return (
        <div className="about-page">
            <Header />
            <main style={{ minHeight: '100vh', background: 'var(--bg-light)', fontFamily: 'var(--font-main, sans-serif)' }}>

                {/* Hero Section */}
                <section className="hero-section" style={{ background: 'linear-gradient(135deg, var(--bg-main) 0%, #ffffff 100%)', padding: '5rem 1.5rem', textAlign: 'center' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-main)', letterSpacing: '-1px' }}>
                            We're on a Mission to <br /><span style={{ color: 'var(--primary)' }}>Democratize Savings</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-gray)', lineHeight: '1.6', maxWidth: '700px', margin: '0 auto' }}>
                            Offerve is India's fastest-growing destination for smart shoppers. We combine cutting-edge technology with human verification to bring you thousands of active deals every single day.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section style={{ padding: '0 1.5rem', marginTop: '-3rem' }}>
                    <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {[
                            { label: "Active Coupons", value: "50,000+" },
                            { label: "Partner Stores", value: "2,500+" },
                            { label: "Happy Users", value: "1M+" },
                            { label: "Daily Updates", value: "24/7" }
                        ].map((stat, idx) => (
                            <div key={idx} style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '0.5rem' }}>{stat.value}</div>
                                <div style={{ fontSize: '1rem', color: 'var(--text-gray)', fontWeight: '600' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Detailed Content */}
                <section className="content-section" style={{ padding: '5rem 1.5rem' }}>
                    <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--text-main)', borderBottom: '2px solid var(--primary-light, #eee)', paddingBottom: '0.5rem', display: 'inline-block' }}>Who We Are</h2>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-body)', marginBottom: '1rem' }}>
                                Founded with a simple yet powerful idea, <strong>Offerve</strong> started as a small project to help friends find working promo codes. Today, it has evolved into a comprehensive savings platform trust by millions.
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-body)' }}>
                                In a digital age where online shopping is the norm, finding a working discount code shouldn't feel like finding a needle in a haystack. That's why we built Offerve – a platform that prioritizes <strong>accuracy, transparency, and ease of use</strong>. We are a team of deal hunters, tech enthusiasts, and savings experts dedicated to keeping money in your pocket.
                            </p>
                        </div>

                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>How We Work</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                {[
                                    { title: "1. We Hunt", desc: "Our automated algorithms and expert team scan the web 24/7 to find the latest offers from top brands." },
                                    { title: "2. We Verify", desc: "We don't just post anything. Every coupon is manually tested to ensure it actually works at checkout." },
                                    { title: "3. You Save", desc: "We organize deals clearly, so you can copy a code and apply it in seconds, saving money instantly." }
                                ].map((step, idx) => (
                                    <div key={idx} style={{ background: '#f8f9fa', padding: '2rem', borderRadius: '12px', border: '1px solid #eee' }}>
                                        <h3 style={{ marginBottom: '1rem', color: 'var(--primary)', fontSize: '1.4rem' }}>{step.title}</h3>
                                        <p style={{ color: 'var(--text-body)', lineHeight: '1.6' }}>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Categories SEO Text */}
                        <div style={{ marginBottom: '4rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>Your One-Stop Shop for Everything</h2>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-body)' }}>
                                Whether you are looking to upgrade your wardrobe with the latest <strong>Fashion</strong> trends from Myntra and Ajio, ordering delicious meals from <strong>Food Delivery</strong> giants like Swiggy and Zomato, or booking your next vacation via <strong>Travel</strong> portals like MakeMyTrip, Offerve has you covered. We also feature extensive deals for <strong>Electronics</strong>, <strong>Beauty</strong>, <strong>Hosting</strong>, and <strong>Education</strong> platforms.
                            </p>
                        </div>

                        {/* FAQ Section */}
                        <div>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--text-main)', textAlign: 'center' }}>Frequently Asked Questions</h2>
                            <div style={{ display: 'grid', gap: '1rem' }}>
                                {[
                                    { q: "Is Offerve completely free to use?", a: "Yes! Offerve is 100% free for all users. We may earn a small commission from retailers when you use our links, but this never affects the price you pay." },
                                    { q: "How often are coupons updated?", a: "Our database is updated in real-time. We add hundreds of new coupons daily and remove expired ones to keep your experience frustration-free." },
                                    { q: "Do I need to register to use a coupon?", a: "No registration is required. You can search for a store, click on a coupon, and start saving immediately." },
                                    { q: "What if a coupon doesn't work?", a: "While we strive for 100% accuracy, sometimes retailers change terms without notice. If you find a broken code, let us know, and we'll fix it instantly." }
                                ].map((faq, idx) => (
                                    <div key={idx} style={{ borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{faq.q}</h3>
                                        <p style={{ color: 'var(--text-gray)', margin: 0 }}>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                <section style={{ background: 'var(--primary)', padding: '4rem 1.5rem', textAlign: 'center', color: 'white' }}>
                    <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Start Saving?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>Join massive community of smart shoppers and never pay full price again.</p>
                        <a href="/" style={{ display: 'inline-block', background: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', fontSize: '1.2rem', fontWeight: 'bold', borderRadius: '50px', textDecoration: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}>
                            Browse Today's Top Deals
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default About;
