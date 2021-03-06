import Link from 'next/link';
import { KabochaLogo } from '../kabocha-logo/kabocha-logo';

export function LayoutHeader() {
  return (
    <header id="header" className="border-b border-gray-100">
      <div className="md:container md:mx-auto">
        <div className="flex flex-row justify-between items-center p-2 md:p-4 text-sm">
          <Link href="/">
            <a
              href="https://kabocha.network"
              target="_blank"
              rel="noreferrer noopener"
              className="text-2xl font-bold -md:ml-8"
            >
              <KabochaLogo width="48" height="48" />
            </a>
          </Link>
          <nav className="flex flex-r gap-x-2 md:gap-x-4 lg:gap-x-8">
            <a
              href="https://commonwealth.im/edgeware/discussion/2363-kabocha-kab-a-kusama-parachain-project-by-edgeware"
              className="p-2 hover:text-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              Genesis
            </a>
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
              Repos
            </a>
            <Link href="https://wiki.kabocha.network">
              <a className="mx-2 p-2 px-4 md:px-8 rounded-md bg-primary text-white font-semibold hover:bg-black custom-shadow">
                Learn More
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
