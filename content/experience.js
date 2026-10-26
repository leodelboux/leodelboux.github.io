/* Experiência, agrupada por área (não é uma linha do tempo).

     area          'audiovisual' | 'commercial' | 'operations'
     role          { pt, en } — o que você fez
     org           organização / cliente / contexto (opcional)
     period        texto do período (ex.: '2024'). Deixe '' enquanto não estiver confirmado:
                   no site público nada é exibido; no modo de edição aparece "período a confirmar".
     confirmed     false = a experiência inteira fica oculta no site público até ser confirmada
*/
window.CONTENT = window.CONTENT || {};

CONTENT.experience = [
  // Audiovisual
  { area: 'audiovisual', role: { pt: 'Editor de vídeo — redes sociais e projetos freelance', en: 'Video editor — social media and freelance projects' }, org: '', period: '', confirmed: true },
  { area: 'audiovisual', role: { pt: 'Editor de vídeo', en: 'Video editor' }, org: 'Lucas Lira', period: '', confirmed: true },
  { area: 'audiovisual', role: { pt: 'Editor de vídeo', en: 'Video editor' }, org: 'Aline Castro', period: '', confirmed: true },
  { area: 'audiovisual', role: { pt: 'Editor de vídeo — streamer de Valorant', en: 'Video editor — Valorant streamer' }, org: 'Temet', period: '', confirmed: true },

  // Vendas & parcerias
  { area: 'commercial', role: { pt: 'Assessor comercial — parcerias com Fini e Paramount', en: 'Commercial advisor — partnerships with Fini and Paramount' }, org: 'Lucas Lira', period: '', confirmed: true },
  { area: 'commercial', role: { pt: 'Criador e vendedor do Santinho Virtual — faturamento de cinco dígitos', en: 'Creator and seller of Santinho Virtual — five-figure revenue' }, org: { pt: 'Eleições 2026', en: '2026 elections' }, period: '2026', confirmed: true },

  // Liderança & comunidade
  { area: 'operations', role: { pt: 'Líder de equipe de 23 pessoas — operação de rua', en: 'Team lead, 23-person street team' }, org: { pt: 'Campanha política', en: 'Political campaign' }, period: '2024', confirmed: true },
  { area: 'operations', role: { pt: 'Coordenador da equipe principal de campanha (7 integrantes)', en: 'Coordinator, core campaign team (7 people)' }, org: { pt: 'Campanha política', en: 'Political campaign' }, period: '', confirmed: true },
  { area: 'operations', role: { pt: 'Subcoordenador geral de campanha', en: 'Deputy general campaign coordinator' }, org: { pt: 'Campanha política', en: 'Political campaign' }, period: '2026', confirmed: false },
  { area: 'operations', role: { pt: 'Criação e organização de eventos', en: 'Created and ran community events' }, org: { pt: 'Discord do Lucas Lira (~600 mil membros)', en: "Lucas Lira's Discord (~600,000 members)" }, period: '', confirmed: true }
];
