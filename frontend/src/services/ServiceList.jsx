import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import CustomizationImg from "../assets/images/customization.png";

const servicesData =[
  {
    imgUrl: weatherImg,
    title: "calculate weather",
    desc: "Lorem ipsum  fugit praesentium itaque. Veniame!"
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum  fugit praesentium itaque. Veniame!"
  },
  {
    imgUrl: CustomizationImg,
    title: "customization",
    desc: "Lorem ipsum  fugit praesentium itaque. Veniame!"
  }
]

const ServiceList = () => {
  return (
    <>
    {
      servicesData.map((item,index)=> (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
