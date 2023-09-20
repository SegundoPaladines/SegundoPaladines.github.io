import * as React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import './index.css'

export const Skills: React.FC <{}> = () => {
    return (
        <Container>
            <Box sx={{
              paddingTop: 8,
              marginTop:-2,
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
                    src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif"
                    alt='CodeIcon'
                    style={{
                      width:40,
                      height:40,
                      marginRight:20,
                      marginTop:-5,
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
            <Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              margin:5,
            }}
          >
            <Typography 
              variant='h6'
              sx={{
                marginBottom:2,
              }}
            >General Languages:</Typography>
            <Grid 
              container
              direction="row"
              spacing={4}
            >
              <Grid item>
                <img 
                  className='lenguaje'
                  src=" https://img.shields.io/badge/C%20-%232370ED.svg?style=for-the-badge&logo=c&logoColor=white" 
                  alt="" 
                />
              </Grid>

              <Grid item>
                <img
                  className='lenguaje'
                  src=" https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" 
                  alt="" 
                /> 
              </Grid>

              <Grid item>
                <img
                  className='lenguaje'
                  src=" https://img.shields.io/badge/C++%20-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white" 
                  alt="" 
                />              
              </Grid>

              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" 
                  alt="" 
                /> 
              </Grid>

              <Grid item>
                <img
                className='lenguaje'
                src="https://img.shields.io/badge/Python%20-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white" 
                alt="" 
              />
              </Grid>

              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Prolog-8A2BE2.svg?style=for-the-badge" 
                  alt="" 
                />
              </Grid>

            </Grid>
          </Box>

          <Box
            sx={{
              margin:5,
            }}
          >
            <Typography
              variant='h6'
              sx={{
                marginBottom: 2,
              }}
            >
              FrontEnd:
            </Typography>
            <Grid
              container
              direction="row"
              spacing={4}
            >
              <Grid item>
                  {/* React */}
                  <img 
                    className='lenguaje'
                    src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" 
                    alt="" 
                  />
              </Grid>

              <Grid item>
                {/* TypeScript */}
                <img 
                  className='lenguaje'
                  src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" 
                  alt="" 
                />
              </Grid>

              {/* HTML5 */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/HTML5%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* CSS */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* CSS3 */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Bootstrap */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Materia UI */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* JavaScript */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                  alt=""
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              margin:5,
            }}
          >
            <Typography
              variant='h6'
              sx={{
                marginBottom: 2,
              }}
            >
              BackEnd:
            </Typography>
            <Grid
              container
              direction="row"
              spacing={4}
            >
              {/* Node.js */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* PHP */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"
                  alt=""
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              margin:5,
            }}
          >
            <Typography
              variant='h6'
              sx={{
                marginBottom: 2,
              }}
            >
              Frameworks:
            </Typography>
            <Grid
              container
              direction="row"
              spacing={4}
            >
              {/* Laravel */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* TensorFlow */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Keras */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=Keras&logoColor=white"
                  alt=""
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              margin:5,
            }}
          >
            <Typography
              variant='h6'
              sx={{
                marginBottom: 2,
              }}
            >
              Data Base Administration:
            </Typography>
            <Grid
              container
              direction="row"
              spacing={4}
            >
              {/* PostgreSQL */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* MySQL */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
                  alt=""
                />
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              margin:5,
            }}
          >
            <Typography
              variant='h6'
              sx={{
                marginBottom: 2,
              }}
            >
              Other Skills:
            </Typography>
            <Grid
              container
              direction="row"
              spacing={4}
            >
              {/* Visual Studio Code */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Eclipse */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* PyCharm */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Bash */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Git */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* GitHub */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* AzureDevOps */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Azure_DevOps-0078D7?style=for-the-badge&logo=azure-devops&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Arduino */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Linux */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"
                  alt=""
                />
              </Grid>
              {/* Mint */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Linux_Mint-87CF3E?style=for-the-badge&logo=linux-mint&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Ubuntu */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* WordPress */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Wordpress-21759B?style=for-the-badge&logo=wordpress&logoColor=white"
                  alt=""
                />
              </Grid>
              {/* Excel */}
              <Grid item>
                <img
                  className='lenguaje'
                  src="https://img.shields.io/badge/Microsoft_Excel-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white"
                  alt=""
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
    );
} 



