export * from "./home";
export * from "./contact";
import bg from '../assets/images/Group 62.png'
import { Box } from "@mui/material";
import React from 'react'

const index = () => {
  return (
   <Box sx={{width:"100%",color:"red", background:`url(${bg})`

   }}>
   
   </Box>
  )
}

export default index