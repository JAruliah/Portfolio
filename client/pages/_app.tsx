import '../styles/reset.css'
import '../styles/sass/main.css'
import type { AppProps } from 'next/app'
import { ParticlesBackground } from '../components/ParticlesBackground'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
    <ParticlesBackground/>
      <Component {...pageProps} />
    </>


  )
}

export default MyApp
