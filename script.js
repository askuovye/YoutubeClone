// ============================================
// CONSTANTS & CONFIG
// ============================================
const CONFIG = {
  MOBILE_BREAKPOINT: 768,
  SUBSCRIBE_STORAGE_KEY: 'channel_subscribed',
  CHANNEL_AVATAR: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIkBzaimF22Y-M7QSJtxx9H6EMDtZuNZ_HWA&s',
};

const THUMBNAILS = [
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

// ============================================
// DOM ELEMENTS (cached)
// ============================================
const DOM = {
  sidebar: document.getElementById('sidebar'),
  main: document.getElementById('main'),
  sidebarToggle: document.getElementById('sidebarToggle'),
  pageContent: document.getElementById('pageContent'),
  channelTabs: document.getElementById('channelTabs'),
  subscribeBtn: document.getElementById('subscribeBtn'),
  threeDots: document.getElementById('threedots'),
  bottomModal: document.getElementById('bottomModal'),
  modalOverlay: document.getElementById('modalOverlay'),
  showMoreBtn: document.getElementById('showMoreSubs'),
};

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
  thumb: THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)],
}));


// ============================================
// UTILITY FUNCTIONS
// ============================================
function isMobile() {
  return window.innerWidth < CONFIG.MOBILE_BREAKPOINT;
}

function randomThumbnail() {
  return THUMBNAILS[Math.floor(Math.random() * THUMBNAILS.length)];
}

// ============================================
// MODAL/SHEET HELPERS (generic for reuse)
// ============================================
function openModal(modal, overlay) {
  modal.classList.add('is-open');
  overlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal, overlay) {
  modal.classList.remove('is-open');
  overlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ============================================
// RENDERING: VIDEO CARDS & CONTENT
// ============================================
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
          src="${CONFIG.CHANNEL_AVATAR}"
          alt="Channel profile picture"
        />
        <div class="video-details">
          <div class="video-title">${v.title}</div>
          <div class="video-channel">
            Juninho games PVP
            <span><i class="fi fi-ss-check-circle"></i></span>
          </div>
          <div class="video-stats">${v.views} views · ${v.time}</div>
        </div>
      </div>
    </div>`;
}

function renderHome() {
  const newest = videoData.slice(0, 6);
  const popular = videoData.slice(6, 12);
  const featuredThumb = randomThumbnail();
  
  return `
    <div class="featured-video" role="region" aria-label="Featured video">
      <div class="featured-thumb">
        <img src="${featuredThumb}" alt="Derrotei o Budokan no PvP!" loading="lazy"/>
      </div>
      <div class="featured-meta">
        <div class="featured-title">Derrotei o Budokan no PvP!</div>
        <div class="featured-stats">15,252,341 views · 1 week ago</div>
        <div class="featured-desc">
          Se você já tentou subir no PvP, sabe como é difícil enfrentar o Budokan… 😅<br>
          Nesse vídeo eu mostro a batalha completa onde finalmente consegui derrotar o Budokan no PvP! <br>
          Foi uma luta intensa, cheia de pressão, decisões rápidas e aquele momento tenso que decide tudo. <br>
          Confere até o final para ver a estratégia que usei e como consegui virar o jogo! 🔥🎮
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
    <div class="video-grid">${newest.map(renderVideoCard).join('')}</div>

    <div class="section-header">
      <span class="section-title">Most Popular Channel Name Videos</span>
      <button class="play-all-btn" aria-label="Play all popular videos">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        Play all
      </button>
    </div>
    <div class="video-grid">${popular.map(renderVideoCard).join('')}</div>`;
}

function renderVideos() {
  return `
    <div class="section-header"><span class="section-title">All Videos</span></div>
    <div class="video-grid">${videoData.map(renderVideoCard).join('')}</div>`;
}

function renderPlaceholder(title) {
  return `
    <div style="padding:40px;text-align:center;color:var(--color-text-muted)">
      <i style="font-size:64px;margin-bottom:12px;opacity:0.3" class="fi fi-ss-exclamation"></i>
      <div style="font-size:20px;font-weight:600;margin-bottom:8px">${title}</div>
      <div style="font-size:14px">Nothing here yet.</div>
    </div>`;
}

const tabContent = {
  home: renderHome,
  videos: renderVideos,
  shorts: () => renderPlaceholder('Shorts Coming Soon'),
  live: () => renderPlaceholder('No Live Streams'),
  playlists: () => renderPlaceholder('No Playlists'),
};

// ============================================
// TABS MANAGEMENT
// ============================================
function initTabs() {
  DOM.pageContent.innerHTML = tabContent.home();
  
  DOM.channelTabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (!tab) return;
    
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    const key = tab.dataset.tab;
    if (tabContent[key]) {
      DOM.pageContent.innerHTML = tabContent[key]();
    }
  });
}

// ============================================
// SUBSCRIBE BUTTON
// ============================================
function updateSubscribeButton(isSubscribed) {
  DOM.subscribeBtn.textContent = isSubscribed ? 'Subscribed' : 'Subscribe';
  DOM.subscribeBtn.classList.toggle('is-subscribed', isSubscribed);
}

function initSubscribeButton() {
  const saved = localStorage.getItem(CONFIG.SUBSCRIBE_STORAGE_KEY) === 'true';
  updateSubscribeButton(saved);
  
  DOM.subscribeBtn.addEventListener('click', () => {
    const current = localStorage.getItem(CONFIG.SUBSCRIBE_STORAGE_KEY) === 'true';
    const newState = !current;
    localStorage.setItem(CONFIG.SUBSCRIBE_STORAGE_KEY, newState);
    updateSubscribeButton(newState);
  });
}

// ============================================
// SIDEBAR MANAGEMENT
// ============================================
function openSidebar() {
  DOM.sidebar.classList.add('is-open');
  if (!isMobile()) {
    DOM.main.classList.add('is-pushed');
  } else {
    sidebarOverlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
  }
}

function closeSidebar() {
  DOM.sidebar.classList.remove('is-open');
  DOM.main.classList.remove('is-pushed');
  sidebarOverlay.classList.remove('is-visible');
  document.body.style.overflow = '';
}

// Create overlay for sidebar only once
const sidebarOverlay = document.createElement('div');
sidebarOverlay.classList.add('sidebar-overlay');
document.body.appendChild(sidebarOverlay);

function initSidebar() {
  DOM.sidebarToggle.addEventListener('click', () => {
    DOM.sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar();
  });
  
  sidebarOverlay.addEventListener('click', closeSidebar);
  
  window.addEventListener('resize', () => {
    if (!isMobile() && DOM.sidebar.classList.contains('is-open')) {
      sidebarOverlay.classList.remove('is-visible');
      document.body.style.overflow = '';
      DOM.main.classList.add('is-pushed');
    }
  });
}

// ============================================
// BOTTOM MODAL (Three Dots Menu)
// ============================================
function initBottomModal() {
  DOM.threeDots.addEventListener('click', () => {
    openModal(DOM.bottomModal, DOM.modalOverlay);
  });
  
  DOM.modalOverlay.addEventListener('click', () => {
    closeModal(DOM.bottomModal, DOM.modalOverlay);
  });
  
  DOM.bottomModal.addEventListener('click', (e) => {
    const item = e.target.closest('.bottom-modal__item');
    if (!item) return;
    
    const label = item.querySelector('span').textContent;
    console.log('Selected:', label);
    closeModal(DOM.bottomModal, DOM.modalOverlay);
  });
}

// ============================================
// SHOW MORE (Subscriptions)
// ============================================
function initShowMore() {
  if (!DOM.showMoreBtn) return;
  
  DOM.showMoreBtn.addEventListener('click', () => {
    const arrow = DOM.showMoreBtn.querySelector('i');
    const isDown = arrow.classList.contains('fi-rr-angle-down');
    
    arrow.classList.toggle('fi-rr-angle-down');
    arrow.classList.toggle('fi-rr-angle-up');
    
    const span = DOM.showMoreBtn.querySelector('span');
    span.textContent = isDown ? 'Show less' : 'Show more';
  });
}

// ============================================
// GLOBAL ESCAPE KEY HANDLER
// ============================================
function initEscapeKey() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (DOM.sidebar.classList.contains('is-open')) {
        closeSidebar();
      } else if (DOM.bottomModal.classList.contains('is-open')) {
        closeModal(DOM.bottomModal, DOM.modalOverlay);
      }
    }
  });
}

// ============================================
// INITIALIZATION
// ============================================
function init() {
  initTabs();
  initSubscribeButton();
  initSidebar();
  initBottomModal();
  initShowMore();
  initEscapeKey();
}

document.addEventListener('DOMContentLoaded', init);