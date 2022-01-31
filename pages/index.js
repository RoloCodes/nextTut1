import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <div>
        <h1>Home Page</h1>
        <Link href="/about">
          <a>About Page</a>
        </Link>
        <br />
        <a href="/about">About Page slow</a>
        <br />
        <a href="https://google.com/search?q=shibas">Shibas</a>
      </div>
    </>
  )
}

export default Home
