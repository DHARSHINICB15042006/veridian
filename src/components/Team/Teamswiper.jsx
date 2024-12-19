import React, { useRef, useEffect } from 'react';

import Swiperstyles from './Swiperstyles';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules'; 
import { Box, Typography,IconButton } from '@mui/material';
import { useTheme } from "@mui/material/styles";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function Teamswiper(props) {
  const{ourteam,data}=props;
    const theme = useTheme(); 
    const styles = Swiperstyles(theme);
    const prevRef = useRef(null); 
    const nextRef = useRef(null);
    const initialSlideIndex = data.findIndex((member) => member.id === 2);

  return (
    <Box sx={styles.wholebox}>
    <Box sx={styles.swiperbox}>
        <Box sx={styles.ourteambox}>
        <Typography sx={styles.ourteamtxt}>Our Team</Typography>
        </Box>
        <IconButton ref={prevRef} sx={styles.arrowButton1} className="custom-prev">
          <ArrowBackIosIcon sx={{marginLeft:"2px"}}/>
        </IconButton>
        <IconButton ref={nextRef} sx={styles.arrowButton2} className="custom-next">
          <ArrowForwardIosIcon />
        </IconButton>
      <Swiper
      spaceBetween={-250}
      navigation={{
        prevEl: prevRef.current, // Use custom previous button
        nextEl: nextRef.current, // Use custom next button
      }}
        modules={[Navigation]} 
        className="mySwiper"
        initialSlide={initialSlideIndex} 
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
      >
        
        {data.map((member) => (
          <SwiperSlide key={member.id}>
            <Box sx={styles.individualswiperbox}>
              
               <Box sx={styles.contentbox}>
                    <Box sx={styles.memberimg}>
                      <img src={member.image} alt={member.name}/>
                    </Box>   
                <Box sx={styles.descriptionbox}>
                  <Typography sx={styles.descriptiontxt}>{member.description} </Typography>
                
                  
                 <Box sx={styles.Teamhalfrectangle}>
                      <Box sx={styles.namebox}>
                        <Typography sx={styles.nametxt}>{member.name}</Typography>
                        <Typography sx={styles.roletxt}>{member.role}</Typography>
                        </Box>
                    </Box>
                    </Box>
              </Box> 
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
    </Box>
  );
}
