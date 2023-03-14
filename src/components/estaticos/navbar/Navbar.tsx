import { Box, AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-toastify';
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }
    var navbarComponent;

    if(token !=""){
        navbarComponent = <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" >
            <Toolbar >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/home" className='text-decorator-none'>
                        <Button color="inherit">inicio</Button>
                    </Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/temas" className="text-decorator-none">
                        <Button color="inherit">temas</Button>
                    </Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/posts" className='text-decorator-none'>
                        <Button color="inherit">postagem</Button>
                    </Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/formularioCategoria" className='text-decorator-none'>
                        <Button color="inherit">cadastro Tema</Button>
                    </Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to='/' className='text-decorator-none'>
                        <Button color="inherit">Login</Button>
                    </Link>
                </Typography>
                <Link to="/Login" className="text-decorator-none">
                    <Box mx={1} className="cursor" onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            <Button color="inherit">Logout</Button>
                        </Typography>
                    </Box>
                </Link>
            </Toolbar>
        </AppBar>
    </Box>
    }
    return (
        <>
        {navbarComponent}
        </>
    );
}

export default Navbar;