import React from 'react';
import { Container, Avatar } from '@mui/material'
import { HeaderComponent } from '../../components/';

export const AboutPage: React.FC <{}> = () => {
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
        </Container>
    );
}