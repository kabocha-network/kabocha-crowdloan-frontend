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
    <button
      className="font-display font-bold text-lg py-3 px-24 rounded-lg bg-primary text-white disabled:bg-gray-200 disabled:text-gray-600 hover:bg-black hover:text-white custom-shadow"
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
