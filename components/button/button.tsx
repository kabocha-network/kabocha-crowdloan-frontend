import { useRouter } from 'next/router';

type ButtonProps = {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
};

export function Button({ children, href, onClick }: ButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (href) {
      router.push(href);
      return;
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="bg-amber-200 hover:bg-amber-400 text-black font-bold py-2 px-8 rounded" onClick={handleClick}>
      {children}
    </button>
  );
}
