/* Galeria audiovisual.
   Para adicionar um vídeo, copie um bloco abaixo e preencha os campos.

     id            identificador único
     publish       true SOMENTE quando a divulgação estiver autorizada; false = só no modo de edição
     title         { pt, en }
     client        { pt, en } ou texto — cliente ou projeto
     category      'social' | 'creators' | 'clients'
     description   { pt, en } — breve
     contribution  { pt, en } — o que você fez
     src           arquivo local (ex.: 'assets/video/nome.mp4') OU link do YouTube / Vimeo
     poster        thumbnail (ex.: 'assets/thumbs/nome.jpg'). Recomendado: JPG/WebP, 540 px de largura
     orientation   'vertical' (9:16) | 'horizontal' (16:9)
     credit        { pt, en } — créditos ou observações (opcional)
*/
window.CONTENT = window.CONTENT || {};

CONTENT.videos = [
  {
    id: 'reel-delboux-edit',
    publish: true,
    title: { pt: 'Reel delboux.edit', en: 'delboux.edit reel' },
    client: { pt: 'Projeto próprio', en: 'Personal project' },
    category: 'social',
    description: {
      pt: 'Apresentação do meu trabalho de edição em formato vertical, com tipografia em movimento.',
      en: 'A vertical showcase of my editing work, built with kinetic typography.'
    },
    contribution: { pt: 'Criação e edição', en: 'Concept and editing' },
    src: 'https://youtube.com/shorts/QEWZAqnG0KI',
    poster: 'assets/thumbs/reel-delboux-edit.jpg',
    orientation: 'vertical',
    credit: { pt: '', en: '' }
  },

  /* ——— Espaços reservados: aparecem apenas no modo de edição (?edit=1) ———
     Troque publish para true quando houver arquivo E autorização de divulgação. */
  {
    id: 'lucas-lira-placeholder',
    publish: false,
    placeholder: true,
    title: { pt: 'Vídeo — Lucas Lira', en: 'Video — Lucas Lira' },
    client: 'Lucas Lira',
    category: 'creators',
    description: { pt: '', en: '' },
    contribution: { pt: 'Edição de vídeo', en: 'Video editing' },
    src: '', poster: '', orientation: 'vertical',
    credit: { pt: 'Aguardando arquivo e autorização', en: 'Awaiting file and permission' }
  },
  {
    id: 'aline-castro-placeholder',
    publish: false,
    placeholder: true,
    title: { pt: 'Vídeo — Aline Castro', en: 'Video — Aline Castro' },
    client: 'Aline Castro',
    category: 'creators',
    description: { pt: '', en: '' },
    contribution: { pt: 'Edição de vídeo', en: 'Video editing' },
    src: '', poster: '', orientation: 'vertical',
    credit: { pt: 'Aguardando arquivo e autorização', en: 'Awaiting file and permission' }
  },
  {
    id: 'temet-placeholder',
    publish: false,
    placeholder: true,
    title: { pt: 'Vídeo — Temet', en: 'Video — Temet' },
    client: 'Temet',
    category: 'creators',
    description: { pt: 'Conteúdo de streamer de Valorant.', en: 'Valorant streamer content.' },
    contribution: { pt: 'Edição de vídeo', en: 'Video editing' },
    src: '', poster: '', orientation: 'horizontal',
    credit: { pt: 'Aguardando arquivo e autorização', en: 'Awaiting file and permission' }
  }
];
