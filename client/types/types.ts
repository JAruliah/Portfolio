export type HomeContent = {
    title:string,
    subheading:string,
    links:{
      title:string,
      url:string,
      icon:{
        alternativeText:string,
        url:string
      }
    }[]
}

export type AboutContent = {
    title:string,
    description:string,
    skills:{
      url:string,
      alternativeText:string
    }[]
}

export type Links = {
  title:string,
  url:string,
  icon:{
    alternativeText:string,
    url:string
  }
}[]