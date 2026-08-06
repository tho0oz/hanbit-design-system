/**
 * Hanbit DS - Footer
 * Figma: "Footer/Footer"
 * Variants: Breakpoint(Desktop|Tablet|Mobile)
 */
import React from 'react';

export type FooterBreakpoint = 'Desktop' | 'Tablet' | 'Mobile';

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  breakpoint?: FooterBreakpoint;
  logo?: React.ReactNode;
  linkGroups?: FooterLinkGroup[];
  copyright?: string;
  bottomContent?: React.ReactNode;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  breakpoint = 'Desktop', logo, linkGroups, copyright, bottomContent, className,
}) => (
  <footer className={className} data-breakpoint={breakpoint.toLowerCase()}>
    {logo && <div>{logo}</div>}
    {linkGroups && (
      <nav aria-label="푸터 링크">
        {linkGroups.map((group, i) => (
          <div key={i}>
            <h4>{group.title}</h4>
            <ul>{group.links.map((link, j) => <li key={j}><a href={link.href}>{link.label}</a></li>)}</ul>
          </div>
        ))}
      </nav>
    )}
    {copyright && <p>{copyright}</p>}
    {bottomContent}
  </footer>
);
export default Footer;
