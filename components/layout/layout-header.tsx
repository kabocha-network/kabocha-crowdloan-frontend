import Link from 'next/link';
import { KabochaLogo } from '../kabocha-logo/kabocha-logo';

export function LayoutHeader() {
  return (
    <header id="header" className="border-b border-gray-100">
      <div className="md:container md:mx-auto">
        <div className="flex flex-row justify-between items-center py-2">
          <Link href="/">
            <a className="text-2xl font-bold -ml-8">
              <KabochaLogo width="96" height="96" />
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
              href="https://github.com/kabocha-network"
              className="p-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
            <Link href="/">
              <a className="mx-2 p-2 px-8 rounded-md bg-primary text-white font-semibold hover:bg-black">
                Crowdloan
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
