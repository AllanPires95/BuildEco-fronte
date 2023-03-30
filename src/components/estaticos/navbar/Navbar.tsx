import { Box, AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
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
                    
                    <Link to="/steps">
                        <img src="https://imgur.com/gv097ZI" width="50px"></img>
                    </Link>

                    <Link to="/Login" className="text-decorator-none">
                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                <Button className="cbt">Logout</Button>
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