# ComparoTech

Blog de comparações de tecnologia (VPNs, hospedagem, apps e produtividade) feito com **Astro** — estático, rápido e pronto para AdSense, Vercel e Google Search Console.

## Stack

- [Astro 5](https://astro.build) — site estático (HTML puro no build, sem JS pesado)
- Markdown em `src/content/posts/` — cada artigo é um arquivo `.md`
- Vercel — hospedagem gratuita com deploy automático no push

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera o site em dist/
```

## Publicar no GitHub + Vercel

```bash
git remote add origin https://github.com/FranciscoDGA/ComparoTech.git
git push -u origin main
```

1. Acesse [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório `ComparoTech`.
2. A Vercel detecta o Astro automaticamente (Framework: Astro, Build: `npm run build`).
3. Deploy pronto em `https://comparotech.vercel.app` (ou o nome que você escolher).

## Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console).
2. **Adicionar propriedade** → tipo **Prefixo de URL** → cole a URL do deploy da Vercel.
3. Verifique a propriedade (DNS ou arquivo HTML — com a Vercel, o mais fácil é adicionar um registro TXT no DNS do domínio final, ou usar a tag meta).
4. Envie o sitemap: **Sitemaps → adicionar** → `https://comparotech.vercel.app/sitemap-index.xml`.
5. Depois que o domínio definitivo estiver comprado, repita a propriedade com o domínio novo.

## Google AdSense

1. [ads.google.com](https://ads.google.com) → cadastre-se com a conta Google.
2. Envie o site para revisão (requisitos: conteúdo original, páginas de Privacidade/Sobre, domínio próprio ajuda, tráfego mínimo não é oficial mas ajuda).
3. Após aprovação:
   - Cole o **script de verificação** no `<head>` — edite `src/layouts/Base.astro` (procure o comentário `GOOGLE ADSENSE`).
   - Substitua o conteúdo de `src/components/AdSlot.astro` pelo bloco real `<ins class="adsbygoogle" ...>` do AdSense (unidade responsiva).
   - Edite `public/ads.txt` descomentando a linha e colocando seu ID (`pub-XXXXXXXXXXXXXXXX`).

## Domínio

1. Compre o domínio no [registro.br](https://registro.br) (.com.br) ou Cloudflare/Hostinger (.com).
2. Na Vercel: **Project → Settings → Domains** → adicione o domínio e siga as instruções de DNS.
3. Atualize a URL canônica em:
   - `astro.config.mjs` → `site`
   - `src/config.ts` → `url`
   - `public/robots.txt` → URL do sitemap

## Publicar um artigo novo

Crie um arquivo `.md` em `src/content/posts/`:

```markdown
---
title: "Título do artigo (SEO, até ~60 caracteres)"
description: "Meta description com palavra-chave (até ~155 caracteres)"
pubDate: 2026-10-22
updatedDate: 2026-10-22   # opcional
category: "vpn-e-seguranca"  # vpn-e-seguranca | hospedagem | produtividade | apps-gratuitos
tags: ["tag1", "tag2"]
featured: false            # true = aparece como destaque na home
author: "Redação ComparoTech"
---

Conteúdo do artigo em Markdown...

Tabelas, listas, **negrito** etc.

<div class="verdict verdict-win">
<h3>Caixa de veredito</h3>
<p>Texto do veredito.</p>
</div>

<div class="faq-item">
<h3>Pergunta frequente</h3>
<p>Resposta curta.</p>
</div>
```

Boas práticas de conteúdo (SEO + AdSense):

- **1.500+ palavras** nos artigos money (comparativos de VPN, hospedagem etc.).
- Tabela comparativa **no topo** do artigo.
- Transparência sobre afiliados (o template de post já inclui o aviso automático).
- Links internos entre artigos da mesma categoria.
- Não copiar texto de outros sites — conteúdo original é requisito do AdSense.

## Estrutura

```
comparotech/
├── public/                 # favicon, robots.txt, ads.txt, og.png
├── src/
│   ├── components/         # Header, Footer, PostCard, AdSlot
│   ├── config.ts           # nome do site, categorias
│   ├── content/posts/      # artigos em Markdown
│   ├── content.config.ts   # schema dos artigos
│   ├── layouts/Base.astro  # head, SEO, JSON-LD
│   ├── pages/              # home, posts, categorias, páginas legais
│   └── styles/global.css
├── astro.config.mjs
└── package.json
```

## Checklist antes de aplicar ao AdSense

- [x] Política de Privacidade
- [x] Aviso Legal
- [x] Página Sobre com método editorial
- [x] Página Contato
- [x] HTTPS (Vercel)
- [x] Sitemap + robots.txt
- [ ] Pelo menos ~15–20 artigos publicados (recomendado para aprovação)
- [ ] Domínio próprio comprado e conectado
- [ ] Script do AdSense + ads.txt preenchidos
