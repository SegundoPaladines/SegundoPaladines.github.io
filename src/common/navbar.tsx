import React from "react";
import { AppBar, Box, Toolbar, Container, Grid, Button, Typography, Stack } from '@mui/material';

// construccion del menú bar
//las constantes que se importan deben tener nombre comenzado con mayusculas
export const NavBar: React.FC <{}> = () => {
    const gitHub = () => {
        window.open('https://github.com/SegundoPaladines', '_blank');
    };
    const linkedin = () => {
        window.open('https://www.linkedin.com/in/segundo-paladines-ortiz-b60216257/', '_blank');
    };

    return (
        //contenedor del menú de navegacion
        /*Se trae el App bar, dentro va el toolbar, luego un contendeodor 
            y finalmente el grid que contiene items */
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth = "xl">
                        <Grid 
                            container 
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                         >
                            <Grid item>
                                <Typography
                                    fontSize={24}
                                > Web Developer </Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing= {3}>
                                    <Button variant="outlined" onClick={() => gitHub()}>GitHub</Button>
                                    <Button variant="outlined" onClick={() => linkedin()}>Linkedin</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}