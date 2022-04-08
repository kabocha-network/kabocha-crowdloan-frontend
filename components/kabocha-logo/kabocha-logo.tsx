import Image from 'next/image';

type KabochaLogoProps = {
  width: string | number;
  height: string | number;
};

export const KabochaLogo = ({ width, height }: KabochaLogoProps) => {
  return <Image src="/icons/kabocha-logo.png" alt="Kabocha" width={width} height={height} />;
};
