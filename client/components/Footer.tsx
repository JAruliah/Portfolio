import React from 'react'
import {FooterContent} from '../types/types'

interface FooterProps {
    footerMessage:string,
    footerImage:{
        url:string,
        alternativeText:string
    }
}

export const Footer: React.FC<FooterProps> = ({footerMessage, footerImage}) => {
        return (
            <footer>
                <p>{footerMessage}</p>
                <img src={`https://api.jaruliah.me${footerImage.url}`} alt="footer image" width="40" />
            </footer>
        )
}