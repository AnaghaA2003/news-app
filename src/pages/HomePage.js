import React, { useEffect, useState } from 'react'
import './homePage.css'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function HomePage() {
  const [news, setNews] = useState([]); // State to store fetched news

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
        {/* <div className="card d-inline-block text-tight bg-dark mb-3 my-3 mx-2 px-2 py-3" style={{ width: "18rem",color:"white"}}>
          <img src="/img/news.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            Read More
            </a>
          </div>
        </div> */}

        {/* <div className="card  d-inline-block text-tight bg-dark mb-3 my-3 mx-2 px-2 py-3" style={{ width: "18rem",color:"white"}}>
          <img src="/img/news.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" className="btn btn-primary">
             Read More
            </a>
          </div>
        </div> */}
        {/* <div className="card d-inline-block text-tight bg-dark mb-3 my-3 mx-2 px-2 py-3" style={{ width: "18rem",color:"white"}}>
          <img src="/img/news.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            Read More
            </a>
          </div>
        </div> */}
        {/* <div className="card d-inline-block text-tight bg-dark mb-3 my-3 mx-2 px-2 py-3" style={{ width: "18rem",color:"white"}}>
          <img src="/img/news.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            Read More
            </a>
          </div>
        </div> */}
        {/* <div className="card d-inline-block text-tight bg-dark mb-3 my-3 mx-2 px-2 py-3" style={{ width: "18rem",color:"white"}}>
          <img src="/img/news.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            Read More
            </a>
          </div>
        </div> */}
        {/* <div className="card d-inline-block text-tight bg-dark mb-3 my-3 mx-2 px-2 py-3" style={{ width: "18rem",color:"white"}}>
          <img src="/img/news.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            Read More
            </a>
          </div>
        </div> */}
        {/* <div className="card d-inline-block text-tight bg-dark mb-3 my-3 mx-2 px-2 py-3" style={{ width: "18rem",color:"white"}}>
          <img src="/img/news.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </p>
            <a href="#" className="btn btn-primary">
            Read More
            </a>
          </div>
        </div> */}



        {/* {news.length > 0 ? (
          news.map((article, index) => (
            <div
            key={index}
            className="card d-inline-block text-tight bg-dark mb-3 my-3 mx-2 px-2 py-3"
            style={{ width: "18rem", color: "white" }}
          >
            <img src={article.image || '/img/news.jpg'} className="card-img-top" alt={article.title} />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.description}</p>
              <small className="text-muted">Published on: {new Date(article.publishedAt).toLocaleDateString()}</small>
              <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </div>
          
          ))
        ) : (
          <p>Loading latest news...</p> // Show a loading message while news is being fetched
        )} */}
          <CardGroup style={{ flexDirection: 'row' }}>
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
          <p>Loading latest news...</p>
        )}
      </CardGroup>
      </div>
      <Footer />
    </div>
  )
}
