/* Depoimentos reais. A seção só aparece no site público quando houver
   pelo menos um item com authorized: true.

   Modelo:
   {
     name: 'Nome da pessoa',
     role: { pt: 'Função / empresa', en: 'Role / company' },
     text: { pt: 'Texto original...', en: 'Tradução revisada (opcional)...' },
     photo: 'assets/img/depoimentos/nome.webp',   // opcional
     authorized: true                              // autorização de publicação confirmada
   }

   Se só houver texto em português, a versão em inglês exibe o original
   (marcado com o idioma correto), sem tradução automática.
*/
window.CONTENT = window.CONTENT || {};

CONTENT.testimonials = [];
