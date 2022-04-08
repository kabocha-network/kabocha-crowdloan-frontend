import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container m-auto">
      <Head>
        <title>Kabocha Crowdloan App</title>
        <meta name="description" content="Kabocha Crowdloan App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold">
          Welcome to <a href="https://kabocha.network">Kabocha!</a>
        </h1>

        <p>Get started by connecting your wallet.</p>
      </main>

      <footer>&copy; {new Date().getFullYear()} Kabocha Network</footer>
    </div>
  );
};

export default Home;
