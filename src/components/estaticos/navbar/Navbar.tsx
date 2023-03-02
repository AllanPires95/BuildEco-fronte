import { Box, AppBar, Toolbar, IconButton, Button, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react"
import './Navbar.css'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" >
                    <Toolbar >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="login" className='text-decorator-none'>
                        <Button style={{ color: "white" }}>Inicio</Button>
                            </Link>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit">Categoria</Button>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="cadastrousuario" className='text-decorator-none'>
                                <Button style={{ color: "white" }}>cadastrar</Button>
                            </Link>
                        </Typography>


                        <Link to="login" className='text-decorator-none'>

                            <Button style={{ color: "white" }}>Logout</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
}
export default Navbar;