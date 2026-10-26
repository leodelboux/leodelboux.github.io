/* Projetos selecionados, organizados em grupos.
   A ordem dos grupos e dos itens no array é a ordem exibida no site.

   Campos de cada projeto:
     id        identificador único (sem espaços)
     publish   true = aparece no site público; false = só no modo de edição (?edit=1)
     title     nome do projeto (texto simples ou { pt, en })
     context   { pt, en } — situação / necessidade
     role      { pt, en } — sua contribuição
     result    { pt, en } — resultado CONFIRMADO (deixe vazio se não houver)
     image     caminho de uma imagem real (opcional); imageWidth / imageHeight = tamanho real
               imageCutout: true = recorte com fundo transparente, exibido sem moldura
     imageAlt  { pt, en }
     link      { href, label: { pt, en } } — opcional; âncoras internas como '#santinho'
*/
window.CONTENT = window.CONTENT || {};

CONTENT.projectGroups = [
  {
    id: 'digital',
    projects: [
      {
        id: 'santinho-virtual',
        publish: true,
        title: 'Santinho Virtual',
        context: {
          pt: 'O santinho impresso não gera alcance digital. Criei um card interativo que o eleitor abre no celular, compartilha nas redes e salva como lembrete do dia da eleição.',
          en: "Printed campaign flyers create no digital reach. I created an interactive card voters open on their phones, share on social media and save as an election-day reminder."
        },
        role: {
          pt: 'Concepção do produto, desenvolvimento com Claude Code, pitch e venda direta para campanhas.',
          en: 'Product concept, development with Claude Code, pitching and direct sales to campaigns.'
        },
        result: { pt: 'Faturamento de cinco dígitos', en: 'Five-figure revenue' },
        image: 'assets/thumbs/santinho-card.webp',
        imageWidth: 720,
        imageHeight: 1055,
        imageCutout: true,   // imagem recortada com fundo transparente (sem moldura)
        imageAlt: { pt: 'Tela do Santinho Virtual com foto, nome e número de um candidato de exemplo', en: 'Santinho Virtual screen showing a sample candidate’s photo, name and ballot number' },
        link: { href: '#santinho', label: { pt: 'Ver o case completo', en: 'See the full case study' } }
      }
    ]
  },
  {
    id: 'audiovisual',
    projects: [
      // Os vídeos em si (como o reel) ficam só na seção Audiovisual (content/videos.js), para não aparecerem duas vezes.
      {
        id: 'creators-editing',
        publish: true,
        title: { pt: 'Edição para criadores e streamers', en: 'Editing for creators and streamers' },
        context: {
          pt: 'Conteúdo para as redes de criadores como Lucas Lira, Aline Castro e Temet, streamer de Valorant.',
          en: 'Social content for creators including Lucas Lira, Aline Castro and Valorant streamer Temet.'
        },
        role: { pt: 'Edição de vídeo', en: 'Video editing' },
        result: { pt: '', en: '' },
        link: { href: '#video', label: { pt: 'Ver trabalhos em vídeo', en: 'See the video work' } }
      }
    ]
  },
  {
    id: 'communication',
    projects: [
      {
        id: 'lucas-lira-partnerships',
        publish: true,
        title: { pt: 'Assessoria comercial — Lucas Lira', en: 'Commercial advisory — Lucas Lira' },
        context: {
          pt: 'Fui além da edição e assumi a frente comercial do criador.',
          en: 'I went beyond editing and took over the creator’s commercial side.'
        },
        role: { pt: 'Negociação e fechamento de parcerias com marcas e contratos de publicidade.', en: 'Negotiating and closing brand partnerships and advertising deals.' },
        result: { pt: 'Parcerias fechadas com Fini e Paramount', en: 'Partnerships closed with Fini and Paramount' }
      },
      {
        id: 'campaign-coordination',
        publish: true,
        title: { pt: 'Liderança em campanhas políticas', en: 'Political campaign leadership' },
        context: {
          pt: 'Operação de campo e equipe central de campanha.',
          en: 'Field operations and the core campaign team.'
        },
        role: {
          pt: 'Liderei uma equipe de 23 pessoas na operação de rua em 2024 e coordenei a equipe principal de campanha, com sete integrantes.',
          en: 'Led a 23-person street team in 2024 and coordinated the seven-person core campaign team.'
        },
        result: { pt: '', en: '' }
      },
      {
        id: 'discord-events',
        publish: true,
        title: { pt: 'Eventos no Discord do Lucas Lira', en: "Events on Lucas Lira's Discord" },
        context: {
          pt: 'A comunidade do criador no Discord, com aproximadamente 600 mil membros.',
          en: "The creator's Discord community, with approximately 600,000 members."
        },
        role: { pt: 'Criação e organização de eventos para a comunidade.', en: 'Creating and running community events.' },
        result: { pt: '', en: '' }
      }
    ]
  }
];
