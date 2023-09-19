import React from 'react';
import { Container, Avatar, Box, Grid, Typography } from '@mui/material';
import { HeaderComponent, CardComponent } from '../../components/';

export const AboutPage: React.FC <{}> = () => {

    const certificados = [];

    certificados.push({
        image:"url",
        name:"Platizi",
        description:"Curso 1",
        url: "url certificado",
    });

    certificados.push({
        image:"url",
        name:"Platizi",
        description:"Curso 2",
        url: "url certificado",
    });

    certificados.push({
        image:"url",
        name:"Platizi",
        description:"Curso 3",
        url: "url certificado",
    });

    return (
        <Container maxWidth="xl" sx={{ mt: 9 }}>
            <HeaderComponent 
                title='Segundo Paladines'
                description='Welcome to my Presentation Site'
                element={
                    <Avatar
                        alt="Remy Sharp"
                        src="https://user-images.githubusercontent.com/99047308/268836484-20cb032a-828f-4276-9343-e0abe2bf497c.png"
                        sx={{ width: 250, height: 250 }}
                    />
                }
            />
            
            <div>
                <Box sx={{
                    mt: 5,
                }}>
                    <Grid container 
                        direction="row"
                        sx={{
                            marginBottom:2
                        }}
                    >
                        <Typography 
                            variant='h4'
                            sx={{
                                borderBottom: "3px solid green"
                            }}
                        >
                            Certifictes
                        </Typography>
                    </Grid>
                    <Grid container spacing={1} direction="row">
                        {certificados.map((car) => (
                            <Grid item xs={4}>
                                <CardComponent
                                    key={car.url}
                                    image={car.image}
                                    name={car.name}
                                    description={car.description}
                                    url={car.url}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
            
        </Container>
    );
}