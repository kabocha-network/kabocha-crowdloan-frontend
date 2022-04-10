type MainProps = {
  children: React.ReactNode;
};

export function LayoutMain(props: MainProps) {
  return (
    <main id="main" className="container md:mx-auto md:my-16">
      {props.children}
    </main>
  );
}
