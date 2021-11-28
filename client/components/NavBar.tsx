import React from 'react'
import Link from 'next/link'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
        return (
            <nav>
                <ul>
                    <li><Link href="/">About</Link></li>
                    <li><Link href="/">Projects</Link></li>
                </ul>
            </nav>
        )
}