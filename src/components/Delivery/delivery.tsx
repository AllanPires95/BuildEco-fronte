import { MenuItem, Select, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";

export function Delivery() {
    return (
        <Box p={4} >
        <Typography>
            Selecione o método de transporte
        </Typography>
            <Select label="Selecione o método de transporte">
                <MenuItem value={10}>Correios</MenuItem>
                <MenuItem value={20}>Tranportadora JBX</MenuItem>
                <MenuItem value={30}>Zé Transportes</MenuItem>
            </Select>
        </Box>
    )

}