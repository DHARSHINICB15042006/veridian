import { border, padding, textAlign } from "@mui/system";
import bg from "../../assets/images/Group 62.png"

const homestyles = (theme) => ({
    wholebox:{display:"flex",justifyContent:"center", width: "97.7vw"},
    rec: {
        
        width:"90%",
        height:"34em",
        backgroundImage:`url(${bg})`,
        backgroundRepeat:"no-repeat",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        marginTop:"5%",
        backgroundSize:"cover",
        backgroundPosition:"center",   
      },
      investmanagementbox: {
       textAlign:"center",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.a100,
      },
      investext: {
        fontSize: "12px",
        fontFamily: theme.typography.text.font1,
        padding: "2px 10px",
        color: theme.palette.default.white,
        fontWeight: 800,
      },
      headingbox: {
        width: "65%",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
          width: "90%", // Adjust width on small screens
        },
      },
      heading: {
        fontSize: "48px",
        fontWeight: 700,
        fontFamily: theme.typography.text.font2,
        color: theme.palette.default.white,
        lineHeight: "60px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "32px", // Adjust font size on small screens
        },
        marginTop:'2%'
      },
      knowbox:{
         backgroundColor:theme.palette.primary.dark,
         textAlign:"center",
         padding:"15px 40px",
         borderRadius:"2px",
         marginTop:'2%'
         
      },
      knowmore: {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "20px",
        fontFamily: theme.typography.text.font1,
        color: theme.palette.default.white,
        [theme.breakpoints.down("sm")]: {
          fontSize: "14px",
        },
      },
    })
    export default homestyles;