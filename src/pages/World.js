import React, { useEffect, useState } from 'react'
import NavigationBar from '../components/NavigationBar'
import './world.css'
import Footer from '../components/Footer'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function World() {
  const [news, setNews] = useState([]); // State to store fetched world news

  // Fetch world news from GNews API when the component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
          params: {
            token: '6b27b054e31d90827b9ed5785dfe50c9', // Replace with your GNews API key
            lang: 'en', // Language parameter
            topic: 'world', // Specify 'world' news
            max: 5, // Limit number of articles to 5 (or as many cards as you need)
          },
        });
        setNews(response.data.articles); // Set world news data
      } catch (error) {
        console.error('Error fetching the world news:', error);
      }
    };
    fetchNews();
  }, []);
  return (
    <div>


      <NavigationBar /><br></br>
      
      <div style={{ borderBottom: "2px solid black" }}></div>
      <Container >

        {news.length > 0 ? (
          news.map((article, index) => (
            <div key={index}>
              <Row style={{ borderBottom: "2px solid black" }}>
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
          <p>Loading world news...</p>
        )}
      </Container>

      <Footer />

    </div>
  )
}
