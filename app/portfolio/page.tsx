'use client';

import './portfolio.css';
import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

const portfolioItems = [
  { title: 'Nature', image: '/portfolio/nature.jpg' },
  { title: 'Urban Life', image: '/portfolio/urban.jpg' },
  { title: 'Portraits', image: '/portfolio/portraits.jpg' },
  { title: 'Weddings', image: '/portfolio/wedding.jpg' },
  { title: 'Travel', image: '/portfolio/travel.jpg' },
  { title: 'Products', image: '/portfolio/products.jpg' },
];

export default function PortfolioPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <PageWrapper>
    <main className="portfolio-container">
      <h1 className="portfolio-heading">My Work</h1>
      <div className="portfolio-grid">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-card" onClick={() => setLightboxImage(item.image)}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <img src={lightboxImage} alt="Preview" />
          <span className="close-btn">&times;</span>
        </div>
      )}
    </main>
    </PageWrapper>
  );
}
