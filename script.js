const thumbs = [
  'https://xforgeassets001.xboxlive.com/pf-namespace-b63a0803d3653643/409af96f-81aa-4905-8be5-aff996648a95/betterpvp_Thumbnail_0.jpg',
  'https://cdn.wallpapersafari.com/51/71/s0FuMW.jpg',
  'https://i.ytimg.com/vi/vQN-wUHJj4k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBuA7BW5wRKaqNxZzCD8X8skRwpFg',
  'https://preview.redd.it/which-thumbnail-is-the-best-v0-8ujbajnkxwdf1.jpg?width=640&crop=smart&auto=webp&s=f5ecbe67c219b591ad95eed2d733bebcd564c392',
  'https://i.ytimg.com/vi/qoXy4wlI8kA/maxresdefault.jpg',
  'https://img.youtube.com/vi_webp/gfrSW7uHnHs/mqdefault.webp',
  'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/254285844/original/8fdf64c846a3c5dfcc2b3b6a50f4a145e4f8051e/create-a-professional-minecraft-bedwars-thumbnail.png',
  'https://i.ytimg.com/vi/GLxrsOQj9qs/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBHU7NGSjPaLp1n97VFZtN3JuvRig',
  'https://i.ytimg.com/vi/wPlUafiaoSc/mqdefault.jpg',
  'https://images.chunk.gg/products/giggle-block-studios/simple-pvp/thumbnail-89bb77e5ccea0a69-800.jpg',
];

const videoData = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    'Derrotei o Budokan no PvP!',
    'Venci o Melhor Jogador do Servidor!',
    'Clutch Insano 1v4 no PvP!',
    'O Duelo Mais Difícil da Minha Vida!',
    'Ganhei Sem Armadura no PvP!',
    'Destruí o Top 1 do Ranking!',
    'Só Usei Espada de Madeira e Venci!',
    'O Combo Mais Apelão do Servidor!',
    'Humilhei no X1 Valendo Tudo!',
    'Invadi a Base e Eliminei Todo Mundo!',
    'Fiquei Full Diamante em 10 Minutos!',
    'A Melhor Partida de PvP da Minha Vida!'
  ][i % 12],
  views: `${(Math.random() * 20 + 1).toFixed(1)}M`,
  time: ['1 week ago', '2 weeks ago', '3 days ago', '1 month ago', '5 days ago', '2 months ago'][i % 6],
  duration: `${Math.floor(Math.random() * 20 + 2)}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}`,
  // Pick a random thumb once when the data is created
  thumb: thumbs[Math.floor(Math.random() * thumbs.length)],
}));

// ─── RENDER HELPERS ───
function renderVideoCard(v) {
  return `
    <div class="video-card" data-id="${v.id}" role="article">
      <div class="video-thumb">
        <img src="${v.thumb}" alt="${v.title}" loading="lazy" />
        <span class="video-duration">${v.duration}</span>
      </div>
      <div class="video-info">
        <img
          class="channel-icon-sm"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkBzaimF22Y-M7QSJtxx9H6EMDtZuNZ_HWA&s"
          alt="Channel profile picture"
        />
        <div class="video-details">
          <div class="video-title">${v.title}</div>
          <div class="video-channel">
            Juninho games PVP
            <span>
              <i class="fi fi-ss-check-circle"></i>
            </span>
          </div>
          <div class="video-stats">${v.views} views · ${v.time}</div>
        </div>
      </div>
    </div>`;
}

// ─── TAB CONTENT RENDERERS ───
function renderHome() {
  const newest = videoData.slice(0, 6);
  const popular = videoData.slice(6, 12);
  const thumb = thumbs[Math.floor(Math.random() * thumbs.length)]
  return `
    <div class="featured-video" id="featuredVideo" role="region" aria-label="Featured video">
      <div class="featured-thumb">
        <img src="${thumb}" alt="a" loading="lazy"/>
      </div>
      <div class="featured-meta">
        <div class="featured-title">Derrotei o Budokan no PvP!</div>
        <div class="featured-stats">15,252,341 views · 1 week ago</div>
        <div class="featured-desc">
          Se você já tentou subir no PvP, sabe como é difícil enfrentar o Budokan… 😅<br>
          Nesse vídeo eu mostro a batalha completa onde finalmente consegui derrotar o Budokan no PvP! <br>
          Foi uma luta intensa, cheia de pressão, decisões rápidas e aquele momento tenso que decide tudo. <br>
          Confere até o final para ver a estratégia que usei e como consegui virar o jogo! 🔥🎮</a>
        </div>
      </div>
    </div>

    <div class="section-header">
      <span class="section-title">Newest Channel Name Videos!</span>
      <button class="play-all-btn" aria-label="Play all newest videos">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        Play all
      </button>
    </div>
    <div class="video-grid" id="newestGrid">${newest.map(renderVideoCard).join('')}</div>

    <div class="section-header">
      <span class="section-title">Most Popular Channel Name Videos</span>
      <button class="play-all-btn" aria-label="Play all popular videos">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        Play all
      </button>
    </div>
    <div class="video-grid" id="popularGrid">${popular.map(renderVideoCard).join('')}</div>`;
}

function renderVideos() {
  return `
    <div class="section-header"><span class="section-title">All Videos</span></div>
    <div class="video-grid">${videoData.map(renderVideoCard).join('')}</div>`;
}

function renderPlaceholder(title) {
  return `
    <div style="padding:40px;text-align:center;color:var(--text-muted)">
      <svg style="width:64px;height:64px;margin-bottom:12px;opacity:.3" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v8z"/>
      </svg>
      <div style="font-size:20px;font-weight:600;margin-bottom:8px">${title}</div>
      <div style="font-size:14px">Nothing here yet.</div>
    </div>`;
}

const tabContent = {
  home:      renderHome,
  videos:    renderVideos,
  playlists: () => renderPlaceholder('No Playlists'),
};

// ─── INIT ───
const pageContent = document.getElementById('pageContent');
pageContent.innerHTML = tabContent['home']();

// ─── TABS ───
document.getElementById('channelTabs').addEventListener('click', (e) => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const key = tab.dataset.tab;
  if (tabContent[key]) {
    pageContent.innerHTML = tabContent[key]();
  }
});

// ─── SUBSCRIBE ───
const subscribeBtn = document.getElementById('subscribeBtn');
subscribeBtn.addEventListener('click', () => {
  const subscribed = subscribeBtn.classList.toggle('subscribed');
  subscribeBtn.textContent = subscribed ? 'Subscribed' : 'Subscribe';
});
