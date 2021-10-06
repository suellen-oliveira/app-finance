import NextLink from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  children: ReactNode;
}

const Link = ({ children, url, ...props }) => {
  return (
    <NextLink href={url}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
