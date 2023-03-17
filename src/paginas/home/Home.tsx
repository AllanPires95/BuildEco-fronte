import React from 'react';
import './Home.css';
import { Box } from '@mui/material';
import { Grid, Typography, Button } from '@material-ui/core';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const items = [
  <img className='img' src="https://i.imgur.com/vNE92qo.jpg" />,
  <img className='img' src="https://i.imgur.com/DICfkRn.jpeg" />,
  <img className='img' src="https://i.imgur.com/XFyiPYZ.jpeg" />,
  <img className='img' src="https://i.imgur.com/1P3mdAW.jpeg" />,
  
];


function Home() {
  return (

    <div>
      {/* <MyCarousel /> */}
      <Grid container>
        <img className="imgbanner" src="https://i.imgur.com/N4CTh7j.png" alt="banner" />
      </Grid>

      <Grid className='txt3' xs={12}>
        <Box  paddingTop="0px" style={{ backgroundColor: "white" }} height="370px">
          <Typography className="t1" >

            <h1>Confira os produtos mais procurados </h1>
            <AliceCarousel
              items={items}
              autoPlay
              autoPlayInterval={3000}
              infinite
              disableButtonsControls
            />



          </Typography>
        </Box>
      </Grid>

      <Grid xs={6} >
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
        <Box margin="80px" style={{ backgroundColor: "white" }} width="300px" height="300px">
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