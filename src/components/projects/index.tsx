import React from 'react';
import { Grid, Button, Typography, Box, Container } from '@mui/material'; 

export const Projects:React.FC<{}> = () =>{
    return (
        <Container sx={{ 
            marginTop:-5,
        }}>
            <div>
                <Box sx={{
                        mt: 5,
                }}>
                    <Grid container
                        direction="row"
                        sx={{
                        marginBottom: 2,
                        borderBottom: '3px solid green'
                        }}
                    >
                            <Grid item>
                                <img 
                                src="https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/a10de013-3fcd-49ed-a4db-120217b9faa7"
                                alt='CodeIcon'
                                style={{
                                    width:80,
                                    height:65,
                                    marginRight:-5,
                                    marginTop:-30,
                                }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography
                                variant='h5'
                                >
                                    Projects
                                </Typography>
                                
                            </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    mt: 2,
                }}>
                    <Grid container spacing={1} direction="row">
                        <Grid item>
                            <Button fullWidth
                                onClick={()=> {
                                    window.location.href='https://segundopaladines.github.io/explicacion_clases_python/';
                                }}
                            >React App: Conceptos Sobre Python</Button>
                        </Grid>
                        <Grid item>
                            <Button fullWidth
                                onClick={()=> {
                                    window.location.href='https://segundopaladines.github.io/ZombieKillerDeploy/';
                                }}
                            >Python Pygame - PyGBag: ZombieKiller</Button>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </Container>
    );
}