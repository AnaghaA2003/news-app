import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner for loading state

export default function Politics() {
  const [news, setNews] = useState([]); // State to store political news articles
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
          params: {
            token: '6b27b054e31d90827b9ed5785dfe50c9', // Replace with your actual GNews API key
            lang: 'en',
            topic: 'nation',
            max: 3, // Number of articles to fetch
          },
        });
        setNews(response.data.articles || []); // Ensure articles is always an array
      } catch (error) {
        console.error('Error fetching politics news:', error);
      } finally {
        setLoading(false); // Stop loading once news is fetched
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="section-header text-center mb-4">
        <h1 className="display-4"><b>POLITICS</b></h1>
      </div>

      <Container className="news-container">
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : news.length > 0 ? (
          news.map((article, index) => (
            <Row key={index} className="news-card mb-4">
              <Col xs={12} md={6} className="mb-3 mb-md-0">
                <img
                  src={article.image || '/img/politics.jpg'}
                  className="img-fluid rounded"
                  alt={article.title}
                />
              </Col>
              <Col xs={12} md={6}>
                <div className="news-info">
                  <h5 className="news-title">{article.title}</h5>
                  <p>{article.description}</p>
                  <small className="text-muted">
                    Published on: {new Date(article.publishedAt).toLocaleDateString()}
                  </small>
                  <div className="text-end mt-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          ))
        ) : (
          <p className="text-center">No politics news available at the moment.</p>
        )}
      </Container>

      <Footer />
    </div>
  );
}
