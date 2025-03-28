import React from 'react';
import '../style/home.css';

import {Container , Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experience from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle';


import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

const Home = () => {
  return (
    <>
     {/*================ hero section start ================= */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center" > 
                  <Subtitle subtitle={'Know Before You Go'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Travelling opens the door to creating {" "} <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro necessitatibus nemo modi dignissimos, odit culpa dolore, magni et dolorem itaque ipsam nostrum a excepturi maxime ipsum reiciendis deserunt praesentium quisquam!
                </p>

              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>

            <SearchBar/>

          </Row>
        </Container>
      </section>
      {/*================ hero section end ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we Serve</h5>
              <h2 className='services__title'>We offer our best Services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      {/*================ featured tour section start ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"}/>
              <h2 className="featured__tout-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*================ featured tour section end ================= */}


      {/*================ Experience section start ================= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>with our all experience <br /> we will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Nobis ex voluptatem recusandae laborum debitis.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="experience__img">
                <img src={experience} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*================ Experience section end ================= */}
    </>
  );
};

export default Home;
