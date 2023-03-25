import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Grid } from '@material-ui/core';
import { IconButton } from '@mui/material';
import './Footer.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';


function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.success('Usuario Deslogado!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigate("/login");
    }

    var footercomponent
    if (token != "/") {
        footercomponent = <Grid container spacing={3} justifyContent="center" alignItems="flex-start">
            <Grid item md={3}>
                <img className="img" src="https://images-ext-2.discordapp.net/external/8KZpnIEv3ngXOnG9soQQOmaPK6R7-txtzeBT0jMsDjk/https/i.imgur.com/qcgk1tC.png?width=425&height=427" alt="Logotipo Build Eco" />
            </Grid>
            <Grid item md={6}>
                <Typography variant="h5" align="center" gutterBottom>Sobre nós</Typography>
                <Typography variant="body1" align="justify">Somos um e-commerce de produtos biodegradáveis para área de construção civil e temos como objetivo evitar e diminuir o impacto da construção civil no meio ambiente essa é uma das maiores motivações.</Typography>
            </Grid>
            <Grid item container md={3} className="icones">
                <Typography variant="h5" gutterBottom className='texto'>Siga-nos</Typography>
                <Grid>
                    <IconButton  href="https://www.facebook.com/generationbrasil/" target="_blank">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/generationbrasil/" target="_blank">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                        <LinkedInIcon />
                    </IconButton>
                </Grid>
            </Grid>
            </Grid>
    }
    return (
        <>
            {footercomponent}
        </>
    )
}

export default Footer;