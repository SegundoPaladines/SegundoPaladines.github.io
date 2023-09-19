import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { AboutPage } from './pages/about';
import { SkillsPage } from './pages/skills';
import { CertificatesPage } from './pages/certificates';
import { RouterLayout } from './common/routerlayout';

export const AppRouter:React.FC <{}> = () => {
    return(
        //aqui se definen todas las rutas
        /*
            las que estan dentro de la ruta con el router layout tendran la barra de navegacion, 
            las que estén por fuera no
        */
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<AboutPage />}  />
                <Route path="/skills" element={<SkillsPage />}  />
                <Route path="/certificates" element={<CertificatesPage />}  />
            </Route>
        </Routes>
    );
}