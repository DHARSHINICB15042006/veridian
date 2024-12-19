import React from 'react'
import { Box, Grid2, Typography } from "@mui/material";
import investmentstyles from "./investmentstyles";
import { useTheme } from "@mui/material/styles";

export default function Investmentpage(props) {
  const { head,data } = props;
  const theme = useTheme();
  const styles = investmentstyles(theme);
  return (
    <Box sx={styles.wholebox}>
    <Box sx={styles.investmentbox}>
      <Box sx={styles.investheadingbox}>
        <Typography sx={styles.investtxt}>
          {head}
        </Typography>
        </Box>
        <Grid2 sx={styles.wholegrid}>
          {data.map((item)=>(
            <Grid2 key={item.id} sx={styles.individualbox}>
               <Box sx={styles.imgbox}><item.image/></Box>
               <Box sx={styles.headingbox}><Typography sx={styles.headingtxt}> {item.heading}</Typography></Box>
               <Box sx={styles.descriptionbox}><Typography sx={styles.descriptiontxt}> {item.description1}</Typography>
               <Typography sx={{ ...styles.descriptiontxt, marginTop: "8px" }}> {item.description2}</Typography></Box>
            </Grid2>
          ))}
        </Grid2>
      
        </Box> 
    </Box>
  )
}
