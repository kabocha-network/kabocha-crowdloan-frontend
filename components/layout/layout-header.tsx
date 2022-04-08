import Link from 'next/link';
import Image from 'next/image';

export function LayoutHeader() {
  return (
    <header id="header" className="border-b">
      <div className="container md:mx-auto">
        <div className="flex flex-row justify-between items-center py-2">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-800 -ml-8">
              <Image src="/icons/kabocha-logo.png" alt="Kabocha" width={96} height={96} />
            </a>
          </Link>
          <nav className="flex flex-r">
            <a href="https://edgewa.re" className="mx-2 p-2">
              Edgeware
            </a>
            <a href="https://discord.gg/sC2GdPwrNF" className="mx-2 p-2">
              Community
            </a>
            <a href="/governance" className="mx-2 p-2">
              Governance
            </a>
            <a href="/docs" className="mx-2 p-2">
              Docs
            </a>
            <a href="/github" className="mx-2 p-2">
              Github
            </a>
            <a href="/crowdloan" className="mx-2 p-2">
              Crowdloan
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
