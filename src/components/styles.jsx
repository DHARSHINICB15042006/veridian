import background from '../assets/shapes/rectangle1';

const Styles = (theme) => ({
  headerbox: {
    position: "sticky",
    display: "flex",
    top: 0,
    width: "100%",
    borderBottom: "2px solid",
    color: theme.palette.line.line2,
    alignItems: "center",
    // zIndex: 100,
    backgroundColor: theme.palette.default.white,
  },
  logo: {
    marginLeft: "10%",
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",
    flexGrow: 0.7,
    display: {
      xs: "none",
      sm: "flex",
    },
  },
  buttontxt: {
    fontFamily: theme.typography.text.font1,
    textTransform: "capitalize",
    fontSize: "18px",
    fontWeight: 500,
    lineHeight: "22px",
    color: theme.palette.text.textsecondary,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "transparent",
      textDecoration: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "transparent !important",
    },
  },
  activeButton: {
    color: theme.palette.primary.main,
    textDecoration: "underline",
    textUnderlineOffset: "6px",
    pointerEvents: "none",
    textDecorationThickness: "3px",
    "&:active": {
      boxShadow: "none",
      backgroundColor: "transparent !important",
    },
  },
  menuIcon: {
    display: {
      xs: "block",
      sm: "none",
      md: "none",
      lg: "none",
    },
    marginLeft: "auto",
    alignItems: "center",
    marginRight: "10%",
  },
  menubtn: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "end",
    width: "auto",
  },
 
});
export default Styles;
