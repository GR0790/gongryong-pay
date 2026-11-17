// 사이트맵 생성: 블로그 글 목록은 src/data/blogPosts.ts에서 직접 읽어옵니다.
// (실제 글과 사이트맵이 항상 일치하도록 파일에서 계산합니다.)
//
// URL은 canonical과 같은 형태(끝에 "/")로 넣습니다. 끝 슬래시가 없으면 GitHub Pages가 301로
// 넘겨서, 검색엔진이 사이트맵의 모든 URL을 리디렉션으로만 만나게 됩니다.
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://xn--ob0b39t2wlgzl.com';

// 정적 페이지의 내용을 실제로 고쳤을 때만 이 날짜를 갱신합니다.
// (빌드할 때마다 오늘 날짜가 들어가면 검색엔진이 lastmod를 신뢰하지 않습니다.)
const CONTENT_UPDATED = '2026-11-18';

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

const withSlash = (page) => (page === '/' ? '/' : page.replace(/\/+$/, '') + '/');

const urls = [
  ...STATIC_PAGES.map((page) => ({
    loc: BASE_URL + withSlash(page),
    lastmod: CONTENT_UPDATED,
    changefreq: page === '/' ? 'weekly' : 'monthly',
    priority: page === '/' ? '1.0' : '0.8',
  })),
  ...posts.map((post) => ({
    loc: BASE_URL + '/blog/' + post.id + '/',
    lastmod: post.date || CONTENT_UPDATED,
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
console.log('Sitemap generated: ' + urls.length + ' URLs (' + posts.length + ' blog posts, lastmod ' + CONTENT_UPDATED + ', today ' + today + ').');
