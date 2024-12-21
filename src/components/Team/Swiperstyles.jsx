import { display, fontFamily, fontSize, fontWeight, height, letterSpacing, lineHeight, maxWidth, padding, positions, textAlign, width } from '@mui/system';
import teamrectangle from '../../assets/images/Rectangle 20.svg';
// import bg from '../../assets/images/Rectangle 28.png'
import halfrectangle from '../../assets/images/halfrectangle.svg'
import zIndex from '@mui/material/styles/zIndex';

const Swiperstyles = (theme) => ({
  wholebox:{
    display:"flex",
    justifyContent:"center",
    width: "97.7vw",
    //border:"1px solid"
   
    
  },
  swiperbox: {
    maxWidth:"88vw",
    height: "33em",
    backgroundColor: theme.palette.primary.lite,
   
    
  },

    individualswiperbox: {
      backgroundImage: `url(${teamrectangle})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "90%", 
     paddingTop: "2%",
      marginTop: "3%",
    //  height: "20em",
    marginLeft:"3%"
    },
  ourteambox:{
   width:"fit-content",
   mx:"auto",
   marginTop:"20px"
   
  },
  ourteamtxt:{
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "38px",
  },
  contentbox: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: "100%", 
   // border:"1px solid",
    marginLeft:"7.5%",
    
  },
  descriptionbox: {
    width: "52%", 
    marginLeft:"1%",
    // display: "flex",
    // flexDirection: "column",
     gap:"22px"
  },
  descriptiontxt:{
    fontSize:"16px",
    fontWeight:400,
    lineHeight:"20.83px",
    color:theme.palette.text.texttertiary,
  },
  memberimg:{
    display:"flex",
    flexDirection:"row",
    zIndex:1,
    height:"20em",
   // border:"1px solid",
    marginTop:"2.5%"
    
  },
  Teamhalfrectangle:{
    backgroundImage: `url(${halfrectangle})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%", 
    marginTop:"20%",
    marginLeft:"-10%",
    height:"4em",
  
    paddingTop:"1px"
   // border:"1px solid",
    
   

  },
  namebox:{
      marginLeft:"7%",
     // border:"1px solid",
      width:"fit-content",
      
      
  },
  nametxt:{
    fontSize:"18px",
    fontWeight:500,
    lineHeight:"22px",
    fontFamily:theme.typography.text.font2,
    color:theme.palette.default.white,
    letterSpacing:"1px"
  },
  roletxt:{
    fontSize:"13px",
    fontWeight:400,
    lineHeight:"20px",
    color:theme.palette.default.white
  },
  arrowButton1: {
    position: "absolute", 
    transform: "translateY(7em)",
    marginLeft:"8%",
    padding:"1%",
   marginTop:"2%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: theme.palette.primary.dark, 
    color: theme.palette.common.white,
    zIndex: 2,
    "&.custom-prev": {
      left: "0",
    },
    "&.custom-next": {
      right: "0", 
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
   
  },
  arrowButton2: {
    position: "absolute", 
    transform: "translateY(7em)",
    marginRight:"8%",
    padding:"1%",
    marginTop:"2%",
    backgroundColor: theme.palette.primary.dark, 
    color: theme.palette.common.white,
    zIndex: 2,
    "&.custom-prev": {
      left: "0",
    },
    "&.custom-next": {
      right: "0", 
    },
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  
  },
  
 
  
});

export default Swiperstyles;
