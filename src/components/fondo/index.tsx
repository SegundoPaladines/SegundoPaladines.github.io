import React from 'react';
import { Container } from '@mui/material';

type FondoProps = {
    image:string;
}

export const Fondo: React.FC <FondoProps> = ({image}) => {
    return (
       <Container>
            <div
                style={{
                    width: "100%",
                    height: "70%",
                    position:'absolute',
                    top:0,
                    left:0,
                    backgroundImage: image,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    minHeight: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white', 
                    textAlign: 'center',
                }}
            ></div>
            <div
                style={{
                minHeight: '80vh',
                content:"",
                position:'absolute',
                top:0,
                left:0,
                width:'100%',
                height: '70%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            ></div>
       </Container>
    );
}