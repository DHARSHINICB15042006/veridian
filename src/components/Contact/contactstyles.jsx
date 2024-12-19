import bg from "../../assets/images/Mask group.png";

const homestyles = (theme) => ({
  wholebox: {
    display: "flex",
    justifyContent: "center",
    width: "97.7vw",
  },
  contactcontainer: {
    backgroundColor: theme.palette.primary.main,
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "88vw",
    height: "17em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
  },
  contactcontent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "20px",
  },
  contacttxt: {
    fontSize: "32px",
    fontWeight: 700,
    lineHeight: "38px",
    color: theme.palette.default.white,
    fontFamily: theme.typography.text.font2,
  },
  descriptioncontacttxt: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.default.white,
    letterSpacing: "0.7px",
  },
  mailbox: {
    display: "flex",
    alignItems: "center",
    // border:'1px solid',
    paddingTop: "14px",
    paddingBottom: "14px",
    paddingLeft: "6%",
    paddingRight: "0%",
    backgroundColor: theme.palette.primary.dark,
    gap: "15px",
    width: "19em",
  },
  mailtobox: {
    backgroundColor: theme.palette.secondary.a100,
    padding: "4px",
    paddingLeft: "10px",
    paddingRight: "8px",
  },
  mailtxt: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "16px",
    letterSpacing: "2px",
  },
  mailidtxt: {
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "0.5px",
    color: theme.palette.default.white,
  },
  arrowbox: {
    backgroundColor: theme.palette.secondary.a20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "3em",
    height: "3.25em",
  },
  mailandarrow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  helptxt: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "20px",
    color: theme.palette.default.white,
    letterSpacing: "0.5px",
  },
});
export default homestyles;
