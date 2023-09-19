import React from 'react';
import { Container, Avatar, Paper, Typography } from '@mui/material';
import { HeaderComponent, CertificatesList } from '../../components/';

export const AboutPage: React.FC<{}> = () => {
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
    <Paper elevation={24} sx={{
         background: "#1E8449",
    }}>
        <Typography fontSize={23} sx={{
            margin:2,
            padding:4,
        }}>
            I'm a Computer Systems Engineering student at the University of Nariño. 
            I enjoy software development and aspire to work for an important software enterprise.
        </Typography>
    </Paper>

    <CertificatesList />
    
    </Container>
  );
}