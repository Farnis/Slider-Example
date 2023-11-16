import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";

export const StyledSwiper = styled(Swiper)({
  background: "linear-gradient(to right, #282c34,#fff 50%,#282c34)",
  width: "100%",
  "& .swiper-pagination": {
    "@media screen and (min-width: 426px)": {
      width: 250,
      left: "85%",
      top: "95%",
    },
    "@media screen and (min-width: 768px)": {
      width: 250,
      left: "75%",
      top: "92%",
    },
    "@media screen and (min-width: 1024px)": {
      width: 250,
      left: "80%",
      top: "92%",
    },

    "&.swiper-pagination-bullet": {
      backgroundColor: "#9da0a1",
      textAlign: "center",
      lineHeight: "20px",
      fontSize: "12px",
      height: 10,
      width: 10,
      opacity: 1,
      right: 0,
    },

    "& .swiper-pagination-bullet-active": {
      backgroundColor: "#9da0a1",
      borderRadius: "20px",
      width: "40px",
    },
  },

  "& .swiper-button-prev": {
    left: 20,
  },

  "& .swiper-button-next": {
    left: 75,
  },

  "& .swiper-button-next, & .swiper-button-prev": {
    "&::after": {
      fontSize: 13,
      fontWeight: "bolder",
    },
    backgroundColor: "#eeeeee",
    borderRadius: 40,
    color: "#5d6e7f",
    padding: 2,
    top: "96%",
    height: 30,
    width: 30,

    "@media screen and (max-width: 425px)": {
      display: "none",
    },
    "@media screen and (min-width: 768px)": {
      top: "94%",
    },
  },
});

export const StyledSwiperSlide = styled(SwiperSlide)({
  "& img": {
    objectFit: "cover",
    display: "block",
    width: " 100%",
    height: "auto",
  },
});

export const StyledImage = styled("img")({
  "&.logo-slide": {
    position: "absolute",
    display: "none",
    right: " 5%",
    height: 100,
    width: 100,
    bottom: 0,

    "@media screen and (max-width: 425px)": {
      "&.logo-slide": {
        display: "block",
      },
    },
  },
});
