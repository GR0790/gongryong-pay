import fs from 'fs';
import path from 'path';
// 1. 'contentful' 라이브러리에서 'createClient'만 명시적으로 가져옵니다.
import { createClient } from 'contentful';
import dotenv from 'dotenv';

// .env.local 파일에서 환경 변수를 로드합니다.
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

// 콘텐트풀 클라이언트를 생성합니다.
// 1-1. 'contentful.createClient'가 아닌 'createClient'를 바로 사용합니다.
const client = createClient({
  space: process.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

async function generateSitemap() {
  console.log('Fetching blog posts from Contentful for sitemap...');
  
  // 콘텐트풀에서 모든 블로그 글의 ID를 가져옵니다.
  const entries = await client.getEntries({
    content_type: 'blogPost',
    select: ['fields.id'], // 필요한 필드만 가져와서 속도를 높입니다.
    limit: 1000 // 최대 1000개의 포스트를 가져옵니다.
  });

  const blogPostIds = entries.items.map(item => item.fields.id);
  console.log(`Found ${blogPostIds.length} blog posts.`);

  // 2. 마크다운 링크 형식이 아닌, 실제 URL 주소를 사용합니다.
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
  // 2-1. xmlns 속성에도 실제 URL 주소를 사용합니다.
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

  console.log('Sitemap has been generated successfully with latest blog posts!');
}

generateSitemap().catch(console.error);
