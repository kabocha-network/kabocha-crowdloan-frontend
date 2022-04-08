export function LayoutFooter() {
  return (
    <footer id="footer" className="bg-slate-50 py-8">
      <div className="container mx-auto">
          <div className="text-center text-gray-500 py-2">
            <span>
              Project funded by {' '}
              <a href="https://edgewa.re/" rel="noopener noreferrer" target="_blank" className="underline decoration-slate-200">
                Edgeware DAO
              </a>
              {' '} in collaboration with {' '}
              <a href="https://decent.partners/" rel="noopener noreferrer" target="_blank" className="underline decoration-slate-200">
                Decent Partners
              </a>
            </span>
          </div>
          <div className="text-center text-gray-500 py-2">
            Kabocha Network - Playground of possibilities!
          </div>
      </div>
    </footer>
  );
}
