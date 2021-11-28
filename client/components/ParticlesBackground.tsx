import React from 'react'
import Particles from 'react-tsparticles'
import ParticleConfig from "../config/particle-config"

interface ParticlesBackgroundProps {

}

export const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({}) => {

    const particlesInit = (main:any) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      }
    
      const particlesLoaded = (container:any) => {
        console.log(container);
      }

        return (
            <div className="particles" style={{position:"fixed", width:"100%", zIndex:"-1"}}>
                <Particles params={ParticleConfig} />
            </div>
        )
}