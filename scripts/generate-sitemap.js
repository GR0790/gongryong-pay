import fs from 'fs';
import path from 'path';

// Node.js 환경에서 TypeScript 파일을 직접 실행하기 어려우므로,
// 텍스트로 읽어와서 정규식을 사용해 블로그 ID만 추출합니다.
const blogDataPath = path.resolve(process.cwd(), 'src/data/blogData.ts');
const blogDataContent = fs.readFileSync(blogDataPath, 'utf8');
const blogPostIds = [...blogDataContent.matchAll(/id: (\d+)/g)].map(match => match[1]);

const baseUrl = 'https://xn--ob0b39t2wlgzl.com';
const today = new Date().toISOString().split('T')[0];

// 블로그 외의 고정 페이지 목록
const staticPages = [
  '/',
  '/services/micropayment',
  '/services/information-fee',
  '/services/credit-card',
  '/services/gift-card',
  '/how-to-use',
  '/reviews',
  '/faq',
  '/safety',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
];

// XML 사이트맵 형식에 맞춰 문자열을 생성합니다.
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === '/' ? 'daily' : 'monthly'}</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${blogPostIds.map(id => `
  <url>
    <loc>${baseUrl}/blog/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
</urlset>`;

// 생성된 XML 문자열을 public/sitemap.xml 파일에 덮어씁니다.
const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml.trim());

console.log('Sitemap has been generated successfully!');
