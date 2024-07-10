import React from "react";
import Marquee from "react-fast-marquee";
import restaurantImage from "../assets/images/restaurants_image.svg";
import yachtImage from "../assets/images/yacht_image.svg";
import ballroomImage from "../assets/images/ballroom_image.svg";
import auditoriumImage from "../assets/images/auditorium_image.svg";
import museumImage from "../assets/images/museum_image.svg";

const LandingPageMarquee = () => {
  const items = [
    { image: restaurantImage, text: "Restaurants" },
    { image: yachtImage, text: "Yacht" },
    { image: ballroomImage, text: "Ballroom" },
    { image: auditoriumImage, text: "Auditorium" },
    { image: museumImage, text: "Museum" },
  ];

  return (
    <Marquee velocity={25}>
      {items.map((item, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <img
            src={item.image}
            alt={item.text}
            style={{ width: "300px", height: "300px" }}
          />
          <p>{item.text}</p>
        </div>
      ))}
    </Marquee>
  );
};

export default LandingPageMarquee;
