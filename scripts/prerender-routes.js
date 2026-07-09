// 각 라우트에 index.html을 복사해 GitHub Pages가 HTTP 200으로 응답하도록 만듭니다.
// (SPA 딥링크가 404를 반환하는 문제 해결 - 구글 광고/SEO 크롤러 대응)
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');

const routes = [
  '/services/micropayment',
  '/services/information-fee',
  '/services/credit-card',
  '/services/gift-card',
  '/how-to-use',
  '/reviews',
  '/faq',
  '/safety',
  '/blog',
  '/blog/1',
  '/blog/2',
  '/blog/3',
  '/contact',
  '/privacy',
  '/terms',
];

let count = 0;
for (const route of routes) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtml);
  count++;
}
console.log(`Prerendered ${count} route HTML files (HTTP 200 for deep links).`);
