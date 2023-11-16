export interface SliderDTO {
  id: number;
  imageUrl: string;
  smallImageUrl: string | null;
  mediumImageUrl: string | null;
  logoImageUrl: string | null;
  type: string;
  buttonTitle: string | null;
  link: string | null;
  entityId: number | null;
  entityType: string | null;
}

export interface SliderImagesProps {
  images?: SliderDTO[];
}
export interface FetchSlidersResponseDTO {
  sliders: SliderDTO[];
}

export interface LogoSlideProps {
  logoUrl: string | null;
}
