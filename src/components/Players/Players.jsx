import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ONE from './Rectangle 2.png'
import TWO from './Rectangle 3.png'
import THREE from './Rectangle 4.png'

function Players() {
    return (
        <>
            <Box sx={{
                background: "linear-gradient(180deg, #6ED559 0%, #2B5B29 100%)",
                padding: "1.4rem 0",

            }}>
                <Container>

                    <Grid container sx={{

                    }}>


                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{
                                    fontFamily: "'Roboto', sans-serif",
                                    fontSize: "14px",
                                    color: "#13101E",
                                    textAlign: "left",
                                    fontWeight: 700,


                                }}>$TEG Contract Address</Typography>

                                <div style={{
                                    width: "100%",
                                    background: "#75b76d",
                                    marginBottom: "0.5rem",
                                    padding: "0.1rem 0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignContent: "center"


                                }}>
                                    <Typography sx={{
                                        textAlign: "left",
                                        color: "#FFFFFF",
                                    }}>
                                        BEP20
                                    </Typography>
                                    <Typography sx={{
                                        borderRight: "1px solid white",
                                        // marginRight:"10rem"
                                    }}>

                                    </Typography>
                                    <Typography sx={{
                                        color: "#FFFFFF",
                                        marginRight: "10rem"
                                    }}>
                                        0*9FDDHGSFJHDKJHFHU6R
                                    </Typography>
                                </div>

                                <div style={{
                                    width: "100%",
                                    background: "#75b76d",
                                    marginBottom: "1.5rem",
                                    padding: "0.1rem 0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignContent: "center"
                                }}>
                                    <Typography sx={{
                                        textAlign: "left",
                                        color: "#FFFFFF",
                                    }}>
                                        BEP20
                                    </Typography>
                                    <Typography sx={{
                                        borderRight: "1px solid white",
                                        // marginRight:"10rem"
                                    }}>

                                    </Typography>

                                    <Typography sx={{
                                        color: "#FFFFFF",
                                        marginRight: "10rem"
                                    }}>
                                        0*9FDDHGSFJHDKJHFHU6R
                                    </Typography>

                                </div>

                                <Typography sx={{
                                    textAlign: "left",
                                    fontSize: "14px",
                                    fontWeight: 700

                                }}>$THC CONTRACT Adderss</Typography>
                                <div style={{
                                    width: "100%",
                                    background: "#639b5c",
                                    padding: "0.1rem 0",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignContent: "center"

                                }}>
                                    <Typography sx={{
                                        textAlign: "left",
                                        color: "#FFFFFF",
                                    }}>
                                        BEP20
                                    </Typography>
                                    <Typography sx={{
                                        borderRight: "1px solid white",
                                        // marginRight:"10rem"
                                    }}>

                                    </Typography>

                                    <Typography sx={{
                                        color: "#FFFFFF",
                                        marginRight: "10rem"
                                    }}>
                                        0*9FDDHGSFJHDKJHFHU6R
                                    </Typography>
                                </div>
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography sx={{
                                    fontSize: "34px",
                                    fontWeight: 900,
                                    textTransform: "uppercase",
                                    color: "#2F632C",
                                    textAlign: "center",
                                    marginBottom: "1.5rem"
                                }}>
                                    total players
                                </Typography>
                                <Box sx={{
                                    textAlign: "center"
                                }}>
                                    <span style={{
                                        background: "rgba(255, 255, 255, 0.1)",
                                        boxShadow: "0px 4px 4px rgba(18, 30, 16, 0.25)",
                                        padding: "0.5rem 0.5rem",
                                        color: "#FFFFFF",
                                        fontWeight: 900,
                                        fontSize: "48px",
                                        textAlign: "center",
                                        padding: "0.5rem 1.8rem"
                                    }}>
                                        2,670,683
                                    </span>
                                </Box>
                            </Box>


                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
    )
}
export default Players
