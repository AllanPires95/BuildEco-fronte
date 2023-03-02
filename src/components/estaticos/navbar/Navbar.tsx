import React from 'react'
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { Box } from '@mui/material';
function Navbar() {
    return (
        <>
            <AppBar position='static' style={{backgroundColor:"black"}} >
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }}>
                        <Typography variant="h5" color="inherit">
                            Build Eco
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                categorias
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar Categorias
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>


                </Toolbar>
            </AppBar>

        </>
    );
}
export default Navbar;