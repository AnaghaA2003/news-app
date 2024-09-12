import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
// import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Politics() {
  const [news, setNews] = useState([]); // State to store political news articles

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
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NavigationBar />
      <h1 className='text-center' style={{ fontFamily: 'auto', borderBottom: '1px solid black' }}>
        <b>POLITICS</b>
      </h1>

      {/* {news.length > 0 ? (
        news.map((article, index) => (
          <Card key={index} className="bg-dark text-white" style={{ padding: '50px', margin: '50px' }}>
            <Card.Img src={article.image || '/img/politics.jpg'} height={"250px"} alt={article.title} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
                {article.description}
              </Card.Text>
              <Card.Text>
                Published on: {new Date(article.publishedAt).toLocaleDateString()}
              </Card.Text>
              <a
                href="#"
                className="btn btn-primary"
                style={{ width: '140px' }}
                onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
              >
                Read More
              </a>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Loading politics news...</p>
      )} */}
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
          <p>Loading politics news...</p>
        )}
      </Container>
      <Footer />
    </div>
  );
}
