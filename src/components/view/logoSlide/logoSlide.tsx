import { LogoSlideProps } from "../../../dto.types";
import { StyledImage } from "../swiperSlides/style";

const LogoSlide: React.FC<LogoSlideProps> = ({ logoUrl, ...props }) => {
  if (logoUrl === null) {
    return null;
  }

  return (
    <StyledImage
      className="logo-slide"
      src={logoUrl}
      alt="Logo Banner"
      {...props}
    />
  );
};

export default LogoSlide;
