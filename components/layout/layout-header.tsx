import Image from 'next/image';
import Link from 'next/link';

export function LayoutHeader() {
  return (
    <header id="header" className="border-b border-gray-100">
      <div className="md:container md:mx-auto">
        <div className="flex flex-row justify-between items-center py-2">
          <Link href="/">
            <a className="text-2xl font-bold -ml-8">
              <Image src="/icons/kabocha-logo.png" alt="Kabocha" width={96} height={96} />
            </a>
          </Link>
          <nav className="flex flex-r gap-x-8">
            <a
              href="https://kabocha.network"
              className="p-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              Kabocha
            </a>
            <a href="https://edgewa.re" className="p-2" target="_blank" rel="noreferrer noopener">
              Edgeware
            </a>
            <a
              href="https://discord.gg/sC2GdPwrNF"
              className="p-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              Community
            </a>
            <a
              href="https://kabocha.network"
              className="p-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              Technology
            </a>
            <a
              href="https://github.com/Decent-Partners"
              className="p-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <Link href="/crowdloan">
              <a className="mx-2 p-2 px-8 rounded-md bg-yellow font-semibold">Crowdloan</a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
