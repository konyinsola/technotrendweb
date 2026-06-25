export const ROUTES = {
  home: '/',
  contact: '/contact',
} as const;

export const HOME_SECTION_IDS = {
  about: 'about',
  services: 'services',
  clients: 'clients',
  products: 'products',
  partners: 'partners',
  process: 'process',
  telecomProducts: 'telecom-products',
} as const;

export function buildSectionHref(sectionId: string) {
  return `${ROUTES.home}#${sectionId}`;
}
