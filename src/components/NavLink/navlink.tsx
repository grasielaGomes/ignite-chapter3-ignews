import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function NavLink({ children, activeClassName, ...props }: NavLinkProps) {
  const { asPath } = useRouter();
  const className = asPath === props.href ? activeClassName : "";
  return <Link {...props}>{cloneElement(children, { className })}</Link>;
}
