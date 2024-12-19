import React from "react";
import Header from "../components/header";
import Homepage from "../components/Home/homepage";
import Aboutpage from "../components/About/aboutpage";
import Box from "@mui/material/Box";
import Badge from "../assets/icons/badge";
import Initiative from "../assets/icons/initiative";
import Sustainability from "../assets/icons/sustainability";
import Integrity from "../assets/icons/integrity";
import { Grid2 } from "@mui/material";
import TeamSwiper from "../components/Team/Teamswiper.jsx";
import Investmentpage from "../components/investment/investmentpage";
import Image1 from '../assets/images/image1';
import Image2 from '../assets/images/image2';
import Image3 from '../assets/images/image3';
import Contactpage from "../components/Contact/Contactpage";
import Julianimage from '../assets/images/image 5.svg';
import GrahameJacksonimage from '../assets/images/GrahameJackson.svg';
import PeterMontegriffoimage from '../assets/images/Peter Montegriffo.svg'
export default function Home() {
    const info = [
        {
            id: 1,
            heading: "Excellence",
            text: "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
            icon: Badge,
        },
        {
            id: 2,
            heading: "Initiative",
            text: "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
            icon: Initiative,
        },
        {
            id: 3,
            heading: "Sustainability",
            text: "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
            icon: Sustainability,
        },
        {
            id: 4,
            heading: "Integrity",
            text: "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
            icon: Integrity,
        },
    ];
    const teamdata=[
        {
            id: 1,
            name: "Grahame Jackson",
            description: "Grahame Jackson is a Fellow of the Chartered Institute of a Taxation and a member of the Chartered Institute of Taxation's prestigious International Taxes Committee. Grahame has advised numerous international gaming companies in matters of taxation and is a regular adviser to other industries on matters of both domestic Gibraltar taxation and international taxation. He has written extensively on international information exchange mechanisms, the current international taxation reform in the context of the rule of law and British Overseas Territories and constitutional relationships between BOTs and the United Kingdom, and is the Head of the Tax Advisory Team and partner at Hassans.",
            image: GrahameJacksonimage,
          },
          {
            id: 2,
            name: "Julian",
            role: "Chairman, Founder and CEO",
            description: "Julian is an experienced lawyer, businessman and investor with over 25 years of start-up, private and public company experience. In the internet and iGaming industries – including America Online Inc., AOL Time Warner Inc., PartyGaming Plc and other companies. Julian has a focus on fast growth companies in emerging regulatory environments. Julian's current focus is as CEO and co-founder of Pragmatic Play, a leading multi-award winning supplier to the international iGaming and betting industries.",
            image: Julianimage, 
          },
          {
            id: 3,
            name: "Peter Montegriffo KC",
            description: "Peter Montegriffo KC has been closely involved in advising major financial services and e-commerce operators establishing a presence in Gibraltar and expanding their activities internationally. This has included working with investment groups and private client family offices.In his capacity as a Consultant at Hassans and member of the firm’s Corporate & Commercial team for over 35 years, Peter’s area of expertise is in Gibraltar and international commercial and private client matters. Peter has worked on a number of public listings on the London Stock Exchange. He continues to advise on restructuring, merger and consolidation exercises. He has also been involved in drafting numerous changes to Gibraltar’s legislation in trusts, financial services and gaming. Peter was Gibraltar’s Minister for Trade and Industry, with responsibility for economic development and financial services, between May 1996 and February 2000.  Peter was appointed KC in Gibraltar in June 2014.",
            image: PeterMontegriffoimage,
          },
    ]
    const investdata = [
        {
            id:1,
            image:Image1,
            heading:"Investment focus and strategy",
            description1:"Veridian focuses on companies across a number of different sectors, predominantly internet- based companies with long term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability. ",
            description2:"Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.",

        },
        {
            id:2,
            image:Image2,
            heading:"Portfolio",
            description1:"The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry. ",
            description2:"Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently deliver best in class services to its partners worldwide with a dedication to creating games that players love time and time again.",
            
        },
        {
            id:3,
            image:Image3,
            heading:"Corporate social responsibility",
            description1:"Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.",
            description2:"",
            
        },
        
    ]

    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", overflowX: "hidden" }}>
            <Header
                home="Home"
                abouttxt="About Us"
                team="Our Team"
                invest="Investment Approach"
                contact="Contact Us"
            />

            <Grid2 container direction="column" sx={{ flexGrow: 1 }}>
               
                    <Homepage
                        id="/"
                        investtop="INVESTMENT MANAGEMENT"
                        heading="Empowering Investments With Expertise and Strategy"
                        know="Know more"
                    />
               

               
                    <Aboutpage
                        aboutus="About Us"
                        text1="Veridian is an investment, management and development company based in Gibraltar. We create value in our investments by leveraging our own experience, using tried-and-true strategies and extensive industry expertise."
                        text2="We work with our business management team to develop and implement tailored strategies focused on strong products with powerful sales, to develop profit generating growth models. Value creation is fundamental to our goal and we develop our businesses with this in mind."
                        text3="Veridian's expertise is delivered with a responsible approach to our business, our team, our local community, and the environment."
                        info={info}
                    />
              

                <TeamSwiper
                ourteam="Our Team"
                data={teamdata}
                />
                <Investmentpage 
                head="Holistic Investment Approach"
                data={investdata}
                />
                <Contactpage 
                contactus="Contact Us"
                description="Have questions or need more information? Reach out to us at."
                mail="MAIL TO"
                mailid="info@veridian.com"
                help="'We're help to help!'"
                />
            </Grid2>
        </Box>
    );
}
