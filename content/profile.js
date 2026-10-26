/* Perfil: home, provas, pilares, sobre e contato.
   Textos bilíngues usam { pt: '...', en: '...' }. */
window.CONTENT = window.CONTENT || {};

CONTENT.profile = {
  brand: 'delboux.projects',

  // Seu nome completo, se quiser exibi-lo. Vazio = não aparece.
  name: '',

  // Fotografia principal. Para trocar, substitua o arquivo ou altere o caminho.
  photo: {
    src: 'assets/img/delboux-portrait.webp',
    width: 692,
    height: 925,
    alt: { pt: 'Retrato de delboux', en: 'Portrait of delboux' }
  },

  signature: 'Creative work. Digital solutions. Real execution.',

  headline: {
    pt: 'Crio, construo e vendo. Do vídeo ao produto digital.',
    en: 'I create, build and sell. From video to digital product.'
  },

  lead: {
    pt: 'Edição de vídeo para criadores e marcas, produtos digitais desenvolvidos com IA e a habilidade comercial para colocá-los no mercado. Você trabalha com uma pessoa que entende o problema, executa a solução e entrega resultado.',
    en: 'Video editing for creators and brands, AI-built digital products, and the commercial skill to take them to market. You work with one person who understands the problem, ships the solution and delivers results.'
  },

  // Provas exibidas logo abaixo dos botões da home. Use apenas números confirmados.
  proof: [
    { value: { pt: '5 dígitos', en: '5 figures' }, label: { pt: 'de faturamento com um produto digital que criei e vendi', en: 'in revenue from a digital product I created and sold' } },
    { value: 'Fini · Paramount', label: { pt: 'parcerias que negociei e fechei para o criador Lucas Lira', en: 'brand partnerships I negotiated and closed for creator Lucas Lira' } },
    { value: { pt: '~600 mil', en: '~600K' }, label: { pt: 'membros no Discord do Lucas Lira, onde criei e organizei eventos', en: "members on Lucas Lira's Discord, where I created and ran events" } },
    { value: '23', label: { pt: 'pessoas lideradas em operação de campanha', en: 'people led in a campaign field operation' } }
  ],

  // Os quatro pilares que organizam a narrativa.
  pillars: [
    { title: { pt: 'Criatividade', en: 'Creativity' }, text: { pt: 'Edição que prende a atenção — para criadores, streamers e marcas pessoais.', en: 'Editing that holds attention — for creators, streamers and personal brands.' } },
    { title: { pt: 'Tecnologia', en: 'Technology' }, text: { pt: 'Produtos digitais do conceito ao lançamento, desenvolvidos com IA.', en: 'Digital products from concept to launch, built with AI.' } },
    { title: { pt: 'Comunicação', en: 'Communication' }, text: { pt: 'Parcerias fechadas com marcas como Fini e Paramount, e venda presencial. Sei apresentar o que construo.', en: 'Partnerships closed with brands like Fini and Paramount, plus face-to-face sales. I know how to pitch what I build.' } },
    { title: { pt: 'Execução', en: 'Execution' }, text: { pt: 'Equipes lideradas em campanhas e eventos para os ~600 mil membros do Discord do Lucas Lira.', en: "Teams led on campaigns, and events run for the ~600K members of Lucas Lira's Discord." } }
  ],

  about: {
    title: { pt: 'Versátil por escolha. Focado em resultado.', en: 'Versatile by choice. Focused on results.' },
    paragraphs: [
      {
        pt: 'Construí minha trajetória executando: editei vídeos para criadores de conteúdo, fechei parcerias com marcas como Fini e Paramount, liderei equipes em campanhas políticas, organizei eventos para os cerca de 600 mil membros do Discord do Lucas Lira e criei um produto digital que vendi pessoalmente, com faturamento de cinco dígitos.',
        en: "I built my career by executing: editing videos for content creators, closing partnerships with brands like Fini and Paramount, leading teams on political campaigns, running events for the roughly 600,000 members of Lucas Lira's Discord, and creating a digital product I sold in person for five-figure revenue."
      },
      {
        pt: 'O que conecta tudo isso é a capacidade que mais faz falta em qualquer projeto: entender o que o cliente precisa, colocar a solução de pé e apresentá-la de um jeito que convence.',
        en: 'What ties it all together is the skill most projects are missing: understanding what the client needs, getting the solution off the ground, and presenting it in a way that convinces.'
      },
      {
        pt: 'Se você procura alguém que entenda o problema e vá até o fim na solução, vamos conversar.',
        en: "If you're looking for someone who understands the problem and sees the solution through, let's talk."
      }
    ],
    // confirmed: false = só aparece no modo de edição até ser confirmado.
    facts: [
      { label: { pt: 'Áreas', en: 'Focus' }, value: { pt: 'Edição de vídeo · Produtos digitais com IA · Vendas e negociação · Liderança de equipes', en: 'Video editing · AI-built digital products · Sales & negotiation · Team leadership' } },
      { label: { pt: 'Formação', en: 'Education' }, value: { pt: 'Graduação em Tecnologia da Informação', en: 'Degree in Information Technology' }, confirmed: false },
      { label: { pt: 'Linguagens', en: 'Languages (code)' }, value: 'Python · TypeScript', confirmed: false },
      { label: { pt: 'Idiomas', en: 'Languages' }, value: { pt: 'Português nativo · Inglês fluente', en: 'Native Portuguese · Fluent English' } }
    ]
  },

  contact: {
    title: { pt: 'Seu próximo projeto pode começar com uma conversa.', en: 'Your next project can start with one conversation.' },
    text: { pt: 'Vídeo, produto digital ou operação comercial: conte o que você precisa e eu mostro como resolver.', en: "Video, digital product or sales operation: tell me what you need and I'll show you how to solve it." },

    // Preencha apenas com dados reais. Campos vazios não aparecem no site.
    email: '',            // ex.: 'voce@dominio.com'
    whatsapp: '',         // só dígitos com DDI e DDD, ex.: '5531999999999'
    links: [
      // { label: 'Instagram', url: 'https://instagram.com/...' },
      // { label: 'LinkedIn',  url: 'https://www.linkedin.com/in/...' }
    ]
  }
};
