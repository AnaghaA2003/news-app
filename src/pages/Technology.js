import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Technology() {
  const [news, setNews] = useState([]); // State to store news articles

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
          params: {
            token: '6b27b054e31d90827b9ed5785dfe50c9', // Replace with your actual GNews API key
            lang: 'en',
            topic: 'technology',
            max: 5, // Number of articles to fetch
          },
        });
        setNews(response.data.articles || []); // Ensure articles is always an array
      } catch (error) {
        console.error('Error fetching technology news:', error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NavigationBar />
      <h1 className="text-center" style={{ fontFamily: 'auto', borderBottom: '1px solid black' }}>
        <b>TECHNOLOGY</b>
      </h1>
      <Container>
        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index}>
              <Row>
                <Col xs={12} md={8}>
                  <img
                    src={article.image || '/img/news.jpg'}
                    style={{ borderRadius: '0.75rem' }}
                    height={'285px'}
                    width={'597px'}
                    alt={article.title}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <div className="info">
                    <p className="title">{article.title}</p>
                    <p>{article.description}</p>
                    
                Published on: {new Date(article.publishedAt).toLocaleDateString()}
              
                  </div>
                  <button
                    type="button"
                    className="action"
                    style={{ marginLeft: '150px' }}
                    onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                  >
                    Read More
                  </button>
                </Col>
              </Row>
              <br />
            </div>
          ))
        ) : (
          <p>Loading technology news...</p>
        )}
      </Container>
      <Footer />
    </div>
  );
}
