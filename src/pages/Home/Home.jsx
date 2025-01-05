import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './styles.css';
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  


const Home = () => {

    const settings = {
        dots: false, // Disable navigation dots
        infinite: true, // Infinite loop of images
        speed: 500, // Speed of the sliding effect
        slidesToShow: 1, // Show 1 image at a time
        slidesToScroll: 1, // Scroll 1 image at a time
        prevArrow: <PrevArrow />, // Custom previous arrow
        nextArrow: <NextArrow />, // Custom next arrow
      };

    return(
        <div className='home'>
            {/* <section className='section first-section'>
                <div className="landing-section">
                    <div className="info">
                        <h1>NP TECH</h1>
                        <h2>Complete IT Solution</h2>
                        <p>We offer a variety of services to meet your needs, including internship opportunities, job opportunities, career counselling, and other IT services</p>
                    </div>
                    <div className="svg-container">
                        <img src="/img/svg/developer.svg" alt="Coding illustration" className="svg-image" width={500} />
                    </div>
                </div>
            </section> */}

            <section className="section first-section">
                <div className="landing-section">
                    {/* <div className="info">
                    <h1>NP TECH</h1>
                    <h2>Complete IT Solution</h2>
                    <p>
                        We offer a variety of services to meet your needs, including internship opportunities, job opportunities, career counselling, and other IT services.
                    </p>
                    </div> */}

                    {/* Sliding Image Window */}
                    <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                        <img src="/img/banner.png" alt="Image 1" className="slider-image" />
                        </div>
                        <div>
                        <img src="/img/internshipp.jpg" alt="Image 2" className="slider-image" />
                        </div>
                        <div>
                        <img src="/img/jop.jpg" alt="Image 3" className="slider-image" />
                        </div>
                        <div>
                        <img src="/img/counselling.jpg" alt="Image 4" className="slider-image" />
                        </div>
                    </Slider>
                    </div>
                </div>
            </section>


            <section className='section center'>
                <div className="landing-section">
                    <div className="info mid">
                        <h1>Affordable Practical Training</h1>
                        <p>We provide top-notch services at minimal charges, ensuring the best value for our clients. Our offerings include one-on-one mentoring, classroom training with hands-on live practical sessions, and reliable internet support to enhance the learning experience.</p>
                    </div>
                </div>
            </section>


            <section id="services" className="section">
                <div className="landing-section services-container">
                <h1>Our Services</h1>
                <div className="services-grid">
                    <Card
                    image="/img/internship.jpg"
                    title="Internship"
                    description="Gain hands-on experience through our structured internship programs tailored to enhance your skills and career prospects."
                    buttonText="Learn More"
                    link="/career"
                    />
                    <Card
                    image="/img/counselling.jpg"
                    title="Career Counselling"
                    description="Explore your career options with our expert guidance to make informed decisions and achieve your professional goals."
                    buttonText="Learn More"
                    link="/careercounselling"
                    />
                    <Card
                    image="/img/services.jpg"
                    title="Other Services"
                    description="We provide a wide range of additional services, including IT solutions, software development, and digital marketing."
                    buttonText="Learn More"
                    link="/multiservice"
                    />
                </div>
                </div>
            </section>


            {/* <section className='section'>
                <div className="landing-section">
                    <div className="info">
                        <h1>Career Growth</h1>
                        <p>We are committed to fostering career growth by providing valuable job and internship opportunities. Our goal is to equip individuals with the skills and experience needed to succeed in their chosen fields.</p>
                    </div>
                    <div className="svg-container">
                        <img src="/img/svg/product-launch.svg" alt="Coding illustration" className="svg-image" width={500} />
                    </div>
                </div>
            </section> */}

            <section className='section'>
                <div className="landing-section">
                    <div className="svg-container">
                        <img src="/img/support.png" alt="Coding illustration" className="svg-image" width={400}/>
                    </div>
                    <div className="info last-info">
                        <h1>Comprehensive Support</h1>
                        <p>We assist our customers with their tasks and challenges, providing support for practicals and project reports. We guide them step-by-step, teaching not just how to complete their work but also the underlying concepts to ensure a clear understanding.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

const Card = ({ image, title, description, link }) => (
    <NavLink to={link} className="card-link">
      <div className="card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </NavLink>
  );
  

export default Home;
