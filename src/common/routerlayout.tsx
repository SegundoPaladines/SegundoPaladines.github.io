import React from 'react';
import { NavBar } from './navbar';
import { Outlet } from 'react-router-dom';

//router layout que contiene la barra de navegacion
export const RouterLayout: React.FC <{}> = () =>{
    return (
        <>
            <NavBar/>
            <Outlet />
        </>
    );
}