import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from "../../store/tokens/Actions";
import { toast } from 'react-toastify';

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome:'',
            usuario: '',
            senha: '',
            token: '',
            foto: ''
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {

            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }

            useEffect(()=>{
                if(token != ''){
                    dispatch(addToken(token));
                    navigate('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
            try{
                await login(`/usuarios/logar`, userLogin, setToken)
                toast.success('Usuário logado com sucesso!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }catch(error){
                toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                    });
            }
        }
    return (
        //container principal
     
            
        
        <Grid container  direction='row' justifyContent='center' alignItems='center' style={{
            backgroundImage: 'url(https://i.imgur.com/fPtswZI.jpg)',
            backgroundRepeat: "no-repeat", width: "100%", minHeight: "115vh", backgroundSize: "cover", background: "cover", backgroundPosition: "center"
        }}>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20} >
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component="h3" align="center" className='texto1'>Entrar</Typography>
                        <TextField  className='campo' value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField className='campo' value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box marginTop={2} textAlign="center">                         

                                <Button className='botao' type="submit" variant="contained" style={{color:"white"}} >
                                    Logar
                                </Button>
                    
                        </Box>
                    </form>
                    <Grid>
                    <Box display='flex' justifyContent="center" marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center" >
                                Ainda não tem uma conta?
                            </Typography>

                        </Box>
                        <Link to="/cadastrousuario">
                            <Typography variant="subtitle1" gutterBottom align="center" className='texto1' >
                                cadastre-se
                            </Typography>
                        </Link>
                    </Box>
                    </Grid>
                </Box>
            </Grid>
            
        </Grid>
        
    );

}
export default Login;