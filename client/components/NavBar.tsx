import React from 'react'
import Link from 'next/link'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
        return (
            <nav>
                <ul>
                <li><Link href="/#hero">Home</Link></li>
                    <li><Link href="/#about">About</Link></li>
                    <li><Link href="/#projects">Projects</Link></li>
                </ul>
            </nav>
        )
}