import { useRouter } from 'next/router';

type ButtonProps = {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  disabled?: boolean;
};

export function Button({ children, href, onClick, disabled = false }: ButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (href) {
      router.push(href);
      return;
    }

    if (onClick) {
      !disabled && onClick();
    }
  };

  return (
    <button className="font-bold text-lg py-2 px-8 rounded bg-amber-200 text-black disabled:bg-slate-200 disabled:text-gray-600 hover:bg-amber-400 " onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
}
