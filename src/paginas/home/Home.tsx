import React from 'react';
import './Home.css';
import { Box } from '@mui/material';
import { Grid, Typography, Button } from '@material-ui/core';
import { Carousel } from '@trendyol-js/react-carousel';
import { Link } from 'react-router-dom';

function Home() {
  return (

    <div>
      <Grid container>
        <img className="imgbanner" src="https://i.imgur.com/N4CTh7j.png" alt="banner" />
      </Grid>

      <Grid className='txt3' xs={12}>
        <Box paddingTop="0px" height="300px">
          <Typography className="t1" >

            <h1>Confira os produtos mais procurados </h1>

            <Box >
              <Carousel show={4} slide={1} className="txt2">
                
                <img src="https://i.imgur.com/hgWSsu5.png" className='img' />
                
                <img src="https://i.imgur.com/ZWBgnhH.png" className='img' />

                <img src="https://i.imgur.com/d2KpdYI.png" className='img' />

                <img src="https://i.imgur.com/sGBudNJ.png" className='img' />

                <img src="https://i.imgur.com/hgWSsu5.png" className='img' />
                
                <img src="https://i.imgur.com/ZWBgnhH.png" className='img' />

                <img src="https://i.imgur.com/d2KpdYI.png" className='img' />

                <img src="https://i.imgur.com/sGBudNJ.png" className='img' />

              </Carousel>
            </Box>

          </Typography>
        </Box>
      </Grid>

      <Grid container justifyContent="center" alignContent='center'>
        <Grid xs={5} >
          <Box className='img2'>
            <Link to= '/produto '>
            <img src="https://i.imgur.com/QausXvO.png" alt="sobre o eco" className='img2' />
            </Link>
          </Box>
        </Grid>
        <Grid xs={5}>
          <Box className='txt'  width="500px" height="400px" >
          <img src="https://i.imgur.com/vReoSpO.png" alt="outro coisa" width= "650" height="400" />
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Box>
          <img className="imgbanner" src="https://i.imgur.com/MPxG30p.jpg" alt="banner" />
        </Box>
      </Grid>

      <Grid container xs={12} justifyContent='center' >
        <Grid xs={5} className="txt"  >
          vamos morre
        </Grid>
        <Grid xs={5} justifyContent="flex-end" >
          <Box className='txt' style={{ backgroundColor: "#0f2a00" }} width="500px" height="400px">
            <Typography >
              <Box>
                <h1>Agregados</h1>
                <h2>reciclados</h2>
              </Box>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;