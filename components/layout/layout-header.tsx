import Link from 'next/link';
import { KabochaLogo } from '../kabocha-logo/kabocha-logo';

export function LayoutHeader() {
  return (
    <header id="header" className="border-b border-gray-100">
      <div className="md:container md:mx-auto">
        <div className="flex flex-row justify-between items-center p-4 text-sm">
          <Link href="/">
            <a
              href="https://kabocha.network"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl font-bold -ml-8"
            >
              <KabochaLogo width="48" height="48" />
            </a>
          </Link>
          <nav className="flex flex-r gap-x-8">
            <a
              href="https://wiki.kabocha.network"
              className="p-2 hover:text-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Docs
            </a>
            <a
              href="https://github.com/kabocha-network"
              className="p-2 hover:text-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Repo
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
