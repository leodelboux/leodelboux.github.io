/* Case em destaque: Santinho Virtual. */
window.CONTENT = window.CONTENT || {};

CONTENT.santinho = {
  title: 'Santinho Virtual',
  summary: {
    pt: 'Um card digital que leva o candidato para o celular do eleitor — e transforma cada apoiador em um canal de divulgação.',
    en: "A digital card that puts the candidate on the voter's phone — and turns every supporter into a distribution channel."
  },

  // Destaque de resultado. Valor exato mantido privado por decisão do autor.
  result: { pt: 'Faturamento de cinco dígitos', en: 'Five-figure revenue' },
  resultNote: { pt: 'Um produto que concebi, desenvolvi com IA e vendi pessoalmente para diversas campanhas em 2026.', en: 'A product I conceived, built with AI and sold in person to multiple campaigns in 2026.' },

  // Narrativa em etapas (o item 7, galeria, é renderizado separadamente abaixo).
  steps: [
    {
      title: { pt: 'Contexto e necessidade', en: 'Context and need' },
      text: {
        pt: 'O santinho impresso cumpre uma função simples: fazer o eleitor lembrar nome e número. Mas ele não se conecta às redes da campanha, não é compartilhado e não lembra ninguém do dia da votação.',
        en: "The printed flyer does one simple job: help voters remember a name and a number. It doesn't link to the campaign's channels, it doesn't get shared, and it doesn't remind anyone on election day."
      }
    },
    {
      title: { pt: 'A solução', en: 'The solution' },
      text: {
        pt: 'Um card digital com a identidade da campanha, aberto direto no navegador do celular, que reúne o essencial do santinho e transforma o eleitor em divulgador.',
        en: "A digital card in the campaign's visual identity, opened straight in the phone's browser, that keeps the flyer's essentials and turns voters into promoters."
      }
    },
    {
      title: { pt: 'Funcionalidades e experiência', en: 'Features and user experience' },
      text: {
        pt: 'O card reage ao movimento do aparelho pelo giroscópio e concentra, numa só tela, as ações que importam para a campanha.',
        en: "The card responds to the phone's movement through the gyroscope and puts the actions that matter to the campaign on a single screen."
      }
    },
    {
      title: { pt: 'Criação com Claude Code', en: 'Building it with Claude Code' },
      text: {
        pt: 'Usei o Claude Code para acelerar o desenvolvimento. Defini o produto, a experiência e o visual, e conduzi cada iteração até chegar a uma versão pronta para vender.',
        en: 'I used Claude Code to speed up development. I defined the product, the experience and the visual design, and drove every iteration until it was ready to sell.'
      }
    },
    {
      title: { pt: 'Apresentação e venda', en: 'Pitching and selling' },
      text: {
        pt: 'Apresentei o produto cara a cara para as campanhas e fechei as vendas pessoalmente.',
        en: 'I pitched the product face to face to campaigns and closed the sales myself.'
      }
    },
    {
      title: { pt: 'Resultado comercial', en: 'Commercial outcome' },
      text: {
        pt: 'Faturamento de cinco dígitos em uma única temporada eleitoral.',
        en: 'Five-figure revenue in a single election season.'
      }
    }
  ],

  features: [
    { pt: 'Foto, nome e número do candidato', en: "Candidate's photo, name and ballot number" },
    { pt: 'Bandeiras e elementos visuais da campanha', en: 'Flags and campaign visual elements' },
    { pt: 'Interação pelo giroscópio do aparelho', en: "Interactive motion using the phone's gyroscope" },
    { pt: 'Acesso às redes sociais do candidato', en: "Links to the candidate's social media" },
    { pt: 'Acesso aos grupos de WhatsApp', en: 'Access to the campaign WhatsApp groups' },
    { pt: 'Compartilhamento nos Stories do Instagram', en: 'Built-in sharing to Instagram Stories' },
    { pt: 'Lembrete do dia da eleição na agenda do eleitor', en: "Election-day reminder saved to the voter's calendar" }
  ],

  // Recortes reais do produto (dados de exemplo), sem a interface do navegador.
  // tilt: true = card principal do case, com efeito de inclinação (mouse / giroscópio).
  gallery: [
    {
      src: 'assets/thumbs/santinho-card.webp', width: 720, height: 1055,
      alt: { pt: 'Card do candidato com foto, bandeira, nome e número de exemplo', en: 'Candidate card with photo, flag, sample name and ballot number' },
      caption: { pt: 'O card do candidato', en: 'The candidate card' },
      tilt: true
    },
    {
      src: 'assets/thumbs/santinho-missoes.webp', width: 540, height: 968,
      alt: { pt: 'Painel com ações para entrar no grupo de WhatsApp e seguir no Instagram', en: 'Panel with actions to join the WhatsApp group and follow on Instagram' },
      caption: { pt: 'Ações de apoio: WhatsApp e redes', en: 'Support actions: WhatsApp and social' }
    },
    {
      src: 'assets/thumbs/santinho-story.webp', width: 600, height: 1011,
      alt: { pt: 'Arte gerada para Stories com o card do candidato e QR code', en: 'Generated Stories artwork with the candidate card and a QR code' },
      caption: { pt: 'Arte pronta para os Stories', en: 'Ready-made Stories artwork' }
    }
  ]
};
