'use client';

import PageWrapper from '../components/PageWrapper';
import './about.css';

export default function AboutPage() {
  return (
    <PageWrapper>
      <main className="about-container">
        <div className="about-image">
          <img src="/about.jpg" alt="Photographer at work" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi, I’m <strong>Charles</strong>, a passionate photographer capturing life through the lens. I specialize in portraits, weddings, urban, and travel photography.
            <br /><br />
            With over 7 years of experience, I aim to tell visual stories that evoke emotion and preserve timeless memories. Whether it’s a quiet moment or a big celebration, I’m always ready to frame it beautifully.
          </p>
          <p>
            Let’s work together to create something unforgettable.
          </p>
        </div>
      </main>
    </PageWrapper>
  );
}
