import React from 'react'
import {NavBar} from './NavBar'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <header>
                <NavBar />
            </header>
        )
}