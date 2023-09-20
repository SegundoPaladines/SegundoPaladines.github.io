import React from 'react';
import { Paper, Typography } from '@mui/material';

export const Presentation: React.FC <{}> = () =>{
    return(
        <Paper elevation={23} sx={{
            background: "#1E8449",
            boxShadow: "15px 15px 15px rgba(0, 0, 0, 0.9)",
            paddingTop: 1,
            paddingBottom: 1,
            marginTop: 2,
            marginLeft:"15%",
            marginRight:"15%",
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