import React from 'react';
import {Container, Button} from '@mui/material'

export const AboutPage: React.FC <{}> = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 9 }}>
            <br />
            <Button variant="contained" >Hola Mundo</Button>
        </Container>
    );
}