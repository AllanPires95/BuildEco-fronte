import React from 'react';
import './Home.css';
import { Box } from '@mui/material';
import { Grid, Typography, Button } from '@material-ui/core';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Carousel } from '@trendyol-js/react-carousel';




function Home() {
  return (

    <div>
      {/* <MyCarousel /> */}
      <Grid container>
        <img className="imgbanner" src="https://i.imgur.com/N4CTh7j.png" alt="banner" />
      </Grid>

      <Grid className='txt3' xs={12}>
        <Box paddingTop="0px" style={{ backgroundColor: "" }} height="370px">
          <Typography className="t1" >

            <h1>Confira os produtos mais procurados </h1>
            <Box>
            <Carousel  show={4} slide={3}>              
              <img src="https://i.imgur.com/vNE92qo.jpg" className='img' />
              <img src="https://i.imgur.com/DICfkRn.jpeg" className='img'/>
              <img src="https://i.imgur.com/XFyiPYZ.jpeg" className='img'/>
              <img src="https://i.imgur.com/1P3mdAW.jpeg" className='img'/>
              <img src="https://i.imgur.com/vNE92qo.jpg" className='img' />
              <img src="https://i.imgur.com/DICfkRn.jpeg" className='img'/>
              <img src="https://i.imgur.com/XFyiPYZ.jpeg" className='img'/>
              <img src="https://i.imgur.com/1P3mdAW.jpeg" className='img'/>                            
            </Carousel>
            </Box>


          </Typography>
        </Box>
      </Grid>

      <Grid xs={12} >
        <Box marginLeft="120px" style={{ backgroundColor: "#0f2a00" }} width="500px" height="500px">
          <div className='txt'>
            <Typography>
              <h1 className="txt2">Tijolo</h1>
              <h2 className='txt2'>ecológico</h2>
            </Typography>
          </div>
        </Box>
      </Grid>

      <Grid container>
        <Box className='Gridimg'>
          <img className="imgbanner" src="https://i.imgur.com/MPxG30p.jpg" alt="banner" />
        </Box>
      </Grid>

      <Grid xs={6}>
        <Box margin="80px" style={{ backgroundColor: "#0f2a00" }} width="300px" height="300px">
          <div className='txt'>
            <Typography >
              <h1 className="txt">Agregados</h1>
              <h2 className='txt2'>reciclados</h2>
            </Typography>
          </div>
        </Box>
      </Grid>

    </div>
  );
}
export default Home;