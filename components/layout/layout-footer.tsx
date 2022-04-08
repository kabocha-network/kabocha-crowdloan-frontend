export function LayoutFooter() {
  return (
    <footer className="container mx-auto">
      <div className="flex flex-row justify-center items-center py-2">
        &copy; {new Date().getFullYear()} Kabocha Network
      </div>
    </footer>
  );
}
