import { Box, Container, Divider, Grid, Typography, List, ListItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './index.css';

export const NuvePalabras:React.FC<{}> = () => {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <Grid
          container
          direction="row"
          sx={{
            width: '100%',
            height: '100%',
            position: 'relative',
          }}
        >
          <Grid item xs={20} sm={20} md={5} lg={5} xl={5}>
            <div
              style={{
                marginTop:"30%"
              }}
            >
                <Grid
                  container
                  direction="row"
                  sx={{
                    borderBottom: '3px solid green',
                    marginBottom:4,
                  }}
                >
                  <Grid item>
                      <img 
                        className="img" 
                        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2J4NGM3YTdwdTBrbzB5Z2d0MXY2MDF2cjlwZHpodGk3Z2dtenU4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QssGEmpkyEOhBCb7e1/giphy.gif" 
                        alt="Skills"
                        style={{
                          marginTop:-10,
                          marginRight:8,
                        }}
                      />
                  </Grid>
                  <Grid item>
                    <Typography
                        variant='h5'
                    >
                        Skills
                    </Typography>
                  </Grid>
                </Grid>
            </div>
            <div
              style={{
                marginLeft:"5%"
              }}
            >
              <Typography>
                I know about the following tecnologies:
              </Typography>
              <List>
                <ListItem>
                  <Typography>
                    General programing languages: C, C++, C#, Java, Python and Prolog.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Frontend: React, Typescript, JavaScript, HTML5, CSS, CSS3, Bootstrap and Material UI.
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Backend: Node.js and PHP
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Frameworks: Laravel, TensorFlow and Keras
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Data Base Administration: PostgreSQL and MySql
                  </Typography>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Grid item xs={20} sm={20} md={7} lg={7} xl={7}>
            <iframe
              src="https://segundopaladines.github.io/NuvePalabras/"
              title="Contenido incrustado"
              style={{
                width: '100%',
                height: '40rem',
                border: 'none',
                transform: 'scale(1.2)',
                paddingRight:'5%'
              }}
              scrolling="no"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
