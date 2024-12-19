import { border, height, maxHeight, maxWidth } from "@mui/system";
import aboutbg from "../../assets/images/AboutUsbg.svg";
const aboutstyles = (theme) => ({
  wholebox:{
    display:"flex",justifyContent:"center",width: "97.7vw"
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
      
        height: "52em",
        
      },
      logopara: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
        padding: "2%",
        paddingTop: "4%",
        paddingBottom: "4%",
        width: "80%",
        
        backgroundColor: theme.palette.default.white,
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
      },
      nooftext: {
        paddingRight: "20px",
        display: "flex",
        flexDirection:'column',
        gap: "16px",
       
      },
      individualgrid:{
        backgroundColor:'white',
        width:'49%',
        padding:'1.5%',
        paddingBottom:'0.5%',
        paddingLeft:'2%'
        
      },
      wholegrid:{
       
        width:'85%',
        
        marginLeft:'8%'
      },
      fouricons:{
         transform: 'translateY(-25px)',
        
      },
      headingtxt:{
        fontSize:'20px',
        fontWeight:500,
        lineHeight:'22px',
        color:theme.palette.secondary.a30,
        fontFamily:theme.typography.text.font2,
      },
      gridpara:{
        fontSize:'14px',
        fontWeight:400,
        lineHeight:'25px',
        color:theme.palette.text.textsecondary
      },
    })
    export default aboutstyles;