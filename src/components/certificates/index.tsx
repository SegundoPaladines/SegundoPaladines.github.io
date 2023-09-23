import React, { useEffect, useState } from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { CardComponent } from '../../components/';

export const CertificatesList: React.FC<{}> = () => {
    
    const [listaCertificados, setCertificados] = useState<JSX.Element[]>([]);
    const [certificadoActual, setCertificadoActual] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const certificados = [
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/60c2d1cd-d36a-491d-9086-dd4cbb28eaf9",
          name: "FreeCodeCamp",
          description: "JavaScript Algorithms and Data Structures",
          url: "JavaScript Algorithms and Data Structures",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/581f9672-5ec7-4e67-a65e-7410e6b1d608",
          name: "FreeCodeCamp",
          description: "Responsive Web Design",
          url: "https://www.freecodecamp.org/certification/fcc18a4a533-42df-4d9a-be6e-e229231aa978/responsive-web-design",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/6a43e14b-1a92-4bb1-b772-fe1ea179b8a6",
          name: "Platzi",
          description: "Curso Profesional de Git y GitHub",
          url: "https://platzi.com/p/spaladines/curso/1557-git-github/diploma/detalle/",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/fa15bb0d-5d36-4bef-95e3-bb368ccc78f3",
          name: "Platzi",
          description: "Curso de Fundamentos de Python",
          url: "https://platzi.com/p/spaladines/curso/4227-python/diploma/detalle/",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/fc83ddcc-8e7a-4e04-b294-4ae09da6a849",
          name: "Fundación Carlos Slim",
          description: "Diplomado: Técnico en sistemas informáticos",
          url: "https://capacitateparaelempleo.org/verifica/c4919265-2d85-426c-a1d2-7e2d68151077/1fb008a3-e343-4055-8a6c-52b8b02c217f",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/4ce514bf-a3ad-4442-8829-9ff7eb524c9e",
          name: "Platzi",
          description: "Curso de Python: Comprehensions, Funciones y Manejo de Errores",
          url: "https://platzi.com/p/spaladines/curso/4260-python-funciones/diploma/detalle/",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/9b70174f-44bf-4214-8cc3-707f3395d8dd",
          name: "Platzi",
          description: "Curso de Introducción a la Terminal y Línea de Comandos",
          url: "https://platzi.com/p/spaladines/curso/2292-terminal/diploma/detalle/",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/564058ba-1f61-47ec-a996-def91548431f",
          name: "Ademass",
          description: "Curso de Git y GitHub",
          url: "https://campus-ademass.com/aut/534",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/09dd3794-90a1-4b7c-97e4-41867d5993f7",
          name: "Ademass",
          description: "Curso de HTML5",
          url: "https://campus-ademass.com/aut/532",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/c776d7d8-b48e-433e-9c51-70149f83814f",
          name: "Cisco",
          description: "Python Essentials 1",
          url: "https://www.credly.com/badges/4a4d0643-41f9-4fc8-8bbe-d741f5c37ce9/linked_in_profile",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/250fddc8-2dca-454b-bd21-463ba2e2a1ec",
          name: "Google Activate",
          description: "Curso de introducción al desarrollo web: HTML y CSS (1/2)",
          url: "https://skillshop.exceedlms.com/student/award/eqV6hhJyNJoWnGKMA9p8wX9t",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/cb0315c3-667a-4bae-a379-10f3a833259e",
          name: "Google Activate",
          description: "Curso de introducción al desarrollo web: HTML y CSS (2/2)",
          url: "https://skillshop.exceedlms.com/student/award/Kqnf3bXXGr3Q6ioe9EySzHUN",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/e2590ebc-26e4-4859-b69d-eafe3cd57ca3",
          name: "Google Activate",
          description: "Protege tu Negocio: Ciberseguridad en el Teletrabajo",
          url: "https://skillshop.exceedlms.com/student/award/bwqJpnNzGuYztHi9zLvWK6bs",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/a30d30e6-ba5c-46de-9327-52519a40722b",
          name: "Ademass",
          description: "Taller de CSS3",
          url: "https://campus-ademass.com/aut/533",
        },
        {
          image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/da908d78-39ca-479f-aebf-89a86e0c4606",
          name: "Fundación Carlos Slim",
          description: "Curso: Técnico en redes de datos",
          url: "https://capacitateparaelempleo.org/verifica/c4919265-2d85-426c-a1d2-7e2d68151077/ed955d7e-b865-4e8c-8834-7e7ed32d58c2",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/50caf2f1-1b7b-45b8-a09f-47fa286c90fa",
            name: "Udemy",
            description: "Curso: Universidad Desarrollo Web - FrontEnd Web Developer",
            url: "https://www.udemy.com/certificate/UC-919df5c6-70a0-475f-bc2c-c1830426d564/",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/ed4ae2e6-fcc9-4793-badd-32194068e473",
            name: "Udemy",
            description: "Curso: Universidad JavaScript - De Cero a Experto JavaScript",
            url: "https://www.udemy.com/certificate/UC-f12fdd36-242d-40e5-a48e-1c20db6c347d/",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/b2032400-2160-40bd-84a0-ce9bad7f25fd",
            name: "Udemy",
            description: "Curso: Universidad HTML - Aprende HTML desde Cero hasta Experto",
            url: "https://www.udemy.com/certificate/UC-1b23055d-d169-42ff-8748-f4fd1d940569/",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/45a8dd5a-6780-47af-80f1-a9d2aaad50f6",
            name: "Udemy",
            description: "Curso: Universidad Excel - Básico, Intermedio y Avanzado",
            url: "https://www.udemy.com/certificate/UC-64b501f4-e011-4f1d-a6e6-979e4431dc88/",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/32e02caf-9ce3-4130-84e7-94041f256b8a",
            name: "Google Activate",
            description: "Cloud Computing",
            url: "https://skillshop.exceedlms.com/student/award/keVqJBH8642is1urqfTkdoqP",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/ff3b923d-b3ec-4dab-bdf9-d1d0518d2703",
            name: "Ademass",
            description: "Curso de ThreeJS",
            url: "https://campus-ademass.com/aut/2082",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/918258b8-e0a6-4bfa-82a8-73360527f77c",
            name: "Ademass",
            description: "Curso de GraphQL",
            url: "https://campus-ademass.com/aut/2081",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/a1eeddb2-69c9-4fca-807f-a787be9315bb",
            name: "Platzi",
            description: "Curso de Matemáticas para Data Science: Estadística Descriptiva",
            url: "https://platzi.com/p/spaladines/curso/2353-estadistica-descriptiva/diploma/detalle/",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/2775b45b-93ad-45f6-bd9a-001821877231",
            name: "Platzi",
            description: "Curso de Funciones Matemáticas para Data Science e Inteligencia Artificial",
            url: "https://platzi.com/p/spaladines/curso/2701-funciones-matematicas/diploma/detalle/",
        },
        {
            image: "https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/f43c5054-6abd-423f-bd8a-666bb7915bd4",
            name: "Platzi",
            description: "Curso de Entorno de Trabajo para Ciencia de Datos con Jupyter Notebooks y Anaconda",
            url: "https://platzi.com/p/spaladines/curso/2434-jupyter-notebook/diploma/detalle/",
        },
    ];

    useEffect(() => {
    const intervalo = setInterval(() => {
        if (certificadoActual < certificados.length) {
        const certificado = certificados[certificadoActual];
        const cardElement = (
            <Grid item xs={20} sm={8} md={5} lg={4} xl={4} key={certificadoActual}>
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
                  src="https://github.com/SegundoPaladines/SegundoPaladines.github.io/assets/99047308/62791109-53ed-40ff-8f1d-1e2825d5e38f"
                  alt='CodeIcon'
                  style={{
                    width:90,
                    height:90,
                    marginRight:-5,
                    marginTop:-30,
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='h5'
                >
                  Certifications
                </Typography>
              </Grid>
            </Grid>
          <Grid>
          </Grid>
        </Box>
        <Box sx={{
          mt: 2,
        }}>
          <Grid container spacing={1} direction="row">
            {listaCertificados}
          </Grid>
        </Box>
      </div>

    </Container>
  );
}