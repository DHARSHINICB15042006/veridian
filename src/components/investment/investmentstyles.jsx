import { fontFamily, fontSize, fontWeight, height, lineHeight, maxWidth, padding } from "@mui/system";
import bg from "../../assets/images/Rectangle 28.png";
const investmentstyles = (theme) => ({
  wholebox: {
    display: "flex",
    justifyContent: "center",
    //border: "1px solid",
    width: "97.7vw",
  },
  investmentbox: {
    maxWidth:"88vw",
    height: "60em",
    backgroundColor: theme.palette.primary.lite,
    mx: "auto",
   // border: "1px solid",
  },
  investheadingbox: {
    //border:"1px solid",
    width: "fit-content",
    mx: "auto",
    marginTop: "7%",
  },

  investtxt: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "38px",
  },
  wholegrid: {
    display: "flex",
    gap: "2%",
    
    justifyContent: "center",
    alignItems: "center",
    height: "45em",
    marginTop:'2.5%'
  },
  individualbox: {
    height: "100%",
    width: "30%",
    backgroundColor:theme.palette.default.white,
    padding:"30px"
  },
  imgbox: {
    height: "32%",
    width:"fit-content",
    marginLeft:"2%",
  
  },
  headingbox: {
    
    marginTop:"25px",
    marginBottom:"25px",
  
  },
  descriptionbox: {
    flexGrow: 1,
    paddingRight:'17px',
    paddingLeft:'2px'
 
  },
  headingtxt:{
    fontSize:"20px",
    fontWeight:600,
    lineHeight:"22px",
    fontFamily:theme.typography.text.font2,
  },
  descriptiontxt:{
    fontSize:"14px",
    fontWeight:400,
    lineHeight:"22px",
    color:theme.palette.text.texttertiary,
    wordSpacing:"1.7px"
  }
});
export default investmentstyles;
