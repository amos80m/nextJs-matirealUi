import Head from 'next/head'
import Home from '../components/organisms/home'
export default function PageName() {
  
  return (
    <div>
      <Head>
        <title>Titile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home/>
      </main>

      <footer >
       <p>oooo</p>
      </footer>
    </div>
  )
}
