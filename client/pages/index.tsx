import type { NextPage, GetStaticProps } from 'next'
import {Header} from '../components/Header'
import {Hero} from '../components/Hero'


interface HomeProps {
  projects:{
    title:string,

  }[],
}
// Home page of site
const Home: NextPage<HomeProps> = ({projects}) => {

  return (
    <>
      <Header />
      <div className="container">
        <Hero />

      </div>
    </>
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
