// 사이트맵 생성: 블로그 글 목록은 src/data/blogPosts.ts에서 직접 읽어옵니다.
// (실제 글과 사이트맵이 항상 일치하도록 파일에서 계산합니다.)
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://xn--ob0b39t2wlgzl.com';

// 블로그 외 고정 페이지 목록
const STATIC_PAGES = [
  '/',
  '/services/gift-card',
  '/services/micropayment',
  '/services/credit-card',
  '/services/information-fee',
  '/how-to-use',
  '/faq',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
];

function readBlogPosts() {
  const file = path.resolve(process.cwd(), 'src/data/blogPosts.ts');
  const src = fs.readFileSync(file, 'utf-8');
  return src
    .split(/sys: \{ id: "post-/)
    .slice(1)
    .map((block) => {
      const id = block.match(/id:\s*(\d+)/);
      const date = block.match(/date:\s*"([0-9]{4}-[0-9]{2}-[0-9]{2})"/);
      return id ? { id: Number(id[1]), date: date ? date[1] : null } : null;
    })
    .filter(Boolean);
}

const today = new Date().toISOString().split('T')[0];
const posts = readBlogPosts();

const urls = [
  ...STATIC_PAGES.map((page) => ({
    loc: BASE_URL + page,
    lastmod: today,
    changefreq: page === '/' ? 'weekly' : 'monthly',
    priority: page === '/' ? '1.0' : '0.8',
  })),
  ...posts.map((post) => ({
    loc: BASE_URL + '/blog/' + post.id,
    lastmod: post.date || today,
    changefreq: 'monthly',
    priority: '0.7',
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `
  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('')}
</urlset>`;

fs.writeFileSync(path.resolve(process.cwd(), 'public/sitemap.xml'), sitemapXml.trim());
console.log('Sitemap generated: ' + urls.length + ' URLs (' + posts.length + ' blog posts).');
