import { display, fontFamily, fontSize, fontWeight, height, lineHeight, maxWidth, padding, positions, textAlign, width } from '@mui/system';
import teamrectangle from '../../assets/images/Rectangle 20.svg';
// import bg from '../../assets/images/Rectangle 28.png'
import halfrectangle from '../../assets/images/halfrectangle.svg'

const Swiperstyles = (theme) => ({
  wholebox:{
    display:"flex",
    justifyContent:"center",
    width: "97.7vw",
   
    
  },
  swiperbox: {
    maxWidth:"88vw",
    height: "33em",
    backgroundColor: theme.palette.primary.lite,
    
  },

  individualswiperbox: {
    display: "flex",
    flexDirection: "column", 
    backgroundImage: `url(${teamrectangle})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "93%", 
    padding: "2%",
    marginTop: "3%",
    height: "20em",
   // border:"1px solid"
   
  },
  ourteambox:{
   width:"fit-content",
   mx:"auto",
   
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
    marginLeft:"8%",
   // marginTop:"2%"
  },
  descriptionbox: {
    width: "52%", 
    marginLeft:"-2%"
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
   
    zIndex:1
    
  },
  Teamhalfrectangle:{
    backgroundImage: `url(${halfrectangle})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "50%", 
    marginTop:"18%",
    marginLeft:"-6%",
    height:"18em",
    

  },
  namebox:{
      marginLeft:"5%",
      //border:"1px solid",
      width:"fit-content",
      // marginTop%"
      
  },
  nametxt:{
    fontSize:"18px",
    fontWeight:500,
    lineHeight:"22px",
    fontFamily:theme.typography.text.font2,
    color:theme.palette.default.white
  },
  roletxt:{
    fontSize:"14px",
    fontWeight:400,
    lineHeight:"20px",
    color:theme.palette.default.white
  },
  arrowButton1: {
    position: "absolute", 
    transform: "translateY(7em)",
    marginLeft:"7%",
    padding:"1%",
   
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
    marginRight:"7%",
    padding:"1%",
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
