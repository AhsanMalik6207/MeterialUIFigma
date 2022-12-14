import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ROADMAP1 from './images/RoadMap1.png';
import HAND1 from './images/hand1.png';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import DEVELOPERIMG from './images/DEVELOPERIMG.png';
import One from './images/firstBox.png';
import Second from './images/secondBox.png';
import Third from './images/thirdBox.png';
import Four from './images/fourthBox.png';
import Five from './images/fivthBox.png';
import Six from './images/sixBox.png';
import Seven from './images/seventhBox.png';
import Eight from './images/eightBox.png';
import Nine from './images/nineBox.png';
import Ten from './images/tenBox.png';
import Eleven from './images/eleventhBox.png';
import Tweleve from './images/tewelveBox.png';
import Thirteen from './images/thirteenBox.png';
import Fourteen from './images/forteenBox.png';
import { Typography, useMediaQuery } from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './components/Netsitem/netsitem.css';
import { useRef } from 'react';
import { useEffect } from 'react';
export default function RoadMap() {
  const sliderRef = useRef(null);
  useEffect(()=>{
    console.log(sliderRef)
  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint:1424,
        settings:{
          slidesToScroll:1,
          slidesToShow:1,
          infinite:true,
          dots:true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]

  }
  const matches = useMediaQuery('(min-width:600px)')
  return (
    <Box pb={20} sx={{
      background: `linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundBlendMode: "overlay",
    }}>
      <Grid container>
        <Grid xs={12} md={12} >
          <p style={{
            fontSize: "4em",
            fontFamily: "Metal Mania",
            fontWeight: 400,
            background: "linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "left",
            textTransform: "uppercase",
          }}>ROADMAP</p>
        </Grid>
        <Grid xs={12} md={12} >
          <img src={ROADMAP1} alt="" style={{ width: !matches ? '40%' : "70%", padding: "2% 7%", marginLeft: "auto", marginRight: "auto" }} />
        </Grid>

        <Grid xs={12} md={6}>

          <Slider {...settings} ref={sliderRef}>
            <div className='cards'>

              <Typography sx={{
                fontSize: "12px",
                fontFamily: "'Roboto', sans-serif",
                fontStyle: "normal",
                color: "#FFFFFF",
                textAlign: "center",
                padding: "0 7rem",
                fontWeight: 200,
                marginBottom: "1.5rem"
              }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
            </div>
            <div>
              <Typography sx={{
                fontSize: "12px",
                fontFamily: "'Roboto', sans-serif",
                fontStyle: "normal",
                color: "#FFFFFF",
                textAlign: "center",
                padding: "0 7rem",
                fontWeight: 200,
                marginBottom: "1.5rem"
              }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

            </div>
          </Slider>
          <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          padding: "0 5rem",
        }}>
        <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons1"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ArrowBackIos />
          </ButtonBase>
          <ButtonBase
            style={{
              width: 35,
              height: 35,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
              cursor: "pointer",
            }}
            className="buttons1"
            onClick={() => sliderRef.current.slickNext()}
          >
            <ArrowForwardIos />
          </ButtonBase>
          </div>
        </Grid>
        <Grid xs={6} md={6}>
          <img src={HAND1} style={{ width: !matches ? '60%' : "70%", marginTop: "-7rem" }} />
        </Grid>

        <Grid xs={12} md={12} >
          <p style={{
            fontSize: "4em",
            fontFamily: "Metal Mania",
            fontStyle: "Regular",
            fontWeight: 400,
            background: "linear-gradient(180deg, #FFDC1F 0%, #ED1515 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}>DEVELOPER</p>
        </Grid>
        <Grid xs={12} md={12} sx={{ textAlign: "center" }}>
          <img src={DEVELOPERIMG} alt="" style={{ width: !matches ? '30%' : "20%" }} />
        </Grid>
        <Grid xs={12} md={12} >
          <p style={{
            fontSize: "4em",
            fontFamily: "Metal Mania",
            fontStyle: "Regular",
            fontWeight: 400,
            background: "linear-gradient(180deg, #FFDC1F 0%, #ED1515 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textAlign: "center",
          }}>INVESTOR & PARTNER</p>
        </Grid>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "0 5%" }} >
          <Box><img src={One} alt="" /></Box>
          <Box><img src={Second} alt="" /></Box>
          <Box><img src={Third} alt="" /></Box>
          <Box><img src={Four} alt="" /></Box>
          <Box><img src={Five} alt="" /></Box>
          <Box><img src={Six} alt="" /></Box>
          <Box><img src={Seven} alt="" /></Box>
          <Box><img src={Eight} alt="" /></Box>
          <Box><img src={Nine} alt="" /></Box>
          <Box><img src={Ten} alt="" /></Box>
          <Box><img src={Eleven} alt="" /></Box>
          <Box><img src={Tweleve} alt="" /></Box>
          <Box><img src={Thirteen} alt="" /></Box>
          <Box><img src={Fourteen} alt="" /></Box>
        </Box>
      </Grid>
    </Box>
  );
}
