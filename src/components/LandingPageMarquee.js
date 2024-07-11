import React from "react";
import Marquee from "react-fast-marquee";
import restaurantImage from "../assets/images/restaurants_image.svg";
import yachtImage from "../assets/images/yacht_image.svg";
import ballroomImage from "../assets/images/ballroom_image.svg";
import auditoriumImage from "../assets/images/auditorium_image.svg";
import museumImage from "../assets/images/museum_image.svg";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

const LandingPageMarquee = () => {
  const items = [
    { image: restaurantImage, text: "Restaurants" },
    { image: yachtImage, text: "Yacht" },
    { image: ballroomImage, text: "Ballroom" },
    { image: auditoriumImage, text: "Auditorium" },
    { image: museumImage, text: "Museum" },
  ];

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSm = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));

  const getImageStyle = () => {
    if (isXs) {
      return { width: "200px", height: "200px" };
    }
    if (isSm) {
      return { width: "200px", height: "200px" };
    }
    if (isMd) {
      return { width: "300px", height: "300px" };
    }
    if (isLg) {
      return { width: "300px", height: "400px" };
    }
    return { width: "300px", height: "400px" }; // Default for larger screens
  };

  return (
    <Marquee velocity={100}>
      {items.map((item, index) => (
        <div key={index} style={{ textAlign: "center", margin: 0, padding: 0 }}>
          <img src={item.image} alt={item.text} style={getImageStyle()} />
          <p>{item.text}</p>
        </div>
      ))}
    </Marquee>
  );
};

export default LandingPageMarquee;
