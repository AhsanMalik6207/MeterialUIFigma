import React from "react";
import { Grid, Button, Typography, IconButton, Box, useMediaQuery } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { RiInstagramFill } from 'react-icons/ri'
import { BsFacebook,  BsLinkedin } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'

import LEFT from './left-hand.png'
import RIGHT from './right-hand.png'
import LOGO from './logo.png'
import ONE from './bg2.png'


export default function Footer() {
  const imgstyleobj = {
    transform: "translate(-0%,-50%)",
    // display:{md:'block',xs:'none'},
  };
  const typo = {
    color: "#FFFFFF",
    marginTop: "15px",
    textAlign:"left"
  };
  const LogoContainer = {
    textAlign: "center",
    alignItems: "center",
    display: "flex",
  };
  const ListContainer = {};
  const matches = useMediaQuery('(min-width:600px)')

  return (

    <>

    <Box sx={{
                background:`linear-gradient( rgba(0.9, 0.6, 0.5, 0.8), rgba(0.9, 0.6, 0.5, 0.8) ),url(${ONE})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover"

    }}>
    <Grid container sx={{
      paddingBottom:"9rem"
    }}>
      <Grid item xs={6} md={6} sx={imgstyleobj}>
        <img src={LEFT} alt="img"  
          style={{width: !matches ? '80%' : "100%"}}
        
        />
      </Grid>
      <Grid item xs={6} md={6} sx={imgstyleobj}>
        <img src={RIGHT} alt="img" 
          style={{width: !matches ? '80%' : "100%"}}
        
        />
      </Grid>
      <Grid item xs={6} md={6} sx={LogoContainer}>
        <Box sx={{ margin: "0px auto", width: "50%" }}>
          <img alt="img" src={LOGO} style={{ margin: "0px auto" }} />
          <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
            LogoName Here
          </Typography>
          <Box sx={{ display: "flex",
          margin:"1rem 1rem" ,
          justifyContent: "space-evenly"
         }}>
            <RiInstagramFill style={{ color: "#FFFFFF" }} />
            <BsFacebook style={{ color: "#FFFFFF" }} />
            <BsLinkedin style={{ color: "#FFFFFF" }} />
            <FaTelegram style={{ color: "#FFFFFF" }} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} md={2} sx={ListContainer}>
        <Typography variant="h6" sx={typo}>
          Home
        </Typography>
        <Typography sx={typo}>Game</Typography>
        <Typography sx={typo}>NFT</Typography>
        <Typography sx={typo}>Roadmaps</Typography>
        <Typography sx={typo}>Team</Typography>
        <Typography sx={typo}>Partner</Typography>
      </Grid>
      <Grid item xs={6} md={2} sx={ListContainer}>
        <Typography sx={typo} variant="h6">
            Company
        </Typography>
        <Typography sx={typo}>About</Typography>
        <Typography sx={typo}>Terms and Condition</Typography>
        <Typography sx={typo}>Privacy Policy</Typography>
      </Grid>
      <Grid item xs={6} md={2} sx={ListContainer}>
        <Typography sx={typo} variant="h6">
            Plateform
            </Typography>
        <Typography sx={typo}>Support</Typography>
        <Typography sx={typo}>Blog</Typography>
        <Typography sx={typo}>Documents</Typography>
      </Grid>
    </Grid>
    </Box>

    <Box sx={{
      background:"#0E0C16",
      margin:"auto",
      padding:"2rem"
    }}>
        <Typography sx={{
          fontWeight:400,
          fontSize:"20px",
          color:"#FFFFFF",
          textAlign:"center",
        }}>
        Copyright © 2021 webname Limited
        </Typography>
    </Box>
    </>
    
  );
}