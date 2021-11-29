import type { NextPage, GetStaticProps } from 'next'
import {Header} from '../components/Header'
import {Hero} from '../components/Hero'
import {About} from '../components/About'
import {HomeContent, AboutContent} from '../types/types'


interface HomeProps {
  about:AboutContent,
  home: HomeContent
}
// Home page of site
const Home: NextPage<HomeProps> = ({about, home}) => {

  return (
    <>
      <Header />
      <div className="container">
        <Hero home={home}/>
        <About about={about} links={home.links} />
      </div>
    </>
  )
}

export default Home

export const getStaticProps:GetStaticProps = async () => {
  const res = await fetch(`https://api.jaruliah.me/home`)
  const home = await res.json()

  const res2 = await fetch(`https://api.jaruliah.me/about`)
  const about = await res2.json()



  return {
      props:{about, home}
  }
}
