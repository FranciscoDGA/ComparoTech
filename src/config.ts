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

export const CATEGORIES: Record<string, { name: string; description: string }> = {
  'vpn-e-seguranca': {
    name: 'VPN e Segurança',
    description: 'VPNs, antivírus e ferramentas para proteger sua navegação e dados.',
  },
  hospedagem: {
    name: 'Hospedagem',
    description: 'Hospedagem de sites, domínios, e-mail profissional e ferramentas para quem site no ar.',
  },
  produtividade: {
    name: 'Produtividade',
    description: 'Apps e sistemas para organizar tarefas, projetos e rotina de trabalho.',
  },
  'apps-gratuitos': {
    name: 'Apps Gratuitos',
    description: 'Melhores apps gratuitos para celular e computador, testados e comparados.',
  },
};

export function categoryName(slug: string): string {
  return CATEGORIES[slug]?.name ?? slug;
}

export function categoryDescription(slug: string): string {
  return CATEGORIES[slug]?.description ?? '';
}
