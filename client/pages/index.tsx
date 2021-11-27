import type { NextPage, GetStaticProps } from 'next'


interface HomeProps {
  projects:{
    title:string,

  }[],
}
// Home page of site
const Home: NextPage<HomeProps> = ({projects}) => {

  return (

    <h1 style={{color:"white"}}>Jonathan Aruliah</h1>
  )
}

export default Home

export const getStaticProps:GetStaticProps = async() => {
  // Get projects
  const res = await fetch(`https://api.jaruliah.me/projects`)
  const projects = await res.json()

  return {
    props:{projects}
  }
}
