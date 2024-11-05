export default defineAppConfig({
  title: 'Kaizen Shortlink',
  email: 'contact@kaizenapps.com',
  twitter: 'https://x.com/kaizen_apps',
  github: 'https://github.com/kaizenapps',
  telegram: 'https://t.me/kaizenapps',
  mastodon: 'https://mastodon.social/@kaizenapps',
  blog: 'https://kaizenapps.com/blog/',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
