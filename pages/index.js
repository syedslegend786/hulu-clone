import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home(props) {
  console.log(props.results)
  return (
    <div>
      <Head>
        <title>Hullu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navbar />
      <Results results={props.results} />
    </div>
  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre
  const data = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`).then(r => r.json())
  return {
    props: {
      results: data.results
    }
  }
}
