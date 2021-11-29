import { homedir } from 'os'
import React, {useEffect} from 'react'
import {Socials} from './Socials'
import {AboutContent} from '../types/types'

interface AboutProps {
    about: AboutContent,
    links:{
        title:string,
        url:string,
        icon:{
          alternativeText:string,
          url:string
        }
      }[]
}

export const About: React.FC<AboutProps> = ({about, links}) => {
        return (
            <section className="about" id="about">
                <div>
                    <div className="top-heading">
                        <h1>{about.title}</h1>
                        <Socials links={links} />
                    </div>
                    <div className="about-description" style={{whiteSpace: "pre-wrap"}}>
                        <p>{about.description}</p>
                    </div>
                    <div>
                        <h3>Skills</h3>
                        {/*Display all the images in the skills*/}
                        {about.skills.map((skill, index) => {return <img key={index} src={`https://api.jaruliah.me${skill.url}`} width="40" alt={skill.alternativeText}/>})}
                    </div>
                </div>
            </section>
        )
}

