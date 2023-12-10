import React from 'react';
import { Container, Avatar } from '@mui/material';
import { HeaderComponent, CertificatesList, Presentation, Skills } from '../../components/';
import { FondoAnimado,Fondo, NuvePalabras, Projects } from '../../components/';

export const AboutPage: React.FC<{}> = () => {

  return (
    <Container  sx={{ 
        mt: 18,
    }}>

      {/* Fondo de imagen estatica
        
      */}

      <FondoAnimado 
         url = 'https://github-production-user-asset-6210df.s3.amazonaws.com/99047308/269363398-1dc164d1-63dc-4381-bdfc-ae3096b45d06.mp4' 
         title='SEGUNDO PALADINES'
      />
      <Fondo
          image="url('https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/637e4756-4866-405f-a6d1-e94645bee17f')" 
        />
      <div
        style={{
          position:'absolute',
          top:'25%',
          width:'80%',
          left:0,
          marginLeft:'10%',
          marginRight:'10%',
        }}
      >
        <HeaderComponent
          title='Computer Systems Engineer'
          description='Web Developer'
          element={
            <Avatar
              alt="Segundo Paladines"
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
            paddingTop:70,
            marginTop:-60,
          }}
        >
          <NuvePalabras />

        </div>

        {/* Skills sin nuve de palabras
          <div 
            style={{
              backgroundColor:'rgba(81, 90, 90, 0.8)',
              position:'relative',
            }}
          >
            <Skills />

          </div>
        */}

        <div
          style={{
            position:'relative',
            backgroundColor:'rgba(81, 90, 90, 0.8)',
          }}
        >
          <Projects />
        </div>

        <div
          style = {{
            paddingTop:'2rem',
            backgroundColor:'rgba(81, 90, 90, 0.8)',
            position:'relative',
          }}
        >
          <CertificatesList />
        </div>
      </div>
        
    </Container>
  );
}