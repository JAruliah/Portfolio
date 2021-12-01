import React from 'react'
import {ProjectsContent} from '../types/types'
import Image from 'next/image'

interface ProjectsProps {
    projects:ProjectsContent[]
}

// Projects section, display all projects
export const Projects: React.FC<ProjectsProps> = ({projects}) => {
        return (
            <section id="projects" className="projects">
                <h2 className="projects-heading">Projects</h2>
                <div className="projects-div">
                {projects.map((project, index) => {
                    return (
                    <div key={index} className="project">
                        <Image src={`https://api.jaruliah.me${project.coverImage.url}`} alt={project.coverImage.alternativeText} width="50" height="50"/>
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
                            <div className="live-site">
                                <a href={project.url} target="_blank" rel="noreferrer">               
                                    <span>View Site</span>
                                </a>
                            </div>
                            <div className="source-code">
                                <a href={project.code} target="_blank" rel="noreferrer">
                                    <span>GitHub</span>
                                </a>
                            </div>
                            
                            
                        </div>

                    </div>
                )
                })}
                </div>
            </section>
        )
}