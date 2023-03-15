import React from 'react';
import './Home.css';
import { Box } from '@mui/material';
import { Grid, Typography, Button } from '@material-ui/core';


function Home() {
  return (
    <div className='banner'>
      <Grid>
        <img src="https://i.imgur.com/pXysH1e.jpg" alt="banner" width="1342px" height="550px"/>
        </Grid>
        <Grid xs={12}>
        <Box paddingTop="0px" style={{backgroundColor:"white"}} width="1342px" height="255px">
          <Typography className="t1" >
                    Confira os produtos mais procurados 
          </Typography>
        </Box>
        </Grid>
        <Grid xs={6}>
        <Box margin="30px" style={{backgroundColor:"#0f2a00"}} width="300px" height="300px">
            <div className='txt'>
            <Typography >
              <h1 className="txt">Tijolo</h1>
              <h2 className='txt2'>ecológico</h2>
          </Typography>
              </div>
              </Box>
        </Grid>


    </div>
  );
}
export default Home;