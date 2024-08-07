import React from 'react';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <h1>About Us</h1>
      <p>
        Welcome to My Market Place! We are dedicated to providing you with the best products and services.
        Our mission is to create a seamless shopping experience for our customers. Whether you're looking for the latest gadgets,
        fashion items, or home goods, we have something for everyone.
      </p>
      <p>
        Founded in 2024, My Market Place has quickly grown to become a trusted name in the online marketplace industry.
        Our team is passionate about finding the best deals and offering them to you at unbeatable prices.
      </p>
      <p>
        Thank you for choosing My Market Place. We look forward to serving you and making your shopping experience enjoyable and memorable.
      </p>
    </div>
  );
};

export default AboutPage;
