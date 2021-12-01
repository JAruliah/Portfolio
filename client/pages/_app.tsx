import '../styles/reset.css'
import '../styles/css/main.css'
import type { AppProps } from 'next/app'
import { ParticlesBackground } from '../components/ParticlesBackground'
import Head from 'next/head'


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
    </Head>
      <ParticlesBackground/>
      <Component {...pageProps} />
    </>


  )
}

export default MyApp
