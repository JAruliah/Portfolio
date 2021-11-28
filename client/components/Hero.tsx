import React from 'react'

interface HeroProps {

}

export const Hero: React.FC<HeroProps> = ({}) => {
        return (
            <section id="hero" className="hero">
                <div className="heading">
                    <h1>Jonathan Aruliah</h1>
                    <h3>Full Stack Web Developer</h3>
                    <div className="socials">
                        <a href="https://github.com/JAruliah" target="_blank"><img className="filter-blue" src="/img/github.svg" width="40" alt="github logo" /></a>
                        <a href="https://www.linkedin.com/in/jonathan-aruliah-1b98611ba/" target="_blank" ><img className="filter-blue" src="/img/linkedin.svg" width="40" alt="linkedin logo" /></a>
                        <a href="mailto:jonathanaruliah@gmail.com"><img className="filter-blue" src="/img/mail.svg" width="40" alt="mail" /></a>
                        <a></a>
                    </div>
                </div>
            </section>
        );
}