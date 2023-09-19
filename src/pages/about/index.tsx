import React from 'react';
import {Container} from '@mui/material'
import { HeaderComponent } from '../../components/';

export const AboutPage: React.FC <{}> = () => {
    return (
        <Container maxWidth="xl" sx={{ mt: 9 }}>
            <HeaderComponent 
                title='Segundo Paladines'
                description='Welcome to my Presentation Site'
            />
        </Container>
    );
}