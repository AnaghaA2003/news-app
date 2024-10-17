import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Bussiness() {
  const [news, setNews] = useState([]); // State to store business news articles
  const [loading, setLoading] = useState(true); // Loading state


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
          params: {
            token: '6b27b054e31d90827b9ed5785dfe50c9', // Replace with your actual GNews API key
            lang: 'en',
            topic: 'business',
            max: 8, // Number of articles to fetch
          },
        });
        setNews(response.data.articles || []); // Ensure articles is always an array
      } catch (error) {
        console.error('Error fetching business news:', error);
      }finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NavigationBar />
      <h1 className='text-center' style={{ fontFamily: 'auto', borderBottom: '1px solid black' }}>
        <b>BUSINESS</b>
      </h1>

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
                  src={article.image || '/img/news.jpg'}
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
          <p className="text-center">No news available at the moment.</p>
        )}
      </Container>
      <Footer />
    </div>
  );
}
