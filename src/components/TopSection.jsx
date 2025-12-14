import React, { useState, useEffect } from 'react';
import CouponCard from './CouponCard';
import analytics from '../services/analytics';

const TopSection = () => {
    const [topCoupons, setTopCoupons] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        // Fetch top 30 coupons from the central analytics system
        // This ensures the data matches the admin dashboard
        const data = analytics.getTopCoupons(30);
        setTopCoupons(data);
    }, [refresh]);

    const handleRefresh = () => {
        // Force a re-fetch after a short delay to allow the click to be registered
        // CouponCard handles the actual tracking call
        setTimeout(() => {
            setRefresh(prev => prev + 1);
        }, 100);
    };

    return (
        <section className="top-section">
            <div className="container">
                <div className="section-grid">
                    {/* Top Coupons Block */}
                    <div className="top-block coupons-block">
                        <div className="block-header">
                            <h2>🔥 Top 30 Trending Coupons</h2>
                            <span className="live-badge">Live Usage</span>
                        </div>
                        <div className="coupons-scroll-container">
                            <div className="coupons-stack">
                                {topCoupons.length > 0 ? (
                                    topCoupons.map((coupon, index) => (
                                        <div key={coupon.trackingKey} className="ranked-coupon-wrapper">
                                            <div className="rank-number">#{index + 1}</div>
                                            <CouponCard
                                                {...coupon}
                                                // If it's the #1 coupon, show a special ribbon
                                                ribbon={index === 0 ? "MOST COPIED" : null}
                                                // When copied, refresh the list to show updated rankings
                                                onCopy={handleRefresh}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p style={{ textAlign: 'center', color: '#64748b', padding: '2rem' }}>
                                        Start using coupons to see trending offers here!
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Top Offers / Blog Block */}
                    <div className="top-block offers-block">
                        <div className="block-header">
                            <h2>⚡ Top Offers & Guides</h2>
                            <a href="#" className="view-all">View All</a>
                        </div>
                        <div className="offers-grid">
                            {/* Placeholder Offer 1 */}
                            <article className="offer-card">
                                <div className="offer-img-box" style={{ background: '#ffe4e6' }}>
                                    <span className="offer-tag">Tricks</span>
                                </div>
                                <div className="offer-content">
                                    <h3>How to save ₹500 on every Zomato Order</h3>
                                    <p>Use these hidden bank combinations to maximize your food savings today.</p>
                                    <button className="read-btn">Read Guide</button>
                                </div>
                            </article>

                            {/* Placeholder Offer 2 */}
                            <article className="offer-card">
                                <div className="offer-img-box" style={{ background: '#dcfce7' }}>
                                    <span className="offer-tag">Deal</span>
                                </div>
                                <div className="offer-content">
                                    <h3>Amazon Prime Day: Early Access List</h3>
                                    <p>Get the sneak peek of upcoming lightning deals 24 hours before sale.</p>
                                    <button className="read-btn">View Deal</button>
                                </div>
                            </article>

                            {/* Placeholder Offer 3 */}
                            <article className="offer-card">
                                <div className="offer-img-box" style={{ background: '#e0f2fe' }}>
                                    <span className="offer-tag">Travel</span>
                                </div>
                                <div className="offer-content">
                                    <h3>Flight Booking Hacks 2025</h3>
                                    <p>Secret incognito modes and VPN tricks to get cheaper flights instantly.</p>
                                    <button className="read-btn">Read Guide</button>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .top-section {
                    padding: 3rem 0;
                    background: #f8fafc;
                    border-bottom: 1px solid rgba(0,0,0,0.05);
                }

                .section-grid {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr; /* 60/40 split */
                    gap: 2.5rem;
                    align-items: start; /* Prevent stretching */
                }

                .block-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .block-header h2 {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--text-main);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .live-badge {
                    background: #fee2e2;
                    color: #ef4444;
                    font-size: 0.75rem;
                    padding: 0.2rem 0.6rem;
                    border-radius: 20px;
                    font-weight: 700;
                    text-transform: uppercase;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.6; }
                    100% { opacity: 1; }
                }

                /* Scroll Container for 30 items */
                .coupons-scroll-container {
                    max-height: 800px; /* Adjust based on desired height */
                    overflow-y: auto;
                    padding-right: 10px; /* Space for scrollbar */
                    /* Custom Scrollbar */
                    scrollbar-width: thin;
                    scrollbar-color: #cbd5e1 #f1f5f9;
                }

                .coupons-scroll-container::-webkit-scrollbar {
                    width: 6px;
                }
                .coupons-scroll-container::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 4px;
                }
                .coupons-scroll-container::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 4px;
                }
                .coupons-scroll-container::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }

                .coupons-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    padding-bottom: 1rem; /* Padding at bottom for scroll */
                }

                .ranked-coupon-wrapper {
                    position: relative;
                }

                .rank-number {
                    position: absolute;
                    left: -15px;
                    top: -10px;
                    background: var(--text-main);
                    color: white;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    font-weight: 700;
                    font-size: 0.9rem;
                    z-index: 10;
                    box-shadow: var(--shadow-sm);
                    border: 2px solid white;
                }
                
                .ranked-coupon-wrapper:nth-child(1) .rank-number { background: #eab308; } /* Gold */
                .ranked-coupon-wrapper:nth-child(2) .rank-number { background: #94a3b8; } /* Silver */
                .ranked-coupon-wrapper:nth-child(3) .rank-number { background: #b45309; } /* Bronze */

                /* Offers Block Styling */
                .offers-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    position: sticky;
                    top: 2rem; /* Make this stick while scrolling coupons if needed */
                }

                .offer-card {
                    background: white;
                    border: 1px solid rgba(0,0,0,0.06);
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    display: flex;
                    transition: var(--transition);
                }

                .offer-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-sm);
                }

                .offer-img-box {
                    width: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .offer-tag {
                    font-weight: 700;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    opacity: 0.7;
                }

                .offer-content {
                    padding: 1.2rem;
                    flex: 1;
                }

                .offer-content h3 {
                    font-size: 1.05rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    line-height: 1.4;
                    color: var(--text-main);
                }

                .offer-content p {
                    font-size: 0.85rem;
                    color: var(--text-body);
                    margin-bottom: 1rem;
                    line-height: 1.5;
                }

                .read-btn {
                    background: transparent;
                    border: none;
                    color: var(--primary);
                    font-weight: 600;
                    font-size: 0.85rem;
                    padding: 0;
                    cursor: pointer;
                }

                .read-btn:hover {
                    text-decoration: underline;
                }

                .view-all {
                    font-size: 0.9rem;
                    color: var(--primary);
                    font-weight: 600;
                }

                @media (max-width: 900px) {
                    .section-grid {
                        grid-template-columns: 1fr;
                    }
                    .offers-block {
                        margin-top: 2rem;
                    }
                    .coupons-scroll-container {
                        max-height: 600px; /* Slightly shorter on mobile */
                    }
                }

                @media (max-width: 768px) {
                    .offers-grid {
                        grid-template-columns: 1fr; /* Ensure offers stack */
                    }
                    .block-header {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.5rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default TopSection;
