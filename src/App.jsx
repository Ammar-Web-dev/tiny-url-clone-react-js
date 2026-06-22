import React, { useState } from 'react';
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShorten = (e) => {
    e.preventDefault();
    if (!longUrl.trim()) return;

    setIsLoading(true);

    // Simulate an API call to shorten the URL
    setTimeout(() => {
      // Generate a mock short code
      const mockShortCode = Math.random().toString(36).substring(2, 8);
      const newShortUrl = `https://tiny.ur/${mockShortCode}`;
      
      setShortUrl(newShortUrl);
      setIsLoading(false);
      setLongUrl(''); // Clear input
    }, 1000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Link copied to clipboard!'))
      .catch(err => console.error('Could not copy text: ', err));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1 className="logo">Tiny URL</h1>
          <nav>
            <a href="https://tinyurl.com/app/features/link-management">Features</a>
            <a href="https://tinyurl.com/app/pricing">Pricing</a>
            <a href="https://tinyurl.com/app/login" className="login-btn">Log in</a>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <section className="hero-section">
          <h2>Shorten Your <span className="highlight">Links</span> Instantly</h2>
          <p className="subtitle">Create concise, trackable links with our modern URL shortener.</p>
        </section>

        <section className="shortener-section">
          <form onSubmit={handleShorten} className="shortener-form">
            <div className="input-group">
              <input
                type="url"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
                placeholder="Paste your long URL here..."
                required
                className="url-input"
              />
              <button type="submit" className="shorten-btn" disabled={isLoading}>
                {isLoading ? 'Shortening...' : 'Shorten URL'}
              </button>
            </div>
          </form>

          {shortUrl && (
            <div className="result-container">
              <div className="result-box">
                <p className="result-label">Your shortened URL:</p>
                <div className="result-link-group">
                  <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="result-link">
                    {shortUrl}
                  </a>
                  <button onClick={() => copyToClipboard(shortUrl)} className="copy-btn">
                    Copy
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>By shortening a link, you agree to our <a href="https://tinyurl.com/app/terms">Terms of Service</a>, <a href="https://tinyurl.com/app/privacy-policy">Privacy Policy</a>, and <a href="https://tinyurl.com/app/cookies-policy">Cookie Policy</a>.</p>
        <p className="footer-copy">© 2026 SHRT - Modern URL Shortener</p>
      </footer>
    </div>
  );
}

export default App;