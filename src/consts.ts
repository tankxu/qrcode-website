// Site-wide constants used across pages and layouts.
// Update these to change the site's title, description, and metadata.

export const SITE_TITLE = 'PandaQR';
export const SITE_DESCRIPTION = 'Official website and blog for the QR Code project.';
export const SITE_URL = 'https://pandaqr.xyz';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/docs/api/', label: 'API' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
] as const;
