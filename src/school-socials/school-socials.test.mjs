// Run: node --test src/school-socials/school-socials.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { selectNetworks, isNetworkAvailable, latestPosts, formatRelativeTime, formatViews } from './school-socials.js';

const NOW = Date.parse('2026-10-27T12:00:00Z');
const DAY = 86400000;
const post = (daysAgo, extra = {}) => ({ url: 'https://x.test/p', imageUrl: 'https://x.test/i.jpg', caption: 'c', timestamp: NOW - daysAgo * DAY, ...extra });
const feed = (n = 3, extra = {}) => ({ connected: true, status: 'ok', account: { handle: 'h', profileUrl: 'https://x.test' }, posts: Array.from({ length: n }, (_, i) => post(i)), ...extra });

test('both connected: Instagram first, TikTok second', () => {
  assert.deepEqual(selectNetworks({ instagram: feed(), tiktok: feed() }), ['instagram', 'tiktok']);
});

test('one connected: that network alone', () => {
  assert.deepEqual(selectNetworks({ instagram: { connected: false }, tiktok: feed() }), ['tiktok']);
  assert.deepEqual(selectNetworks({ instagram: feed() }), ['instagram']);
});

test('hide a network on < 3 posts, expired token or API error', () => {
  assert.equal(isNetworkAvailable(feed(2)), false);
  assert.equal(isNetworkAvailable(feed(3, { status: 'token_expired' })), false);
  assert.equal(isNetworkAvailable(feed(3, { status: 'error' })), false);
  assert.equal(isNetworkAvailable(feed(3, { posts: [post(0), post(1), { caption: 'no media' }] })), false);
  assert.deepEqual(selectNetworks({ instagram: feed(2), tiktok: feed() }), ['tiktok']);
});

test('neither available: nothing rendered', () => {
  assert.deepEqual(selectNetworks({}), []);
  assert.deepEqual(selectNetworks({ instagram: feed(1), tiktok: feed(3, { status: 'error' }) }), []);
});

test('latestPosts keeps the 3 most recent, newest first', () => {
  const posts = [post(10, { id: 'd' }), post(1, { id: 'b' }), post(0, { id: 'a' }), post(5, { id: 'c' })];
  assert.deepEqual(latestPosts(posts, NOW).map(p => p.id), ['a', 'b', 'c']);
});

test('formatRelativeTime', () => {
  assert.equal(formatRelativeTime(NOW - 3600000, NOW), 'Less than a day ago');
  assert.equal(formatRelativeTime(NOW - DAY, NOW), '1 day ago');
  assert.equal(formatRelativeTime(NOW - 5 * DAY, NOW), '5 days ago');
  assert.equal(formatRelativeTime(NOW - 7 * DAY, NOW), '1 week ago');
  assert.equal(formatRelativeTime(NOW - 14 * DAY, NOW), '2 weeks ago');
  assert.equal(formatRelativeTime(NOW - 60 * DAY, NOW), '2 months ago');
  assert.equal(formatRelativeTime(NOW - 400 * DAY, NOW), '1 year ago');
  assert.equal(formatRelativeTime(new Date(NOW - 2 * DAY).toISOString(), NOW), '2 days ago');
});

test('formatViews', () => {
  assert.equal(formatViews(950), '950');
  assert.equal(formatViews(8900), '8.9K');
  assert.equal(formatViews(14200), '14.2K');
  assert.equal(formatViews(21000), '21K');
  assert.equal(formatViews(1250000), '1.2M');
  assert.equal(formatViews(undefined), '');
});
