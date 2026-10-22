export const SITE = {
  name: 'ComparoTech',
  tagline: 'Comparações de tecnologia para você escolher melhor',
  description:
    'Comparativos honestos de VPNs, hospedagem, apps e ferramentas digitais. Tabelas, prós, contras e vereditos para decidir sem enrolação.',
  url: 'https://comparotech.vercel.app',
  author: 'Redação ComparoTech',
  email: 'contato@comparotech.com.br',
  founded: 2026,
} as const;

export interface CategoryInfo {
  name: string;
  description: string;
  hex: string;
}

export const CATEGORIES: Record<string, CategoryInfo> = {
  'vpn-e-seguranca': {
    name: 'VPN e Segurança',
    description: 'VPNs, antivírus e ferramentas para proteger sua navegação e dados.',
    hex: '#059669',
  },
  hospedagem: {
    name: 'Hospedagem',
    description:
      'Hospedagem de sites, domínios, e-mail profissional e ferramentas para manter seu site no ar.',
    hex: '#d97706',
  },
  produtividade: {
    name: 'Produtividade',
    description: 'Apps e sistemas para organizar tarefas, projetos e rotina de trabalho.',
    hex: '#7c3aed',
  },
  'apps-gratuitos': {
    name: 'Apps Gratuitos',
    description: 'Melhores apps gratuitos para celular e computador, testados e comparados.',
    hex: '#e11d48',
  },
};

export function categoryName(slug: string): string {
  return CATEGORIES[slug]?.name ?? slug;
}

export function categoryDescription(slug: string): string {
  return CATEGORIES[slug]?.description ?? '';
}

export function categoryHex(slug: string): string {
  return CATEGORIES[slug]?.hex ?? '#2563eb';
}
