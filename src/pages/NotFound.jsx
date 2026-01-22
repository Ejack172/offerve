
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <SEO title="404 - Page Not Found" description="The page you are looking for does not exist." noindex={true} />
            <Header />
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem', background: 'var(--bg-main)' }}>
                <div style={{ maxWidth: '600px' }}>
                    <div style={{ fontSize: '6rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1, marginBottom: '1rem' }}>404</div>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Page Not Found</h1>
                    <p style={{ color: 'var(--text-body)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                        Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/" className="btn-primary" style={{
                            padding: '0.8rem 2rem',
                            background: 'var(--primary)',
                            color: 'white',
                            borderRadius: '30px',
                            fontWeight: '600',
                            textDecoration: 'none'
                        }}>Go Home</Link>
                        <Link to="/stores" className="btn-outline" style={{
                            padding: '0.8rem 2rem',
                            background: 'white',
                            color: 'var(--text-main)',
                            border: '1px solid #e2e8f0',
                            borderRadius: '30px',
                            fontWeight: '600',
                            textDecoration: 'none'
                        }}>Browse Stores</Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;
