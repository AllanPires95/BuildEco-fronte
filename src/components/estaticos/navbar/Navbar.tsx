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

    if (token != "") {
        navbarComponent = <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" className="img" style={{ backgroundColor: "#0f2a00", height: "90px" }}>
                <Toolbar >
                    <Link to="/home">
                        <img src="https://i.imgur.com/HlD7DSn.png" width="80px" className="p-30"></img>
                    </Link>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/categoria" className="text-decorator-none">
                            <Button variant="outlined">Categoria</Button>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/formulariocategoria" className="text-decorator-none">
                            <Button variant="outlined">Cadastro Categoria</Button>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/produto" className='text-decorator-none'>
                            <Button variant="outlined">Produtos</Button>
                        </Link>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/formularioproduto" className='text-decorator-none'>
                            <Button variant="outlined">Cadastro Produtos</Button>
                        </Link>
                    </Typography>
                    <Link to="/Login" className="text-decorator-none">
                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                <Button variant="outlined">Logout</Button>
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