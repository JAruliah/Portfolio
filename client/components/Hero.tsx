import React from 'react'
import {Socials} from './Socials'
import {HomeContent} from '../types/types'

interface HeroProps {
    home:HomeContent
}

export const Hero: React.FC<HeroProps> = ({home}) => {
        return (
            <section id="hero" className="hero">
                <div className="heading">
                    <img src={`https://api.jaruliah.me${home.headerlogo.url}`} alt={home.headerlogo.alternativeText} width="100" />
                    <h1>{home.title}</h1>
                    <h3>{home.subheading}</h3>
                    <Socials links={home.links}/>
                </div>
            </section>
        )
}