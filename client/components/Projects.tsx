import React from 'react'
import {ProjectsContent} from '../types/types'

interface ProjectsProps {
    projects:ProjectsContent[]
}

export const Projects: React.FC<ProjectsProps> = ({projects}) => {
        return (
            <section id="projects" className="projects">
                <div className="projects-div">
                {projects.map((project, index) => {
                    return (
                    <div key={index} className="project">
                        <img src={`https://api.jaruliah.me${project.coverImage.url}`} alt={project.coverImage.alternativeText} width="50"/>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>

                        <div className="tech-used">
                            <ul>
                            {project.teches.map((tech, index) => {
                            return <li key={index}>{tech.tech}</li>
                        })}
                        </ul>
                        </div>

                        <div className="buttons">
                            <a className="live-site" href={project.url} target="_blank">Live Site</a>
                            <a className="source-code" href={project.code} target="_blank">GitHub</a>
                        </div>

                    </div>
                )
                })}
                </div>
            </section>
        )
}