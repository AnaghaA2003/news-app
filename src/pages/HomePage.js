import React, { useEffect, useState } from 'react'
import './homePage.css'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner'; 

export default function HomePage() {
  const [news, setNews] = useState([]); // State to store fetched news
  const [loading, setLoading] = useState(true); // Loading state


  // Fetch news from GNews API when the component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(' https://gnews.io/api/v4/top-headlines?category=general&apikey=6b27b054e31d90827b9ed5785dfe50c9', {
          params: {
            token: '6b27b054e31d90827b9ed5785dfe50c9', // Replace with your GNews API key
            lang: 'en', // Language parameter
            max: 6, // Limit number of articles to 6
          },
        });
        setNews(response.data.articles); // Set news data
      } catch (error) {
        console.error('Error fetching the news:', error);
      }finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
    fetchNews();
  }, []);
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <NavigationBar />
      <h2 className='text-center' style={{ borderBottom: "1px solid black" }}>Latest<span className=' bg-danger' style={{ color: "white" }}>News</span></h2>

      <div className='content ' style={{ borderBottom: "1px solid black" }}>
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
      </div>
      <Footer />
    </div>
  )
}
