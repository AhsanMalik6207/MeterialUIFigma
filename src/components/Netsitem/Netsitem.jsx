import * as React from 'react';
import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { ListItem, Typography,List, useMediaQuery, Container, Button } from '@mui/material';
import GROUP47 from './Group 47.png';
import GROUP52 from './Group 52.png';
import GROUP51 from './Group 51.png';
import GROUP50 from './Group 50.png';
import GROUP48 from './Group 48.png';
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { ButtonBase } from "@material-ui/core";
import LINE from './LINE.png';
import CONE from './CONE.png';
import BORDERLINES from './BORDERLINES.png';
import BTNS from './BTN.png'
import LINE2 from './LINE2.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './netsitem.css'
export default function Netsitem() {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
     
  const array = [
    {img:GROUP47},
    {img:GROUP52},
    {img:GROUP51},
    {img:GROUP50},
    {img:GROUP48}
  ]

  const matches = useMediaQuery('(min-width:700px)')
  console.log(matches)

  return (
    
    <Box pb={20} sx={{
      // backgroundColor: "#373030",
        background:`linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(5, 5, 29, 1) 8%)`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundBlendMode :"overlay"
        // opacity:0.15,
        // height:"100vh,"
    }}>
      <Container>
      <Grid container>
        <Grid xs={12} md={12} >
      <p  style={{
                    fontSize:"4em",
                    fontFamily:"Metal Mania",
                    fontStyle: "Regular",
                    fontWeight:400,
                    background:"linear-gradient(180deg, #FFDC1F 0%, #ED1515 100%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    textAlign:"center",
                }}>NETS ITEM</p>
                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        maxWidth:"900px",
                        margin:"auto",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>

      
          <Grid item xs={12} md={12}>

          <Slider {...settings} ref={sliderRef}>
              {array.map(({ img }) => (
                <div className="cards">
                  <div>
                    <img src={img} alt="" />
                  </div>
                </div>
              ))}
            </Slider>

          </Grid>
    {/* custom buttons for slider */}
        <Grid xs={12}  md={12} >
        <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
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
            className="buttons"
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
            className="buttons"
            onClick={() => sliderRef.current.slickNext()}
          >
            <ArrowForwardIos />
          </ButtonBase>
          </div>
        </Grid>

        <Grid xs={12} md={12} >

        <p  style={{
                    fontSize:"4em",
                    fontFamily:"Metal Mania",
                    fontStyle: "Regular",
                    fontWeight:400,
                    background:"linear-gradient(180deg, #FFDC1F 0%, #ED1515 100%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    textAlign:"center",
               
                    textTransform:"uppercase",
                }}>WHATS THETAN COIN?</p>

                    <Typography sx={{
                        fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        maxWidth:"900px",
                        margin:"auto",
                        fontWeight:200,
                        marginBottom:"1.5rem"
                    }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>

        </Grid>
        <Grid xs={12} md={12}>
        <img src={LINE} alt="" width={'100%'} />
        </Grid>
        <Grid xs={12} md={3}>
        <img src={CONE} alt="" width={'80%'} style={{marginTop:"-3rem"}}/>
        </Grid>
        <Grid xs={12} md={2}>
            <List sx={{color:"white",paddingLeft: !matches ? "134px": "0rem"}}>
              <ListItem>Special Events</ListItem>
              <ListItem>Battle Pass</ListItem>
              <ListItem>Ranking Rewards</ListItem>
              <ListItem>Quest</ListItem>
              <ListItem>Guild War</ListItem>
              <ListItem>Tournament</ListItem>
            </List>
          </Grid>
          <Grid xs={12} md={4} >
        <img src={BORDERLINES} alt="" style={{display: !matches ? 'none' : "block" }} />
        </Grid>
        <Grid xs={12} md={3}>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"120px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"120px"
                        }}>EXCHANGE</Typography>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"120px",marginTop:"40px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"90px"
                        }}>TRADE</Typography>
        <img src={BTNS} alt="" style={{ width:"60%", paddingLeft:"120px", marginTop:"95px"}}/>
        <Typography sx={{fontSize:"20px",
                        fontFamily:"'Roboto', sans-serif",
                        fontStyle:"normal",
                        color:"#FFFFFF",
                        textAlign:"center",
                        fontWeight:200,
                        marginTop:"-45px",
                        marginLeft:"130px"
                        }}>THETAN BOX</Typography>
        </Grid>
        <Grid xs={12} md={12}>
        <img src={LINE2} alt="" width={'100%'} />
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
}
