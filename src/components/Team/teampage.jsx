import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import teamstyles from "./teamstyles";
import { useTheme } from "@mui/material/styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Investmentpage from "../investment/investmentpage";
//import profileImage from "./assets/your-image.png"; // Replace with your image path


const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "40%",
        left: "10px",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        backgroundColor: "teal",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "20px",
        cursor: "pointer",
        zIndex: 2,
        
      }}
    >
      &#8592;
    </Box>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "40%",
        right: "10px",
        transform: "translateY(-50%)",
        width: "40px",
        height: "40px",
        backgroundColor: "teal",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "20px",
        cursor: "pointer",
        zIndex: 2,
        
      }}
    >
      &#8594;
    </Box>
  );
};

const data = [
  {
    id: 1,
    name: "Julian Jarvis",
    role: "Chairman, Founder and CEO",
    description:"Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience.",
    image: "profileImage",
  },
 
    {
      id: 2,
      name: "Julian",
      role: "Chairman, Founder and CEO",
      description:"Julian is an experienced lawyer,",
      image: "profileImage",
    },
 
      {
        id: 3,
        name: "Julian Jar",
        role: "Chairman, Founder and CEO",
        description:"Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience.",
        image: "profileImage",
      },
  // Add more team member data here
];

export default function TeamPage(props) {
  const { ourteam } = props;
   const theme = useTheme();
  const styles = teamstyles(theme);

  const settings = {
    initialSlide: 1,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Box sx={{ textAlign: "center", margin: "30px auto", maxWidth: "1400px",marginTop:"2%", }}>
      <Typography
        variant="h4"
        sx={{ marginBottom: 4, fontWeight: "bold", color: "#123456" }}
      >
        {ourteam}
      </Typography>
      <Slider {...settings}>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              ...styles.parallelogram,
           
            }}
          >
            
            {/* Image Section */}
            <Box
              component="img"
              src={item.image}
              alt={item.name}
              sx={{
                width: "270px",
                height: "auto",
                borderRadius: "8px",
                marginRight: "20px",
                border:'1px solid'
              }}
            />

            {/* Text Content */}
            <Box sx={{ flex: 1, textAlign: "justify" }}>
              <Typography variant="body1" sx={{ marginBottom: 2 ,}}>
                {item.description}
              </Typography>

              {/* Name and Role */}
              <Box
                sx={{
                  display: "inline-block",
                  backgroundColor: "teal",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Typography variant="body2">{item.role}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
     
    </Box>
  );
}
