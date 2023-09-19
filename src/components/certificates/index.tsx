import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { CardComponent } from '../../components/';

export const CertificatesList: React.FC<{}> = () => {
    
    const [listaCertificados, setCertificados] = useState<JSX.Element[]>([]);
    const [certificadoActual, setCertificadoActual] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const certificados = [
        {
          image: "url",
          name: "Platzi",
          description: "Curso 1",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 3",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 2",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 1",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 3",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 2",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 1",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 3",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 2",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 1",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 3",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 2",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 1",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 3",
          url: "url certificado",
        },
        {
          image: "url",
          name: "Platzi",
          description: "Curso 2",
          url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 1",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 3",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 2",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 1",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 3",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 2",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 1",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 3",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 2",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 1",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 3",
            url: "url certificado",
        },
        {
            image: "url",
            name: "Platzi",
            description: "Curso 2",
            url: "url certificado",
        },
    ];

    useEffect(() => {
    const intervalo = setInterval(() => {
        if (certificadoActual < certificados.length) {
        const certificado = certificados[certificadoActual];
        const cardElement = (
            <Grid item xs={4} key={certificadoActual}>
            <CardComponent
                image={certificado.image}
                name={certificado.name}
                description={certificado.description}
                url={certificado.url}
            />
            </Grid>
        );
        setCertificados((prev) => [...prev, cardElement]);
        setCertificadoActual((prev) => prev + 1);
        } else {
        clearInterval(intervalo);
        }
    }, 200);
    return () => clearInterval(intervalo);
    }, [certificados, certificadoActual]);

  return (
    <Container maxWidth="xl" sx={{ mt: 5}}>
      <div>
        <Box sx={{
          mt: 2,
        }}>
          <Grid container
            direction="row"
            sx={{
              marginBottom: 2
            }}
          >
            <Typography
              variant='h5'
              sx={{
                borderBottom: "3px solid green"
              }}
            >
              Certificates
            </Typography>
          </Grid>
          <Grid container spacing={1} direction="row">
            {listaCertificados}
          </Grid>
        </Box>
      </div>

    </Container>
  );
}