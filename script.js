/* =========================================================
   EDIT HERE: your links and projects
   ========================================================= */
const CONFIG = {
  email: 'kaziunastadas@gmail.com',
  github: 'https://github.com/Tadas380',
  cv: '', // e.g. 'cv.pdf' after you add cv.pdf to this folder (leave '' to hide the button)
};

// type: 'security' | 'web' | 'ai'  ·  live: URL or ''  ·  code: GitHub URL or '' (private)
const PROJECTS = [
  {
    id: 'subdomain-finder',
    type: 'security',
    featured: true,
    icon: '🔎',
    live: '', // TODO: paste your Render URL
    code: 'https://github.com/Tadas380/subdomain-finder',
    tags: ['TypeScript', 'Node.js', 'DNS', 'Certificate Transparency', 'node:test'],
    en: {
      title: 'Subdomain Finder',
      desc: 'Passive recon tool: finds a domain\'s subdomains from public Certificate Transparency logs without ever touching the target.',
      points: [
        'Detects dangling CNAMEs, a common subdomain-takeover risk',
        'Flags risky names like dev, staging, admin and vpn',
        'Two data sources with automatic fallback, caching and rate limiting',
      ],
    },
    lt: {
      title: 'Subdomenų paieška',
      desc: 'Pasyvus žvalgybos įrankis: suranda domeno subdomenus iš viešų sertifikatų skaidrumo (CT) žurnalų, visai nesikreipiant į patį tikslą.',
      points: [
        'Aptinka „kabančius“ CNAME įrašus, dėl kurių galima perimti subdomeną',
        'Pažymi rizikingus pavadinimus: dev, staging, admin, vpn',
        'Du duomenų šaltiniai su automatiniu atsarginiu, podėliu ir užklausų ribojimu',
      ],
    },
  },
  {
    id: 'lt-calendar-api',
    type: 'web',
    featured: false,
    icon: '📅',
    live: '', // TODO: paste your Render URL
    code: 'https://github.com/Tadas380/lt-calendar-api',
    tags: ['TypeScript', 'Node.js', 'REST API', 'GitHub Actions'],
    en: {
      title: 'LT Calendar API',
      desc: 'Free open API for Lithuanian name days and public holidays, with a docs page and live calendar.',
      points: ['~2,000 names, search ignores diacritics', 'Easter and all 16 holidays calculated for any year', 'Zero dependencies, 32 tests, CI'],
    },
    lt: {
      title: 'LT kalendoriaus API',
      desc: 'Nemokama atvira vardadienių ir šventinių dienų API su dokumentacija ir gyvu kalendoriumi.',
      points: ['~2 000 vardų, paieška be lietuviškų raidžių', 'Velykos ir visos 16 švenčių bet kuriems metams', 'Be priklausomybių, 32 testai, CI'],
    },
  },
  {
    id: 'kaunas-transit-live',
    type: 'web',
    featured: false,
    icon: '🚌',
    live: 'https://kaunas-transit-live.onrender.com',
    code: 'https://github.com/Tadas380/kaunas-transit-live', // check this matches your repo name
    tags: ['Node.js', 'Maps', 'Real-time data'],
    en: {
      title: 'Kaunas Transit Live',
      desc: 'Live map of Kaunas buses and trolleybuses, showing where every vehicle is right now.',
      points: ['Real-time vehicle positions', 'Works on phones', 'Deployed and public'],
    },
    lt: {
      title: 'Kauno transportas gyvai',
      desc: 'Gyvas Kauno autobusų ir troleibusų žemėlapis: matai, kur kiekviena transporto priemonė yra dabar.',
      points: ['Transporto vietos realiu laiku', 'Veikia telefone', 'Įdiegta ir vieša'],
    },
  },
  {
    id: 'ai-website-assistant',
    type: 'ai',
    featured: false,
    icon: '💬',
    live: 'https://ai-website-assistant-k9c7.onrender.com',
    code: 'https://github.com/Tadas380/ai-website-assistant',
    tags: ['Node.js', 'LLM API', 'Chat UI'],
    en: {
      title: 'AI Website Assistant',
      desc: 'AI chat assistant for business websites, shown on a demo gym site. Answers visitors\' questions about prices, hours and memberships.',
      points: ['Lithuanian-first, replies in the visitor\'s language', 'Answers from the business\'s own info', 'Built to sell to local businesses'],
    },
    lt: {
      title: 'DI svetainės asistentas',
      desc: 'Dirbtinio intelekto pokalbių asistentas verslo svetainėms, parodytas demonstracinėje sporto klubo svetainėje. Atsako į lankytojų klausimus apie kainas, darbo laiką ir narystes.',
      points: ['Pirmiausia lietuviškai, bet atsako lankytojo kalba', 'Atsakymai iš paties verslo informacijos', 'Kurtas parduoti vietos verslams'],
    },
  },
  {
    id: 'website-security-checker',
    type: 'security',
    featured: false,
    icon: '🛡️',
    live: '',
    code: 'https://github.com/Tadas380/website-security-checker', // check this matches your repo name
    tags: ['Node.js', 'Security', 'PDF reports'],
    en: {
      title: 'Website Security Checker',
      desc: 'Passive website security scanner that checks a site\'s public security setup and produces a downloadable PDF report.',
      points: ['Passive checks only', 'Readable report for non-technical owners', 'Built with Node.js'],
    },
    lt: {
      title: 'Svetainės saugumo tikrintuvas',
      desc: 'Pasyvus svetainių saugumo skeneris, kuris patikrina viešus saugumo nustatymus ir sukuria atsisiunčiamą PDF ataskaitą.',
      points: ['Tik pasyvūs patikrinimai', 'Ataskaita suprantama ne IT žmonėms', 'Sukurta su Node.js'],
    },
  },
  {
    id: 'subscriber-insights',
    type: 'web',
    featured: true,
    icon: '📊',
    live: '',
    code: '', // private
    tags: ['React', 'Shopify', 'Prisma', 'Webhooks'],
    en: {
      title: 'Subscriber Insights (Shopify app)',
      desc: 'Analytics dashboard for subscription-box merchants: MRR, churn and at-risk subscribers from Recharge data.',
      points: ['Real-time updates through Recharge webhooks', 'Found and fixed webhook signature and registration bugs', 'In development, planned for the Shopify App Store'],
    },
    lt: {
      title: 'Subscriber Insights (Shopify programėlė)',
      desc: 'Analitikos skydelis prenumeratos dėžučių pardavėjams: MRR, klientų netekimas ir rizikingi prenumeratoriai iš Recharge duomenų.',
      points: ['Atnaujinama realiu laiku per Recharge webhook\'us', 'Radau ir ištaisiau webhook parašo ir registracijos klaidas', 'Kuriama, planuojama Shopify App Store'],
    },
  },
];

const SKILLS = [
  { en: 'Languages', lt: 'Kalbos', items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', 'SQL'] },
  { en: 'Backend', lt: 'Backend', items: ['Node.js', 'REST APIs', 'Webhooks', 'Prisma', 'SQLite'] },
  { en: 'Frontend', lt: 'Frontend', items: ['React', 'Responsive design', 'Accessibility', 'Vanilla JS'] },
  { en: 'Security', lt: 'Saugumas', items: ['DNS & TLS', 'HTTP security headers', 'Rate limiting', 'Input validation', 'HMAC', 'Recon'] },
  { en: 'Tools', lt: 'Įrankiai', items: ['Git', 'GitHub Actions', 'Render', 'Shopify', 'Discord webhooks'] },
];

/* =========================================================
   Translations
   ========================================================= */
const T = {
  en: {
    skip: 'Skip to projects',
    'nav.projects': 'Projects', 'nav.skills': 'Skills', 'nav.about': 'About', 'nav.contact': 'Contact',
    'hero.status': 'Open to junior developer roles',
    'hero.role': 'Junior developer with a cybersecurity background',
    'hero.lead': 'I build web apps, APIs and security tools, and deploy them so people can actually use them. Based in Kaunas, Lithuania.',
    'hero.cta1': 'See my projects', 'hero.cta2': 'Get in touch',
    'stats.projects': 'projects built', 'stats.live': 'live on the web', 'stats.langs': 'languages spoken', 'stats.grad': 'cybersecurity graduate',
    'projects.title': 'Projects',
    'projects.lead': 'Real, working projects. Most are open source and have a live demo you can try.',
    'filter.all': 'All', 'filter.security': 'Security', 'filter.web': 'Web & APIs', 'filter.ai': 'AI & automation',
    'skills.title': 'Skills', 'skills.lead': "What I've used in the projects above.",
    'about.title': 'About me',
    'about.p1': 'I studied Cybersecurity and Systems at Kauno Kolegija. That background shapes how I build: I validate input, rate-limit public endpoints, set security headers and write tests before I call something done.',
    'about.p2': "I like projects that solve a real, local problem, like a live Kaunas bus map or the first open API for Lithuanian name days. I'm looking for a junior developer role where I can keep learning from a team and ship things people use.",
    'about.edu': 'Cybersecurity and Systems',
    'about.langsTitle': 'Languages', 'about.langs': 'Lithuanian · English · Russian', 'about.langsLevel': 'native · professional · basic',
    'about.basedTitle': 'Based in', 'about.based': 'Kaunas, Lithuania', 'about.remote': 'Open to on-site, hybrid or remote',
    'contact.title': "Let's talk",
    'contact.lead': 'Hiring a junior developer, or need a website or tool built? Send me a message.',
    'contact.cv': 'Download CV',
    'footer.built': 'Built from scratch with HTML, CSS and JavaScript. No frameworks.',
    live: 'Live', code: 'Code', demo: 'Live demo', private: 'Private', openSource: 'Open source',
    title: 'Tadas Kaziunas — Junior Developer',
  },
  lt: {
    skip: 'Pereiti prie projektų',
    'nav.projects': 'Projektai', 'nav.skills': 'Įgūdžiai', 'nav.about': 'Apie mane', 'nav.contact': 'Kontaktai',
    'hero.status': 'Ieškau jaunesniojo programuotojo darbo',
    'hero.role': 'Jaunesnysis programuotojas su kibernetinio saugumo išsilavinimu',
    'hero.lead': 'Kuriu interneto programas, API ir saugumo įrankius ir juos paleidžiu, kad žmonės galėtų jais naudotis. Gyvenu Kaune.',
    'hero.cta1': 'Mano projektai', 'hero.cta2': 'Susisiekti',
    'stats.projects': 'sukurti projektai', 'stats.live': 'veikia internete', 'stats.langs': 'kalbos', 'stats.grad': 'baigiau kibernetinį saugumą',
    'projects.title': 'Projektai',
    'projects.lead': 'Tikri, veikiantys projektai. Dauguma atviro kodo, daugumą galima išbandyti gyvai.',
    'filter.all': 'Visi', 'filter.security': 'Saugumas', 'filter.web': 'Web ir API', 'filter.ai': 'DI ir automatizavimas',
    'skills.title': 'Įgūdžiai', 'skills.lead': 'Ką naudojau aukščiau esančiuose projektuose.',
    'about.title': 'Apie mane',
    'about.p1': 'Kauno kolegijoje studijavau kibernetinę saugą ir sistemas. Tai matosi mano darbe: tikrinu įvestį, riboju viešų API užklausas, nustatau saugumo antraštes ir rašau testus prieš laikydamas darbą baigtu.',
    'about.p2': 'Man patinka projektai, sprendžiantys tikrą, vietinę problemą, pavyzdžiui, gyvas Kauno autobusų žemėlapis ar pirmoji atvira lietuviškų vardadienių API. Ieškau jaunesniojo programuotojo darbo, kur galėčiau mokytis komandoje ir kurti tai, kuo žmonės naudojasi.',
    'about.edu': 'Kibernetinė sauga ir sistemos',
    'about.langsTitle': 'Kalbos', 'about.langs': 'Lietuvių · anglų · rusų', 'about.langsLevel': 'gimtoji · profesinė · pagrindai',
    'about.basedTitle': 'Gyvenu', 'about.based': 'Kaunas, Lietuva', 'about.remote': 'Tinka darbas biure, hibridinis ar nuotolinis',
    'contact.title': 'Pasikalbėkime',
    'contact.lead': 'Ieškote jaunesniojo programuotojo ar reikia svetainės ar įrankio? Parašykite man.',
    'contact.cv': 'Atsisiųsti CV',
    'footer.built': 'Sukurta nuo nulio su HTML, CSS ir JavaScript. Be karkasų.',
    live: 'Veikia', code: 'Kodas', demo: 'Išbandyti', private: 'Privatus', openSource: 'Atviras kodas',
    title: 'Tadas Kaziunas — jaunesnysis programuotojas',
  },
};

/* =========================================================
   App
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lang = 'en';
let filter = 'all';

function storedLang() {
  try { return localStorage.getItem('lang'); } catch { return null; }
}
function saveLang(l) {
  try { localStorage.setItem('lang', l); } catch { /* storage unavailable */ }
}

function renderProjects() {
  const t = T[lang];
  $('#project-grid').innerHTML = PROJECTS.map((p) => {
    const c = p[lang];
    const badge = p.live
      ? `<span class="badge live">${t.live}</span>`
      : p.code ? `<span class="badge code">${t.openSource}</span>` : `<span class="badge private">${t.private}</span>`;
    const links = [
      p.live && `<a class="btn small primary" href="${esc(p.live)}" target="_blank" rel="noopener">${t.demo} ↗</a>`,
      p.code && `<a class="btn small" href="${esc(p.code)}" target="_blank" rel="noopener">${t.code}</a>`,
    ].filter(Boolean).join('');
    return `
      <article class="card reveal${p.featured ? ' featured' : ''}" data-type="${p.type}">
        <div class="card-top"><span class="icon" aria-hidden="true">${p.icon}</span>${badge}</div>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.desc)}</p>
        <ul>${c.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
        <div class="tags">${p.tags.map((x) => `<span class="tag">${esc(x)}</span>`).join('')}</div>
        ${links ? `<div class="links">${links}</div>` : ''}
      </article>`;
  }).join('');
  applyFilter();
  observeReveal();
}

function applyFilter() {
  $$('#project-grid .card').forEach((card) => {
    card.hidden = filter !== 'all' && card.dataset.type !== filter;
  });
  $$('.filters button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === filter)));
}

function renderSkills() {
  $('#skills-grid').innerHTML = SKILLS.map((g) => `
    <div class="skill-group reveal">
      <h3>${esc(g[lang])}</h3>
      <ul>${g.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </div>`).join('');
}

function setLang(l) {
  lang = T[l] ? l : 'en';
  document.documentElement.lang = lang;
  document.title = T[lang].title;
  $$('[data-i18n]').forEach((el) => {
    const v = T[lang][el.dataset.i18n];
    if (v) el.textContent = v;
  });
  $$('.lang button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  renderProjects();
  renderSkills();
  observeReveal();
  saveLang(lang);
}

/* Stats computed from the data so they never go stale */
function renderStats() {
  $('#stat-projects').textContent = PROJECTS.length;
  const live = PROJECTS.filter((p) => p.live).length;
  const liveEl = $('.stats div:nth-child(2) strong');
  if (liveEl) liveEl.textContent = live;
}

/* Contact links */
function renderContact() {
  $('#email-link').href = `mailto:${CONFIG.email}`;
  $('#email-text').textContent = CONFIG.email;
  $('#github-link').href = CONFIG.github;
  if (CONFIG.cv) {
    $('#cv-link').href = CONFIG.cv;
    $('#cv-link').hidden = false;
  }
  $('#year').textContent = new Date().getFullYear();
}

/* Terminal typing animation */
const SCRIPT = [
  ['cmd', 'whoami'],
  ['out', '<span class="c">tadas kaziunas</span> · junior developer · kaunas, lt'],
  ['cmd', './subdomain-finder --domain example.com'],
  ['out', '<span class="m">[ct]</span>  20 subdomains found in certificate logs'],
  ['out', '<span class="m">[dns]</span> 13 live · <span class="w">1 dangling CNAME ⚠</span>'],
  ['cmd', 'curl lt-calendar-api/api/v1/namedays/name/tadas'],
  ['out', '{ <span class="c">"name"</span>: "Tadas", <span class="c">"dates"</span>: ["10-28"] }'],
  ['cmd', 'npm test'],
  ['out', '<span class="p">✓</span> 32 passing'],
  ['cmd', 'echo $STATUS'],
  ['out', '<span class="p">open to work</span>'],
];

async function runTerminal() {
  const el = $('#terminal');
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const prompt = '<span class="p">➜</span> <span class="c">~</span> ';
  if (reduceMotion) {
    el.innerHTML = SCRIPT.map(([k, v]) => (k === 'cmd' ? prompt + esc(v) : v)).join('\n') + '\n' + prompt + '<span class="cursor"></span>';
    return;
  }
  let html = '';
  for (const [kind, text] of SCRIPT) {
    if (kind === 'cmd') {
      html += prompt;
      for (const ch of text) {
        html += esc(ch);
        el.innerHTML = html + '<span class="cursor"></span>';
        await sleep(28 + Math.random() * 40);
      }
      await sleep(260);
    } else {
      html += text;
      el.innerHTML = html;
      await sleep(180);
    }
    html += '\n';
  }
  el.innerHTML = html + prompt + '<span class="cursor"></span>';
}

/* Reveal on scroll */
let io;
function observeReveal() {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    $$('.reveal').forEach((e) => e.classList.add('in'));
    return;
  }
  io ??= new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal:not(.in)').forEach((e) => io.observe(e));
}

/* Card spotlight follows the mouse */
document.addEventListener('pointermove', (e) => {
  const card = e.target.closest?.('.card');
  if (!card) return;
  const r = card.getBoundingClientRect();
  card.style.setProperty('--mx', `${e.clientX - r.left}px`);
  card.style.setProperty('--my', `${e.clientY - r.top}px`);
});

/* Nav border on scroll */
const nav = $('.nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });

/* Events */
$('.lang').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-lang]');
  if (b) setLang(b.dataset.lang);
});
$('.filters').addEventListener('click', (e) => {
  const b = e.target.closest('button[data-filter]');
  if (!b) return;
  filter = b.dataset.filter;
  applyFilter();
});

/* Boot */
renderStats();
renderContact();
setLang(storedLang() || (navigator.language?.toLowerCase().startsWith('lt') ? 'lt' : 'en'));
onScroll();
runTerminal();
