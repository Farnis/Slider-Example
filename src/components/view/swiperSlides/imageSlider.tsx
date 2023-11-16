import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ImageWeb from "../../common/imgWeb";
import { SliderDTO, SliderImagesProps } from "../../../dto.types";
import { StyledSwiper, StyledSwiperSlide } from "./style";
import LogoSlide from "../logoSlide/logoSlide";

const ImageSlider: React.FC<SliderImagesProps> = ({ images }) => {
  const uniqueUrls = new Set<string>();

  return (
    <>
      <StyledSwiper
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={50}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {images
          ?.filter((item: SliderDTO) => {
            if (!uniqueUrls.has(item.imageUrl)) {
              uniqueUrls.add(item.imageUrl);
              return true;
            }
            return false;
          })
          .map((item: SliderDTO) => {
            const mediumSize = item.mediumImageUrl ?? item.imageUrl;
            const smallSize = item.smallImageUrl ?? item.imageUrl;
            return (
              <StyledSwiperSlide key={item.id}>
                <ImageWeb
                  src={item.imageUrl}
                  srcSet={[mediumSize, smallSize]}
                />
                <LogoSlide logoUrl={`${item?.logoImageUrl}`} />
              </StyledSwiperSlide>
            );
          })}
      </StyledSwiper>
    </>
  );
};
export default ImageSlider;
