import Box, { BoxProps } from "@mui/material/Box";

interface ImgWebProps extends BoxProps {
  src: string;
  srcSet: [string, string];
}

const ImageWeb: React.FC<ImgWebProps> = ({ src, srcSet, sx, ...props }) => {
  return (
    <Box
      component={"img"}
      src={src}
      srcSet={`${srcSet[0]} 2x, ${srcSet[1]} 3x`}
      sx={{ display: "block", ...sx }}
      {...props}
    />
  );
};
export default ImageWeb;
