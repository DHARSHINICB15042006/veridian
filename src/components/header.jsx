  import React, { useState } from 'react';
  import Logo from '../assets/icons/logo';
  import Styles from "./styles";
  import Grid2 from '@mui/material/Grid2';
  import { useTheme } from '@mui/material/styles';
  import Button from '@mui/material/Button';
  import MenuIcon from '../assets/icons/menu';



  export default function Header(props) {
    const{
      // eslint-disable-next-line react/prop-types
      home,abouttxt,team,invest,contact
    }=props;
    const theme = useTheme(); 
    const styles = Styles(theme);
    const [activeButton, setActiveButton] = useState('home');
    const[menuOpen,setMenuOpen]=useState(false)

    const handleButtonClick = (buttonName) => {
      setActiveButton(buttonName);
    };


    return (
      <>
      <Grid2 sx={styles.headerbox} container alignItems="center">
      <Grid2 sx={styles.logo} item> 
          <Logo/>
        </Grid2>  
        <Grid2 sx={styles.info}  
        item 
        xs={false} 
        sm={6} 
        md={6} 
        lg={7} 
        xl={8}
        >
        <Button onClick={() => handleButtonClick('home')}
              sx={{
                ...styles.buttontxt,
                ...(activeButton === 'home' ? styles.activeButton : styles.buttontxt),
              }}>{home}</Button>
        <Button onClick={() => handleButtonClick('about')}
              sx={{
                ...styles.buttontxt,
                ...(activeButton === 'about' ? styles.activeButton : styles.buttontxt),
              }}>{abouttxt}</Button>
        <Button onClick={() => handleButtonClick('team')}
              sx={{
                ...styles.buttontxt,
                ...(activeButton === 'team' ? styles.activeButton : styles.buttontxt),
              }}>{team}</Button>
        <Button onClick={() => handleButtonClick('invest')}
              sx={{
                ...styles.buttontxt,
                ...(activeButton === 'invest' ? styles.activeButton : styles.buttontxt),
              }}>{invest}</Button>
        <Button onClick={() => handleButtonClick('contact')}
              sx={{
                ...styles.buttontxt,
                ...(activeButton === 'contact' ? styles.activeButton : styles.buttontxt),
              }}>{contact}</Button>
        </Grid2> 
        <Grid2 sx={styles.menuIcon}
            item
            xs={2}>
            <Button onClick={() => setMenuOpen(!menuOpen)} sx={styles.menubtn}>
              <MenuIcon/>
            </Button>
          </Grid2>
      </Grid2>
    
      </>
    )
  }
