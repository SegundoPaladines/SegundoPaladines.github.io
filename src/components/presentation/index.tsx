import React from 'react';
import { Paper, Typography } from '@mui/material';

export const Presentation: React.FC <{}> = () =>{
    return(
        <Paper elevation={23} sx={{
            background: "#1E8449",
            boxShadow: "0px 16px 20px rgba(93, 109, 126 , 0.2)",
            marginLeft:"20%",
            marginRight:"20%",
       }}>
           <Typography fontSize={15} sx={{
               margin:2,
               padding:2,
           }}>
               I'm a Computer Systems Engineering student at the University of Nariño. 
               I enjoy software development and aspire to work for an important software enterprise.
           </Typography>
       </Paper>
    );
}