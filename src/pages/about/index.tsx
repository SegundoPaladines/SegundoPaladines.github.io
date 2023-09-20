import React from 'react';
import { Container, Avatar} from '@mui/material';
import { HeaderComponent, CertificatesList, Presentation, Skills } from '../../components/';
import { Fondo } from '../../components/fondo/index';

export const AboutPage: React.FC<{}> = () => {
  return (
    <Container  sx={{ 
        mt: 18,
    }}>

      <Fondo
        image="url('https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/637e4756-4866-405f-a6d1-e94645bee17f')" 
      />

      <HeaderComponent
        title='Segundo Paladines'
        description='Welcome to my Presentation Site'
        element={
          <Avatar
            alt="Remy Sharp"
            src="https://user-images.githubusercontent.com/99047308/268836484-20cb032a-828f-4276-9343-e0abe2bf497c.png"
            sx={{ width: 150, height: 150 }}
          />
        }
      />

      <div
        style = {{
          position:'relative',
          zIndex:2,
        }}
      >
        <Presentation />

      </div>

      <div 
        style={{
          backgroundColor:'rgba(81, 90, 90, 0.8)',
          position:'relative',
          paddingTop:70,
          marginTop:-60,
        }}
      >
        <Skills />

      </div>

      <div
         style = {{
          backgroundColor:'rgba(81, 90, 90, 0.8)',
          position:'relative',
        }}
      >
        <CertificatesList />
      </div>
        
    </Container>
  );
}