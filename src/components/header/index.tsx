import { Box, Grid, Typography, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
}

export const HeaderComponent:React.FC <HeaderProps> = ({title, description, element}) => {

    //animar el titulo
    const [titulo, setTitulo] = useState('');
    const [caracterActual, setCaracterActual] = useState(0);

    useEffect (() => {
        const intervalo = setInterval(() => {
            if(caracterActual < title.length){
                setTitulo((prv) => prv + title[caracterActual]);
                setCaracterActual((prv) => prv + 1);
            }
            else{
                clearInterval(intervalo);
            }
        }, 100); //velocidad de escritura
        return () => clearInterval(intervalo);
    }, [title, caracterActual]);

    return (
        <div>  
            <Box style ={{
                width: '100%',
                height: '100%',
                position: 'relative',
            }}>
                <Grid 
                    container 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx = {{height: "100%"}}
                >
                    <Grid item xs = {5}>
                        <Grid 
                                container 
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                                sx = {{height: "100%"}}
                            >
                            {element !== undefined && <Grid item sx={{mt:4}}>{element}</Grid>}
                            <Grid item>
                                <Typography variant='h3' sx={{mt:2.5}}> {titulo} </Typography>
                            </Grid>
                            <Grid item sx = {{mt:2.5}}>
                                <Typography> {description} </Typography>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{
                    borderBottomColor:"green",
                    position:'relative',
                    mt:15,
            }} />
        </div>
    );
}