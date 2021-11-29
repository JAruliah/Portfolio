import React from 'react'

interface SocialsProps {
    links:{
        title:string,
        url:string,
        icon:{
          alternativeText:string,
          url:string
        }
      }[]
}

export const Socials: React.FC<SocialsProps> = ({links}) => {
        return (
            <div className="socials">
                {links.map((link,index) => {
                  if(link.title === "Mail"){
                    return <a key={index} href={`mailto:${link.url}`} target="_blank"><img className="filter-blue" src={`https://api.jaruliah.me${link.icon.url}`} alt={link.icon.alternativeText} width="40" height="40" /></a>
                  }
                  else{
                    return <a key={index} href={link.url} target="_blank"><img className="filter-blue" src={`https://api.jaruliah.me${link.icon.url}`} alt={link.icon.alternativeText} width="40" height="40"/></a>
                
                  }
                })}
            </div>
        )
}