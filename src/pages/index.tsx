import React from 'react';
import ImageSlider from '../components/view/swiperSlides/imageSlider';
import { useFetchSliders } from '../services/services';
import { Box, CircularProgress, Typography } from '@mui/material';
import { myNote } from '../constants';

export const Home = () => {
  const { data: sliderList, isLoading } = useFetchSliders();

  return isLoading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center', pt: 50 }}>
      <CircularProgress size={100} />
    </Box>
  ) : (
    <main>
      <ImageSlider images={sliderList} />
      <section>
        <Typography
          sx={{
            p: 2,
            textAlign: 'left',
            color: '#eeeeee',
            fontSize: { xs: 14, md: 18 },
          }}
        >
          {myNote}
        </Typography>
      </section>
    </main>
  );
};
export default Home;
