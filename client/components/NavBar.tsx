import React from 'react'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {

        return (
            <nav>
                <ul>
                <li><a onClick={() =>  document.getElementById("hero")?.scrollIntoView()}>Home</a></li>
                    <li><a onClick={ () => document.getElementById("about")?.scrollIntoView()}>About</a></li>
                    <li><a onClick={() => document.getElementById("projects")?.scrollIntoView()}>Projects</a></li>
                </ul>
            </nav>
        )
}