import { Typography } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import homestyles from './homestyles'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Arrowicon from '../../assets/icons/arrow';


export default function Homepage(props) {
  const{
    // eslint-disable-next-line react/prop-types
    investtop,heading,know
    
  }=props;
  const theme = useTheme(); 
  const styles = homestyles(theme);
  return (
    <Box sx={styles.wholebox}>
    <Box sx={styles.rec}>
      

       <Box sx={styles.investmanagementbox}>
        <Typography sx={styles.investext}>
        {investtop}
        </Typography>
       </Box>
       <Box sx={styles.headingbox}>
       <Typography sx={styles.heading}>
          {heading}
        </Typography>
       </Box>
        <Box sx={styles.knowbox}>
        <Typography sx={styles.knowmore}>
           {know}<Arrowicon/> 
         </Typography>
         
      </Box>
    </Box>
    </Box>
      
      
      
      
      
        
    
  )
}
