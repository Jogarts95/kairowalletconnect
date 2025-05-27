import React, { FC, PropsWithChildren } from 'react';
import './LandingPage.css';

const LandingPage: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-custom-dark-main flex flex-col items-center justify-center relative overflow-hidden">
      {/* Efecto de fondo tipo lava */}
      <div className="absolute inset-0 bg-white opacity-10 blur-xl transform animate-lava" />
      
      {/* Contenido principal */}
      <h1 className="text-8xl font-cinzel font-black tracking-wider text-white relative z-10 mb-24 drop-shadow-glow hover:tracking-widest transition-all duration-300">
        KairoSphere
      </h1>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LandingPage; 