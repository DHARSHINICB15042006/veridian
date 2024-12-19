import { Typography } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Contactstyles from './contactstyles'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Contactarrow from '../../assets/icons/Contactarrow';

export default function Contactpage(props) {
    const{contactus,description,mail,mailid,help}=props;
    
      const theme = useTheme(); 
      const styles = Contactstyles(theme);
  return (
    <Box sx={styles.wholebox}>
      <Box sx={styles.contactcontainer}>
               <Box sx={styles.contactcontent}>
                
                    <Typography sx={styles.contacttxt}>{contactus}</Typography>
                
                 
                    <Typography sx={styles.descriptioncontacttxt}>{description} </Typography>
                <Box sx={styles.mailandarrow}>
                 <Box sx={styles.mailbox}>
                    <Box sx={styles.mailtobox}><Typography sx={styles.mailtxt}>{mail}</Typography></Box>
                    <Typography  sx={styles.mailidtxt}>{mailid}</Typography>
                    
                 </Box>
                 <Box sx={styles.arrowbox}><Contactarrow/></Box>
                 </Box>
                <Typography sx={styles.helptxt}>{help}</Typography>
               </Box>
      </Box>
    </Box>
  )
}
