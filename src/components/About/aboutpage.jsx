import { Grid2, Typography } from "@mui/material";
import * as React from "react";
import aboutstyles from "./aboutstyles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Logo2 from "../../assets/icons/logo2";
import Teampage from "../Team/teampage";
import Teamswiper from "../Team/TeamSwiper";

export default function Aboutpage(props) {
  // eslint-disable-next-line react/prop-types
  const { aboutus, text1, text2, text3, info } = props;
  const theme = useTheme();
  const styles = aboutstyles(theme);

  return (
    <Box sx={styles.wholebox}>
        <Box sx={styles.contentabout}>
          <Typography sx={styles.aboutus}>{aboutus}</Typography>

          <Box sx={styles.logopara}>
            <Box sx={styles.logoimg}>
              <Logo2 />
            </Box>
            <Box sx={styles.nooftext}>
              <Typography sx={styles.logotxt}>{text1}</Typography>
              <Typography sx={styles.logotxt}>{text2}</Typography>
              <Typography sx={styles.logotxt}>{text3}</Typography>
            </Box>
          </Box>
          <Box>
            <Grid2 container spacing={2} sx={styles.wholegrid}>
              {info.map((item) => (
                <Grid2 key={item.id} sx={styles.individualgrid} size={6}>
                  <Box sx={{ display: "grid", gap: "16px" }}>
                    <Typography sx={styles.headingtxt}>
                      {item.heading}
                    </Typography>

                    <Box sx={{ width: "100%", display: "flex" }}>
                      <Typography sx={styles.gridpara}>{item.text} </Typography>

                      <Box sx={styles.fouricons}>
                        <item.icon />
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
          </Box>
       
           {/* <Teampage ourteam="Our Team"/>  */}
          
          {/* <Teamswiper/> */}
        </Box>
        </Box>
        
    
      
    
  );
}
