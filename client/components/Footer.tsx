import React from 'react'
import Image from 'next/image'

interface FooterProps {
    footerMessage:string,
    footerImage:{
        url:string,
        alternativeText:string
    }
}
// Footer of the site
export const Footer: React.FC<FooterProps> = ({footerMessage, footerImage}) => {
        return (
            <footer>
                <div>
                    <p>{footerMessage}</p>
                    <Image src={`https://api.jaruliah.me${footerImage.url}`} alt="footer image" width="40" height="40" />
                </div>
                
            </footer>
        )
}