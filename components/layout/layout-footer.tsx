export function LayoutFooter() {
  return (
    <footer id="footer" className="bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-row justify-center items-center py-4 text-gray-500">
          &copy; {new Date().getFullYear()} Kabocha Network
        </div>
      </div>
    </footer>
  );
}
