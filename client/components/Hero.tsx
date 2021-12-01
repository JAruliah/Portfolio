import React from 'react'
import {Socials} from './Socials'
import {HomeContent} from '../types/types'
import Image from 'next/image'

interface HeroProps {
    home:HomeContent
}
// First section of the site
export const Hero: React.FC<HeroProps> = ({home}) => {
        return (
            <section id="hero" className="hero">
                <div className="heading">
                    <Image src={`https://api.jaruliah.me${home.headerlogo.url}`} alt={home.headerlogo.alternativeText} width="80" height="80" />
                    <h1>{home.title}</h1>
                    <h3>{home.subheading}</h3>
                    <Socials links={home.links}/>
                </div>
            </section>
        )
}