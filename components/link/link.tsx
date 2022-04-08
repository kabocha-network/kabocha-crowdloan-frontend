import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const linksClassName = `${className} font-semibold underline decoration-yellow hover:bg-yellow`;

  // use next/link for internal links
  if (href.startsWith('/')) {
    return (
      <NextLink href={href}>
        <a className={linksClassName}>{children}</a>
      </NextLink>
    )
  }

  // return normal anchor for external links
  return (
    <a href={href} className={linksClassName} rel="external noopener noreferrer" target="_blank">
      {children}
    </a>
  )

}
