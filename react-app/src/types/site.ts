export type NavLinkItem = {
  label: string;
  href: string;
};

export type NavDropdownItem = NavLinkItem & {
  items: NavLinkItem[];
};

export type NavItem = NavLinkItem | NavDropdownItem;

export type FooterColumn = {
  title: string;
  links: NavLinkItem[];
};

export type SitePageMeta = {
  title: string;
  description: string;
};
