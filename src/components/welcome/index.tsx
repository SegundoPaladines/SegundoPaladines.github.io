import React, { useEffect, useRef } from 'react';
import './index.css'

type Fondo = {
    url: string;
    title: string;
};

export const FondoAnimado: React.FC<Fondo> = ({ url, title }) => {
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        const h1 = h1Ref.current;
        const windowWidth = window.innerWidth;

        if (h1) {
            const spans = h1.querySelectorAll('span');
            spans.forEach((span, index) => {
                (span as HTMLElement).style.animationDelay = `${0.4+ (400/windowWidth)*index}s`;
            });
            h1.classList.add('animate-text');
        }
    }, []);

    return (
        <div className='fondo'>
            <video className='humo' src={url} autoPlay muted />
            <h1 className="titulo" ref={h1Ref}>
                {title.split('').map((char, index) => (
                    char === ' ' ? <span key={index}>&nbsp;</span> : <span key={index}>{char}</span>
                ))}
            </h1>
        </div>
    );
};