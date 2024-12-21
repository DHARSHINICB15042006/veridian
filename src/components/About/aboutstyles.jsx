import { border, display, height, maxHeight, maxWidth } from "@mui/system";
import aboutbg from "../../assets/images/AboutUsbg.svg";
const aboutstyles = (theme) => ({
  wholebox:{
    display:"flex",justifyContent:"center",maxWidth: "97.7vw",overflow: "hidden"

  },
      aboutus: {
        display: "flex",
        justifyContent: "center",
        flexDirection:'column',
        alignItems: "center",
        fontSize: "32px",
        fontWeight: 700,
        lineHeight: "38px",
        fontFamily: theme.typography.text.font2,
        color: theme.palette.secondary.a30,
        marginTop: "2%",
        height:"auto"
      },
      contentabout: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"center",
        gap: "20px",
        maxWidth:"88vw",
        marginTop: "5%",
        backgroundImage: `url(${aboutbg})`,
        backgroundSize : "cover",
        backgroundRepeat: "no-repeat",
       // height: "52em", 
        overflow: "hidden"

       // border:"1px solid"
      },
      logopara: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "2%",
        paddingTop: "4%",
        paddingBottom: "4%",
        maxWidth: "80%",
        backgroundColor: theme.palette.default.white,
        [theme.breakpoints.down(750)]: {
          flexDirection:"column",
          
        },
      },
      logoimg: {
        backgroundColor: theme.palette.secondary.a50,
        padding: "2%",
        paddingLeft: "10%",
        paddingRight: "10%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      logotxt: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        //fontFamily:theme.typography.text.font1,
        color: theme.palette.text.textsecondary,
        [theme.breakpoints.down(750)]: {
          paddingLeft:"5%"
          
        },
      },
      nooftext: {
        paddingRight: "20px",
        display: "flex",
        flexDirection:'column',
        gap: "16px",
       
      },
      individualgrid:{
        backgroundColor:'white',
        padding:'1.5%',
        paddingBottom:'0.5%',
        paddingLeft:'2%',
        [theme.breakpoints.down(750)]: {
          width: '100%', 
        },
        
        //border:"1px solid",
      
      },
      wholegrid:{
        maxWidth:'84%',
        marginLeft:'8%',
        //border:"1px solid"
      },
     individualcontent:{
       display: "flex",
       flexDirection:"column",
        gap: "16px" 
     },
      fouricons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10px', 
        height: 'auto', 
        maxHeight: '100%', 
      },
      
      headingtxt:{
        fontSize:'20px',
        fontWeight:500,
        lineHeight:'22px',
        color:theme.palette.secondary.a30,
        fontFamily:theme.typography.text.font2,
      },
      txtandicons:{
        width: "100%",
        display: "flex",
        [theme.breakpoints.down(750)]: {
          flexDirection:"column",
          
        },
      },
      gridpara:{
        fontSize:'14px',
        fontWeight:400,
        lineHeight:'25px',
        color:theme.palette.text.textsecondary
      },
    })
    export default aboutstyles;