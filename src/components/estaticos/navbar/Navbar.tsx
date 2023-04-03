import { Box, AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { TokenState } from "../../../store/tokens/TokensReducer";
import { addToken } from "../../../store/tokens/Actions";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';

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

    if (token != "/") {
        navbarComponent = <Box sx={{ flexGrow: 1 }} >
            <AppBar className="vai" position="static" style={{ backgroundColor: "#0f2a00", height: "60px" }}>
                <Toolbar >
                    <Link to="/home">
                        <img src="https://i.imgur.com/HlD7DSn.png" width="50px"></img>
                    </Link>
                    <Typography className="espaco" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/categoria" className="text-decorator-none">
                            <Button className="cbt">Categoria</Button>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/produto" className='text-decorator-none'>
                            <Button className="cbt">Produtos</Button>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/sobrenos" className="text-decorator-none">
                            <Button className="cbt">sobre nós</Button>
                        </Link>
                    </Typography>

                    <Link to="/login" className="text-decorator-none">
                        <Typography variant="h6" color="inherit">
                            <Box mx={1} className="cursor" onClick={goLogout}>
                                <Button className="cbt">Logout</Button>
                            </Box>
                        </Typography>

                    </Link>

                    <Link to="/steps" className="text-decorator-none">
                        <Box className="shopCar" >
                            <ShoppingCartIcon style={{ color: "white" }} />
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