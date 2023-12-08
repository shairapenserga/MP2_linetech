import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './carousel.css';

const Rating = ({ value }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < value) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }

  return <div>{stars}</div>;
};

const CarouselComponent = () => {
  const items = [
    {
      id: 1,
      
      title: 'Nicko Ante Vergara',
      rating: 4,
      caption: '"Amazing customer service. Thank you!"',
    },
    {
      id: 2,
      
      title: 'Badette Teodoro',
      rating: 3,
      caption: '"Great customer service 🙂 I was very satisfied. My JBL speaker is great too."',
    },
    {
      id: 3,
      
      title: 'Aldrin Bugia',
      rating: 5,
      caption: '"have amazing customer service. So hands on and so efficient!! Thank you for answering all may question..... godbless😇"',
    },
  ];

  return (
    <div className={styles.carouselWrapper}>
      <Carousel showThumbs={false} className={styles.carousel}>
        {items.map((item) => (
          <div key={item.id} className={styles.slide}>
            {/* <img src={item.imageUrl} alt={item.title} /> */}
            <p className={styles.legend}>{item.title}</p>
            <p className={styles.legend}>{item.caption}</p>
            <span className={styles.rating}>
              <Rating value={item.rating} />
            </span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;




