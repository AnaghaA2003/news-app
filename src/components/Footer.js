import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div>
       <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">News Today</h2>
                    <p>Your reliable source for the latest news from around the world.</p>
                </div>

                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/world">World</a></li>
                        <li><a href="/politics">Politics</a></li>
                        <li><a href="/business">Business</a></li>
                        <li><a href="/technology">Technology</a></li>
                        <li><a href="/sports">Sports</a></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <p>Email: info@newstoday.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <p>Address: 123 News Avenue, Media City, NY</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 News Today. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  )
}
