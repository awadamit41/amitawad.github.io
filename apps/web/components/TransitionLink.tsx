"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode } from "react";

type Props = LinkProps & { children: ReactNode; className?: string; href: string; };

export function TransitionLink({ href, children, className, ...props }: Props) {
  const router = useRouter();
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    const navigate = () => router.push(href);
    if ("startViewTransition" in document && typeof (document as Document & { startViewTransition?: (cb: () => void) => void }).startViewTransition === "function") {
      (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(navigate);
    } else navigate();
  };
  return <Link href={href} className={className} onClick={onClick} {...props}>{children}</Link>;
}
