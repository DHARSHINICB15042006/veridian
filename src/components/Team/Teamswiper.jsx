import React, { useRef, useEffect, useState } from "react";

import Swiperstyles from "./Swiperstyles";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";
import { Box, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Teamswiper(props) {
  const { id,ourteam, data } = props;
  const theme = useTheme();
  const styles = Swiperstyles(theme);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null); 
  const [hidePrev, setHidePrev] = useState(false);
  const [hideNext, setHideNext] = useState(false);
  // eslint-disable-next-line react/prop-types
  const initialSlideIndex = data.findIndex((member) => member.id === 2);

  const updateNavigationVisibility = (activeIndex) => {
    // eslint-disable-next-line react/prop-types
    const activeId = data[activeIndex]?.id;
    setHidePrev(activeId === 1); 
    setHideNext(activeId === 3); 
  };

  useEffect(() => {
    if (swiperRef.current) {
      updateNavigationVisibility(initialSlideIndex);
    }
  }, [swiperRef, initialSlideIndex]);

  return (
    // eslint-disable-next-line react/prop-types
    <Box id={props.id} sx={styles.wholebox}>
      <Box sx={styles.swiperbox}>
        <Box sx={styles.ourteambox}>
          <Typography sx={styles.ourteamtxt}>Our Team</Typography>
        </Box>
        {!hidePrev && ( 
          <IconButton
            ref={prevRef}
            sx={styles.arrowButton1}
            className="custom-prev"
          >
            <ArrowBackIcon  />
          </IconButton>
        )}
        {!hideNext && (
          <IconButton
            ref={nextRef}
            sx={styles.arrowButton2}
            className="custom-next"
          >
            <ArrowForwardIcon />
          </IconButton>
        )}
        <Swiper
          spaceBetween={-310}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          className="mySwiper"
          initialSlide={initialSlideIndex}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            // Update navigation visibility on slide change
            updateNavigationVisibility(swiper.activeIndex);
          }}
        >
          {data.map((member) => (
            <SwiperSlide key={member.id}>
              <Box sx={{...styles.individualswiperbox,
                paddingRight:  member.id === 3 ? "4%":"0%",
                backgroundSize: member.id === 3 ? "94%" : "90%"
              }}>
                <Box sx={{...styles.contentbox,
                  marginLeft: member.id === 3 ? "6%":"7.5%",
                  marginTop: member.id === 3 ? "1.85%":"2%",
                }}>
                  <Box sx={{...styles.memberimg,

                  }}>
                    <img src={member.image} alt={member.name} />
                  </Box>
                  <Box sx={{...styles.descriptionbox,
                    width: member.id === 3 ? "63%" : "52%",
                    marginRight : member.id === 3 ? "4%" : "0%",

                  }}>
                    <Typography sx={styles.descriptiontxt}>
                      {member.description}{" "}
                    </Typography>
                    {member.description2 && (
    <Typography sx={styles.descriptiontxt}>{member.description2}</Typography>
  )}
                    

                    <Box
                      sx={{
                        ...styles.Teamhalfrectangle,
                        marginTop: member.id === 1 ? "10%" : 
                        member.id === 3 ?"3%":"20%",
                      }}
                    >
                      <Box
                        sx={{
                          ...styles.namebox,
                          marginTop:
                            member.id === 1
                              ? "3%"
                              : member.id === 3
                              ? "3%"
                              : "1.5%",
                        }}
                      >
                        <Typography sx={styles.nametxt}>
                          {member.name}
                        </Typography>
                        <Typography sx={styles.roletxt}>
                          {member.role}
                        </Typography>
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
