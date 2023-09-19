import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

type ThemeProp = {
    children: JSX.Element;
}

//template con colores y fuentes

export enum themePalette{
    //colores
    BG = '#12181b',
    LIME = '#C8FA5F',
    //fuentes
    FONT_GLOBAL = "'JetBrains Mono', monospace",
}

//construccion del tema como tal
const theme = createTheme ({
    
    //tema
    palette:{
        mode:"dark",
        //color del background por defecto
        background: {
            default: themePalette.BG,
        },
        //color por defecto del botón primary
        primary:{
            main: themePalette.LIME,
        }
    },
    //tipografia del citio en general
    typography:{
        fontFamily: themePalette.FONT_GLOBAL,
        // si quisieramos manejar tamaño de letra global fontSize: 25,
    },
    //estilos de los componentes
    components:{
        //estilos de los botones de MUI
        MuiButton:{
            defaultProps:{
                style:{
                    //que no se ponga en mayusculas el texto
                    textTransform: "none",
                    //quitar el boxshadow
                    boxShadow: "none",
                    //border radius
                    borderRadius: "0.5em",
                    //tamaño del boton pues
                    width: "100%",
                    //padding
                    padding: 12,
                }
            }
        }
    }
});

export const ThemeConfig: React.FC<ThemeProp> = ({children}) => {
    return (
        <ThemeProvider theme = {theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

