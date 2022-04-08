import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kabocha Crowdloan App</title>
        <meta name="description" content="Kabocha Crowdloan App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://kabocha.network">Kabocha!</a>
        </h1>

        <p className={styles.description}>
          Get started by connecting your wallet.
        </p>
      </main>

      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} Kabocha Network
      </footer>
    </div>
  )
}

export default Home
