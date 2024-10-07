import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

export default function Technology() {
  const [news, setNews] = useState([]); // State to store news articles
  const [loading, setLoading] = useState(true); // Loading state

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
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NavigationBar />

      {/* Header Section */}
      <div className="section-header text-center mb-4">
        <h1 className="display-4"><b>TECHNOLOGY</b></h1>
      </div>

      <Container>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        ) : news.length > 0 ? (
          news.map((article, index) => (
            <Row key={index} className="news-card mb-4 align-items-center">
              <Col xs={12} md={5} className="mb-3 mb-md-0">
                <img
                  src={article.image || '/img/news.jpg'}
                  className="img-fluid rounded shadow-sm"
                  alt={article.title}
                />
              </Col>
              <Col xs={12} md={7}>
                <div className="news-info">
                  <h5 className="news-title">{article.title}</h5>
                  <p className="news-description">{article.description}</p>
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
          <p className="text-center">No technology news available at the moment.</p>
        )}
      </Container>

      <Footer />
    </div>
  );
}
