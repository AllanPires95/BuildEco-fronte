import React from 'react';
import './Home.css';
import { Box } from '@mui/material';
import { Grid, Typography, Button } from '@material-ui/core';


function Home() {
  return (
    <div className='banner'>
      <Grid className='fundo' container direction="row" justifyContent="center" alignItems='center' >
        <Grid alignItems='center' item xs={6}>
          <Box paddingX={20} paddingBottom="20px">
            <div className='nomes'>
              <Typography variant="h3" gutterBottom color='textPrimary' component="h3" align='center' style={{ fontWeight: "bold" }}>Bem vindo (a)!</Typography>
              <Typography variant="h5" gutterBottom color='textPrimary' component="h5" align='center' style={{ fontWeight: "bold" }}>Escreva aqui sua opiniões !</Typography>
            </div>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "black", color: "white" }}>Visualizar produto</Button>

          </Box>
        </Grid>
        <Grid item xs={6} className="Gridimg">
          <img className="img" src="https://images-ext-2.discordapp.net/external/8KZpnIEv3ngXOnG9soQQOmaPK6R7-txtzeBT0jMsDjk/https/i.imgur.com/qcgk1tC.png?width=425&height=427" alt="Logo Blog" width="400px" height="290px" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>



        </Grid>

      </Grid>
    </div>
  );
}


export default Home;
