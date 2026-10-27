/**
 * School socials — Instagram + TikTok, stacked (BC-5787).
 *
 * One shared feed component renders once per network. Instagram keeps its
 * slot below Campus Life; TikTok renders directly below it, separated by a
 * divider only when both are shown. Layout switches from a 3-column grid to
 * a snap carousel at 767px (see school-socials.css).
 *
 * Usage:
 *   import { mountSchoolSocials } from './school-socials.js';
 *   mountSchoolSocials(slotEl, { schoolName, instagram, tiktok }, { track });
 *
 * All post/account text is written with textContent, never innerHTML.
 */

const IG_LOGO_URL = new URL('./assets/ig-logo.png', import.meta.url).href;

const TT_GLYPH = 'M16.6 5.8a4.3 4.3 0 0 1-1-2.8h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.3-1.6z';
const IG_GLYPH = 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z';

// Placeholder TikTok mark from the design; swap for the official asset
// from TikTok's brand guidelines before launch.
const TT_LOGO_SVG = `<svg class="ss-feed__logo" viewBox="0 0 24 24" role="img" aria-label="TikTok"><circle cx="12" cy="12" r="12" fill="#000"/><g transform="translate(3.6 3.4) scale(.7)"><path transform="translate(-.6 -.45)" fill="#25F4EE" d="${TT_GLYPH}"/><path transform="translate(.6 .45)" fill="#FE2C55" d="${TT_GLYPH}"/><path fill="#fff" d="${TT_GLYPH}"/></g></svg>`;

const PLAY_SVG = '<svg width="10" height="12" viewBox="0 0 10 12" aria-hidden="true" focusable="false"><path d="M0 0l10 6-10 6z" fill="#fff"/></svg>';

export const NETWORKS = {
  instagram: {
    key: 'instagram',
    label: 'Instagram',
    gaCategory: 'school_instagram',
    cardLabel: caption => `Open Instagram post: ${caption}`,
    logo: () => {
      const img = el('img', 'ss-feed__logo');
      img.src = IG_LOGO_URL;
      img.alt = 'Instagram';
      return img;
    },
    icon: `<svg class="ss-card__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${IG_GLYPH}" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
    showViews: false,
  },
  tiktok: {
    key: 'tiktok',
    label: 'TikTok',
    gaCategory: 'school_tiktok',
    cardLabel: caption => `Watch on TikTok: ${caption}`,
    logo: () => fromHTML(TT_LOGO_SVG),
    icon: `<svg class="ss-card__icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${TT_GLYPH}" fill="currentColor"/></svg>`,
    showViews: true,
  },
};

/** Stacking order: Instagram first (existing slot), TikTok second. */
const ORDER = ['instagram', 'tiktok'];

export const POSTS_SHOWN = 3;
const TIKTOK_CAPTION_MAX = 150;

/**
 * A network renders only when connected, healthy and with at least 3 posts.
 * Anything else (fewer posts, expired token, API error) hides that network.
 */
export function isNetworkAvailable(feed) {
  return Boolean(
    feed &&
    feed.connected !== false &&
    (feed.status ?? 'ok') === 'ok' &&
    feed.account &&
    Array.isArray(feed.posts) &&
    feed.posts.filter(isValidPost).length >= POSTS_SHOWN
  );
}

/** Networks to render, in stacking order. Empty array = section not rendered. */
export function selectNetworks(data) {
  return ORDER.filter(key => isNetworkAvailable(data?.[key]));
}

/** The 3 most recent posts, newest first. */
export function latestPosts(posts, now = Date.now()) {
  return posts
    .filter(isValidPost)
    .slice()
    .sort((a, b) => toTime(b.timestamp, now) - toTime(a.timestamp, now))
    .slice(0, POSTS_SHOWN);
}

/** "Less than a day ago", "5 days ago", "1 week ago", "3 months ago", ... */
export function formatRelativeTime(timestamp, now = Date.now()) {
  const days = Math.floor(Math.max(0, now - toTime(timestamp, now)) / 86400000);
  const unit = (n, word) => `${n} ${word}${n === 1 ? '' : 's'} ago`;
  if (days < 1) return 'Less than a day ago';
  if (days < 7) return unit(days, 'day');
  if (days < 30) return unit(Math.floor(days / 7), 'week');
  if (days < 365) return unit(Math.floor(days / 30), 'month');
  return unit(Math.floor(days / 365), 'year');
}

/** 8900 -> "8.9K", 45100 -> "45.1K", 1200000 -> "1.2M". */
export function formatViews(count) {
  const n = Number(count);
  if (!Number.isFinite(n) || n < 0) return '';
  const short = (v, suffix) => `${(Math.floor(v * 10) / 10).toFixed(1).replace(/\.0$/, '')}${suffix}`;
  if (n >= 1e9) return short(n / 1e9, 'B');
  if (n >= 1e6) return short(n / 1e6, 'M');
  if (n >= 1e3) return short(n / 1e3, 'K');
  return String(Math.floor(n));
}

/**
 * Default analytics hook: pushes to window.dataLayer when present.
 * Override with options.track(category, action) to match the site's GA setup.
 */
export function defaultTrack(category, action) {
  if (typeof window !== 'undefined' && Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: 'school_social_click', category, action });
  }
}

/**
 * Renders a single network block (region + header + 3 cards + mobile dots).
 * @param {'instagram'|'tiktok'} networkKey
 * @param {{ account: {handle:string, profileUrl:string, avatarUrl?:string}, posts: Array }} feed
 * @param {{ schoolName: string, track?: Function, now?: number }} options
 * @returns {HTMLElement}
 */
export function renderSocialFeed(networkKey, feed, options) {
  const net = NETWORKS[networkKey];
  if (!net) throw new Error(`Unknown network: ${networkKey}`);
  const { schoolName, track = defaultTrack, now = Date.now() } = options;
  const { account } = feed;
  const posts = latestPosts(feed.posts, now);

  const section = el('section', 'ss-feed');
  section.setAttribute('aria-label', `${schoolName} on ${net.label}`);
  section.dataset.network = net.key;

  // Header: network logo · avatar, handle, name · Follow
  const header = el('div', 'ss-feed__header');
  header.append(net.logo());

  const acct = el('div', 'ss-feed__account');
  const avatar = el('div', 'ss-feed__avatar');
  if (account.avatarUrl) {
    const img = el('img');
    img.src = safeUrl(account.avatarUrl);
    img.alt = `${schoolName} logo`;
    avatar.append(img);
  }
  const names = el('div', 'ss-feed__names');
  names.append(el('span', 'ss-feed__handle', account.handle), el('span', 'ss-feed__name', schoolName));

  const follow = externalLink('ss-follow usn-focusable', account.profileUrl);
  follow.textContent = 'Follow';
  follow.setAttribute('aria-label', `Follow ${schoolName} on ${net.label} (${account.handle})`);
  follow.addEventListener('click', () => track(net.gaCategory, 'follow'));

  acct.append(avatar, names, follow);
  header.append(acct);

  // Cards
  const track3 = el('ul', 'ss-feed__track');
  posts.forEach((post, i) => {
    const caption = net.key === 'tiktok' ? truncate(post.caption, TIKTOK_CAPTION_MAX) : (post.caption ?? '').trim();
    const item = el('li', 'ss-feed__item');
    const card = externalLink('ss-card usn-focusable', post.url);
    card.setAttribute('aria-label', net.cardLabel(caption));
    card.addEventListener('click', () => track(net.gaCategory, `card-${i + 1}`));

    const media = el('div', 'ss-card__media');
    const img = el('img');
    img.src = safeUrl(post.imageUrl);
    img.alt = ''; // decorative: the caption is in the link label
    img.loading = 'lazy';
    img.decoding = 'async';
    // Expired/broken cover: fall back to the gray05 media box, not a broken icon.
    img.addEventListener('error', () => img.remove(), { once: true });
    media.append(img);
    if (net.showViews && post.views != null) {
      const badge = el('span', 'ss-card__views');
      badge.append(fromHTML(PLAY_SVG), document.createTextNode(formatViews(post.views)));
      media.append(badge);
    }

    const body = el('div', 'ss-card__body');
    const meta = el('div', 'ss-card__meta');
    meta.append(el('span', 'ss-card__date', formatRelativeTime(post.timestamp, now)), fromHTML(net.icon));
    body.append(el('span', 'ss-card__caption', caption), meta);

    card.append(media, body);
    item.append(card);
    track3.append(item);
  });

  // Mobile pagination dots (hidden on desktop via CSS)
  const dots = el('div', 'ss-feed__dots');
  dots.setAttribute('aria-hidden', 'true');
  const dotEls = posts.map((_, i) => dots.appendChild(el('span', `ss-feed__dot${i === 0 ? ' is-active' : ''}`)));
  bindDots(track3, dotEls);

  section.append(header, track3, dots);
  return section;
}

/**
 * Renders the stacked socials section into `slot`.
 * When neither network is available the slot is emptied and hidden, so the
 * next section follows Campus Life with the standard section gap.
 * @param {HTMLElement} slot
 * @param {{ schoolName: string, instagram?: object, tiktok?: object }} data
 * @param {{ track?: Function, now?: number }} [options]
 * @returns {string[]} the networks rendered, in order
 */
export function mountSchoolSocials(slot, data, options = {}) {
  const networks = selectNetworks(data);
  slot.replaceChildren();
  slot.hidden = networks.length === 0;
  if (!networks.length) return networks;

  const root = el('div', 'ss');
  networks.forEach((key, i) => {
    if (i > 0) {
      const hr = el('hr', 'ss__divider');
      hr.setAttribute('aria-hidden', 'true');
      root.append(hr);
    }
    root.append(renderSocialFeed(key, data[key], { ...options, schoolName: data.schoolName }));
  });
  slot.append(root);
  return networks;
}

// ---- helpers ----

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function fromHTML(html) {
  const t = document.createElement('template');
  t.innerHTML = html; // static markup only
  return t.content.firstElementChild;
}

function externalLink(className, href) {
  const a = el('a', className);
  a.href = safeUrl(href);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  return a;
}

/** Only http(s) URLs pass; anything else becomes "about:blank". */
function safeUrl(url) {
  try {
    const u = new URL(url, document.baseURI);
    return u.protocol === 'https:' || u.protocol === 'http:' ? u.href : 'about:blank';
  } catch {
    return 'about:blank';
  }
}

function isValidPost(p) {
  return Boolean(p && p.url && p.imageUrl);
}

function toTime(ts, fallback) {
  const t = typeof ts === 'number' ? ts : Date.parse(ts);
  return Number.isFinite(t) ? t : fallback;
}

function truncate(text, max) {
  const s = (text ?? '').trim();
  return s.length > max ? `${s.slice(0, max - 1).trimEnd()}…` : s;
}

function bindDots(scroller, dots) {
  if (dots.length < 2) return;
  let frame = 0;
  const update = () => {
    frame = 0;
    const first = scroller.firstElementChild;
    if (!first) return;
    const step = first.getBoundingClientRect().width + parseFloat(getComputedStyle(scroller).columnGap || '0');
    const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 2;
    const idx = atEnd ? dots.length - 1 : Math.min(dots.length - 1, Math.round(scroller.scrollLeft / (step || 1)));
    dots.forEach((d, i) => d.classList.toggle('is-active', i === idx));
  };
  scroller.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
}
