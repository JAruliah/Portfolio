import React from 'react'
import {NavBar} from './NavBar'

interface HeaderProps {

}
// Header of the site
export const Header: React.FC<HeaderProps> = ({}) => {
        return (
            <header>
                <NavBar />
            </header>
        )
}