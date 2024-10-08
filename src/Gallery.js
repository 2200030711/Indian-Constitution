import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB CSS
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBIcon,
} from 'mdb-react-ui-kit'; // Import the necessary MDB components

const Gallery = () => {
  const videos = [
    {
      id: 1,
      title: "The India’s Constitution",
      url: "https://youtu.be/sDstf8ockUo?si=ADO-hBFOZiW1Mle9",
      thumbnail: "https://assets.thehansindia.com/h-upload/2022/02/15/1277003-indian-constitution.webp",
      description: "Introduction of Indian Constitution"
    },
    {
      id: 2,
      title: "Article 15",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://st.adda247.com/https://www.adda247.com/jobs/wp-content/uploads/sites/15/2022/08/17141717/Article-15-of-Indian-Constitution-Right-to-Equality.png",
      description: "Article 15 is about women"
    },
    {
      id: 3,
      title: "Video Title 3",
      url: "https://www.youtube.com/watch?v=anotherVideoID",
      thumbnail: "https://img.youtube.com/vi/anotherVideoID/0.jpg",
      description: "Description of the third video."
    }
  ];

  return (
    <div className="gallery">
      {/* Carousel Section */}
      <MDBCarousel showControls showIndicators>
        <MDBCarouselItem className="active">
          <img
            src="https://cbpssubscriber.mygov.in/assets/uploads/juGajmc1gOVBUtt5?21"
            className="d-block w-100"
            alt="Sunset Over the City"
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <img
            src="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/09/202409171398798105.jpg"
            className="d-block w-100"
            alt="Canyon at Night"
          />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <img
            src="https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/08/202408141727527543.jpg"
            className="d-block w-100"
            alt="Cliff Above a Stormy Sea"
          />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>

      {/* Video Gallery Section */}
      <h2 className="gallery-heading">Explore the Videos</h2>
      <div className="video-gallery" style={styles.videoGallery}>
        {videos.map((video) => (
          <div className="video-container" style={styles.videoContainer} key={video.id}>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="video-thumbnail"
                style={styles.thumbnail}
              />
            </a>
            <h3 style={styles.videoTitle}>{video.title}</h3>
            <p style={styles.videoDescription}>{video.description}</p>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <div className="social-media">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="instagram" size="2x" className="me-3" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="facebook" size="2x" className="me-3" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="twitter" size="2x" className="me-3" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <MDBIcon fab icon="linkedin" size="2x" className="me-3" />
          </a>
        </div>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} My Gallery. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

// Inline styles for the component
const styles = {
  videoGallery: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '30px',
  },
  videoContainer: {
    margin: '10px',
    textAlign: 'center',
    width: '300px',
  },
  thumbnail: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  videoTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  },
  videoDescription: {
    fontSize: '14px',
    color: '#555',
  },
  footer: {
    marginTop: '50px',
    backgroundColor: '#333',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  footerText: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

export default Gallery;
