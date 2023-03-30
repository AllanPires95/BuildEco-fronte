import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { Container } from "@mui/system";
import { Card, Stack } from "@mui/material";

export function Payment() {
    return (
        <Card
            sx={{
                margin: 2,
                padding: 2,
            }}
        >
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Stack
                    component="form"
                    sx={{
                        width: "50vw",
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        type="number"
                        label="Número do Cartão"
                        
                    />
                    <TextField label="Nome" />
                    <TextField label="Validade" />
                   <TextField type="number" label="CVV" />                
                </Stack>
            </Container>
        </Card>
    )
}