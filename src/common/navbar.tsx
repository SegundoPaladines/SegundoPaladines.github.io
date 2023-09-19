import React from "react";
import { AppBar, Box, Toolbar, Container, Grid, Button, Typography, Stack } from '@mui/material';

// construccion del menú bar
//las constantes que se importan deben tener nombre comenzado con mayusculas
export const NavBar: React.FC <{}> = () => {
    return (
        //contenedor del menú de navegacion
        /*Se trae el App bar, dentro va el toolbar, luego un contendeodor 
            y finalmente el grid que contiene items */
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
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
                                > Segundo Paladines </Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing= {3}>
                                    <Button variant="contained">About</Button>
                                    <Button variant="outlined">GitHub</Button>
                                    <Button variant="outlined">Linkedin</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>
    );
}