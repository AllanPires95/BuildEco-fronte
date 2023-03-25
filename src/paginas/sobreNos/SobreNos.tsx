import React from 'react'
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './SobreNos.css';
function SobreNos() {
    return (
        <>
        <Grid className='body'>
       <Typography variant="h1"  align="center">
                    Sobre nós</Typography>
                    <br />
                    <br />
                    
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
            <Grid item md={6}>
                <img className="img" src="https://i.imgur.com/lAhm8Fu.jpeg" alt="Logotipo Build Eco" />
            </Grid>
            <Grid item md={5}>
                <Typography variant="body1" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, inventore! Saepe harum dignissimos quaerat possimus officiis. Magni tempora odit doloribus, et cum molestias excepturi numquam minus possimus obcaecati, dolores in.</Typography>
            </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
            <Grid item md={5}>
                <Typography variant="body1" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, inventore! Saepe harum dignissimos quaerat possimus officiis. Magni tempora odit doloribus, et cum molestias excepturi numquam minus possimus obcaecati, dolores in.</Typography>
            </Grid>
            <Grid item md={6}>
                <img className="img" src="https://i.imgur.com/OQRY7Z4.jpeg" alt="Logotipo Build Eco" />
            </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
            <Grid item md={6}>
                <img className="img" src="https://i.imgur.com/2GtCytd.png" alt="Logotipo Build Eco" />
            </Grid>
            <Grid item md={5}>
                <Typography variant="body1" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, inventore! Saepe harum dignissimos quaerat possimus officiis. Magni tempora odit doloribus, et cum molestias excepturi numquam minus possimus obcaecati, dolores in.</Typography>
            </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
            <Grid item md={5}>
                <Typography variant="body1" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, inventore! Saepe harum dignissimos quaerat possimus officiis. Magni tempora odit doloribus, et cum molestias excepturi numquam minus possimus obcaecati, dolores in.</Typography>
            </Grid>
            <Grid item md={6}>
                <img className="img" src="https://i.imgur.com/xCHDpav.jpeg" alt="Logotipo Build Eco" />
            </Grid>
        </Grid>
        <Grid container spacing={1} justifyContent="center" alignItems="center" >
            <Grid item md={6}>
                <img className="img" src="https://i.imgur.com/mQ4rawj.jpeg" alt="Logotipo Build Eco" />
            </Grid>
            <Grid item md={5}>
                <Typography variant="body1" align="justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, inventore! Saepe harum dignissimos quaerat possimus officiis. Magni tempora odit doloribus, et cum molestias excepturi numquam minus possimus obcaecati, dolores in.</Typography>
            </Grid>
        </Grid>
       
        </Grid>
        </>


    )
}

export default SobreNos
