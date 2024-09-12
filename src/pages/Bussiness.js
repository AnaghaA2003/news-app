import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Bussiness() {
  const [news, setNews] = useState([]); // State to store business news articles

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

      <CardGroup style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
        {news.length > 0 ? (
          news.map((article, index) => (
            <Card key={index} style={{ margin: '10px', flex: '1 0 21%' }}>
              <Card.Img variant="top" src={article.image || '/img/politics.jpg'} alt={article.title} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
               
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Published on: {new Date(article.publishedAt).toLocaleDateString()}</small>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => window.open(article.url, '_blank', 'noopener,noreferrer')}
                  style={{ marginLeft: '10px' }}
                >
                  Read More
                </button>
              </Card.Footer>
            </Card>
          ))
        ) : (
          <p>Loading business news...</p>
        )}
      </CardGroup>

      <Footer />
    </div>
  );
}
