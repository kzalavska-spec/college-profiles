// Mock payloads shaped like the server-side response for one school.
// TikTok covers are generic Unsplash stock photos until real covers arrive.

const DAY = 86400000;
const media = name => new URL(`./media/${name}`, import.meta.url).href;
const unsplash = id => `https://images.unsplash.com/photo-${id}?w=480&h=600&fit=crop`;

function instagram(now) {
  return {
    connected: true,
    status: 'ok',
    account: {
      handle: 'grinnellcollege',
      profileUrl: 'https://www.instagram.com/grinnellcollege/',
      avatarUrl: media('ig-avatar.png'),
    },
    posts: [
      { url: 'https://www.instagram.com/grinnellcollege/', imageUrl: media('ig-post-1.png'), caption: '...and all that jazz @grinnelltdps put on a musical...', timestamp: now - 3 * 3600000 },
      { url: 'https://www.instagram.com/grinnellcollege/', imageUrl: media('ig-post-2.png'), caption: 'transcending the game #LiveGrinnellian...', timestamp: now - 7 * DAY },
      { url: 'https://www.instagram.com/grinnellcollege/', imageUrl: media('ig-post-3.png'), caption: 'What was your First-Year Tutorial class? #...', timestamp: now - 14 * DAY },
    ],
  };
}

function tiktok(now) {
  return {
    connected: true,
    status: 'ok',
    account: {
      handle: '@grinnellcollege',
      profileUrl: 'https://www.tiktok.com/@grinnellcollege',
      avatarUrl: media('ig-avatar.png'),
    },
    posts: [
      { url: 'https://www.tiktok.com/@grinnellcollege', imageUrl: unsplash('1555854877-bab0e564b8d5'), caption: 'Dorm room tour 2026: what a Grinnell double really looks like', timestamp: now - 2 * DAY, views: 14200 },
      { url: 'https://www.tiktok.com/@grinnellcollege', imageUrl: unsplash('1606761568499-6d2451b23c66'), caption: 'Day in the life of a Grinnell first-year, from Tutorial to the Bear', timestamp: now - 5 * DAY, views: 45100 },
      { url: 'https://www.tiktok.com/@grinnellcollege', imageUrl: unsplash('1567521464027-f127ff144326'), caption: 'Dining hall tier list, ranked by people who eat there every day', timestamp: now - 8 * DAY, views: 8900 },
      { url: 'https://www.tiktok.com/@grinnellcollege', imageUrl: unsplash('1427504494785-3a9ca7044f45'), caption: 'Best study spots on campus during finals week', timestamp: now - 15 * DAY, views: 21600 },
    ],
  };
}

export function buildDemoData(state, now = Date.now()) {
  const ig = instagram(now);
  const tt = tiktok(now);
  const data = { schoolName: 'Grinnell College', instagram: ig, tiktok: tt };
  switch (state) {
    case 'ig': data.tiktok = { connected: false }; break;
    case 'tt': data.instagram = { connected: false }; break;
    case 'tt-error': tt.status = 'token_expired'; break;
    case 'ig-few': ig.posts = ig.posts.slice(0, 2); break;
    case 'none': data.instagram = { connected: false }; data.tiktok = { connected: false }; break;
  }
  return data;
}
