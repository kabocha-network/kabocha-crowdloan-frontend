export function LayoutFooter() {
  return (
    <footer id="footer" className="bg-gray-50 py-8 mt-2">
      <div className="container mx-auto">
        <div className="text-center text-gray-500 p2">
          <span>
            Project funded by the{' '}
            <a
              href="https://edgewa.re/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline decoration-gray-200"
            >
              Edgeware
            </a>{' '}
            community, in collaboration with{' '}
            <a
              href="https://decent.partners/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline decoration-gray-200"
            >
              Decent Partners
            </a>{' '}
            and{' '}
            <a
              href="https://decentration.org/"
              rel="noopener noreferrer"
              target="_blank"
              className="underline decoration-gray-200"
            >
              Decentration Labs
            </a>
          </span>
        </div>
        <div className="text-center text-gray-500 py-2">
          Kabocha Network - Playground of possibilities
        </div>
      </div>
    </footer>
  );
}
