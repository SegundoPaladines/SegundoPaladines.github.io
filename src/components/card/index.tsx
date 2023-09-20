import React from 'react'
import { Card, CardMedia, CardContent, Typography, Button, Divider } from '@mui/material';
import './index.css'

type CardPropts = {
    image:string;
    name:string;
    description:string,
    url:string;
}
const abrirUrl = (url: string) => {
    window.open(url, '_blank');
};

export const CardComponent: React.FC <CardPropts> = ({image, name, description, url}) =>{
    return (
        <Card className='card'
            sx={{
                margin:3,
                boxShadow: "10px 10px 10px rgba(30, 132, 73  , 0.4)",
            }}
        >

            <CardMedia
                component="img"
                height="250"
                image={image}
                alt="Certificate"
            />

            <CardContent>
                <Typography variant='h5'>
                    {name}
                </Typography>
                <Divider/>
                <Typography sx={{mt:2}}>
                    {description}
                </Typography>
            </CardContent>

            <CardContent>
                <Button fullWidth variant="outlined" size="small" onClick={() => abrirUrl(url)}>
                    Show Credential
                </Button>
            </CardContent>

        </Card>
    );
}