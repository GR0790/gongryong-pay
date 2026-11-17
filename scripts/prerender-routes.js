// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + 구조화 데이터 + noscript 안내문 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로, 페이지 제목과 요지를 읽을 수 있습니다.
//
// 주의: 이 스크립트는 <head>의 메타태그와 </head> 앞 구조화 데이터,
//       <!--seo-noscript-start--> ~ <!--seo-noscript-end--> 구간만 다룹니다.
//       디자인(클래스·CSS)·GTM/Google Ads(AW-)·채널톡 식별 로직은 건드리지 않습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--ob0b39t2wlgzl.com';
const BRAND = '공룡페이';

const ROUTE_META = {
  '/services/gift-card': {
    title: '상품권 매입 | 발행사·잔액 확인 후 절차 안내 | 공룡페이',
    description:
      '모바일 상품권과 기프트카드를 맡길 때 먼저 확인해야 할 항목을 정리했습니다. 발행사와 잔액, 남은 기간, 명의 등록 여부를 확인한 뒤 조건과 절차를 안내합니다.',
    crumbs: [['공룡페이', '/'], ['상품권 매입', '/services/gift-card/']],
  },
  '/services/micropayment': {
    title: '휴대폰 소액결제 상품권 구매 | 한도·절차 안내 | 공룡페이',
    description:
      '휴대폰 소액결제로 모바일 상품권과 디지털 이용권을 구매하는 절차를 안내합니다. 통신사 한도와 본인 인증, 청구 시점을 확인한 뒤 진행합니다.',
    crumbs: [['공룡페이', '/'], ['휴대폰 소액결제', '/services/micropayment/']],
  },
  '/services/credit-card': {
    title: '신용카드 상품권 구매 | 결제·할부 안내 | 공룡페이',
    description:
      '신용카드 결제와 할부로 모바일 상품권을 구매하는 절차를 안내합니다. 카드 승인 조건과 할부 개월, 수수료를 포함한 총액을 확인한 뒤 진행합니다.',
    crumbs: [['공룡페이', '/'], ['신용카드 구매', '/services/credit-card/']],
  },
  '/services/information-fee': {
    title: '정보이용료 게임재화 구매 | 계정·한도 안내 | 공룡페이',
    description:
      '휴대폰 정보이용료 결제로 게임 재화와 디지털 아이템을 구매하는 절차를 안내합니다. 스토어 계정과 한도, 환불 기준을 확인한 뒤 진행합니다.',
    crumbs: [['공룡페이', '/'], ['정보이용료 · 게임재화', '/services/information-fee/']],
  },
  '/how-to-use': {
    title: '이용 절차 — 접수부터 진행 확인까지 | 공룡페이',
    description:
      '상담 접수, 보유·결제 정보 확인, 가능 범위 계산, 조건 안내, 동의 후 진행까지 다섯 단계로 정리한 이용 절차입니다.',
    crumbs: [['공룡페이', '/'], ['이용 절차', '/how-to-use/']],
  },
  '/faq': {
    title: '자주 묻는 질문 | 공룡페이',
    description:
      '상담 이용 방법, 상품권 매입 조건, 휴대폰·카드 결제, 정보이용료 게임재화, 개인정보 처리까지 자주 묻는 질문을 정리했습니다.',
    crumbs: [['공룡페이', '/'], ['자주 묻는 질문', '/faq/']],
  },
  '/blog': {
    title: '이야기 — 상품권과 결제 절차 정리 | 공룡페이',
    description:
      '상품권 잔액 확인, 휴대폰 결제 한도, 카드 할부 총액, 정보이용료 계정 확인까지. 상담 전에 알아두면 좋은 내용을 정리했습니다.',
    crumbs: [['공룡페이', '/'], ['이야기', '/blog/']],
  },
  '/contact': {
    title: '상담 — 채널톡 1:1 문의 | 공룡페이',
    description:
      '공룡페이 상담 안내. 상담 버튼을 누르면 성함과 연락처를 한 번 확인한 뒤 채널톡 1:1 상담으로 바로 연결됩니다.',
    crumbs: [['공룡페이', '/'], ['상담', '/contact/']],
  },
  '/privacy': {
    title: '개인정보처리방침 | 공룡페이',
    description: '공룡페이 개인정보처리방침. 상담 과정에서 확인하는 정보의 항목과 목적, 보유 기간, 이용자의 권리를 안내합니다.',
    crumbs: [['공룡페이', '/'], ['개인정보처리방침', '/privacy/']],
  },
  '/terms': {
    title: '이용약관 | 공룡페이',
    description: '공룡페이 이용약관. 상담 서비스의 성격과 이용 조건, 이용자의 의무, 책임의 범위를 안내합니다.',
    crumbs: [['공룡페이', '/'], ['이용약관', '/terms/']],
  },
};

// blogPosts.ts의 모든 글의 프리렌더 라우트를 자동으로 채웁니다.
const postsFile = path.resolve(process.cwd(), 'src/data/blogPosts.ts');
if (fs.existsSync(postsFile)) {
  const postsSource = fs.readFileSync(postsFile, 'utf-8');
  let added = 0;
  for (const block of postsSource.split(/sys: \{ id: "post-/).slice(1)) {
    const idMatch = block.match(/id:\s*(\d+)/);
    if (!idMatch) continue;
    const id = Number(idMatch[1]);
    const route = '/blog/' + id;
    if (ROUTE_META[route]) continue;
    const titleMatch = block.match(/title:\s*"((?:[^"\\]|\\.)*)"/);
    const descMatch = block.match(/summary:\s*"((?:[^"\\]|\\.)*)"/) || block.match(/excerpt:\s*"((?:[^"\\]|\\.)*)"/);
    const postTitle = titleMatch ? titleMatch[1] : '이야기';
    ROUTE_META[route] = {
      title: postTitle + ' | ' + BRAND,
      description: descMatch ? descMatch[1].slice(0, 150) : '',
      crumbs: [[BRAND, '/'], ['이야기', '/blog/'], [postTitle, route + '/']],
    };
    added++;
  }
  if (added > 0) console.log('Added ' + added + ' blog routes from blogPosts.ts');
}

// 사이트 안내 링크(noscript 블록 하단에 붙는 내부 링크). 크롤러가 JS 없이도 경로를 찾도록 돕습니다.
const NAV_LINKS = [
  ['상품권 매입', '/services/gift-card/'],
  ['휴대폰 소액결제', '/services/micropayment/'],
  ['신용카드 구매', '/services/credit-card/'],
  ['정보이용료 게임재화', '/services/information-fee/'],
  ['이용 절차', '/how-to-use/'],
  ['자주 묻는 질문', '/faq/'],
  ['이야기', '/blog/'],
  ['상담', '/contact/'],
];

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// 라우트 → 최종 URL. 루트는 "/" 하나만, 나머지는 항상 끝에 "/" (canonical·sitemap과 같은 형태)
function pageUrl(route) {
  return route === '/' || route === '' ? SITE + '/' : SITE + route + '/';
}

// <meta name|property="key" content="..."> 값을 태그 서식(줄바꿈·속성 순서)에 상관없이 교체
function setMetaContent(html, key, value) {
  return html.replace(/<meta\b[^>]*>/gi, (tag) => {
    const keyMatch = tag.match(/(?:name|property)\s*=\s*"([^"]*)"/i);
    if (!keyMatch || keyMatch[1] !== key) return tag;
    if (/\bcontent\s*=\s*"/i.test(tag)) {
      return tag.replace(/(\bcontent\s*=\s*")[^"]*(")/i, '$1' + value + '$2');
    }
    return tag.replace(/\s*\/?>$/, (end) => ' content="' + value + '"' + end);
  });
}

function setCanonical(html, url) {
  return html.replace(/<link\b[^>]*rel\s*=\s*"canonical"[^>]*>/gi, (tag) => {
    if (/\bhref\s*=\s*"/i.test(tag)) return tag.replace(/(\bhref\s*=\s*")[^"]*(")/i, '$1' + url + '$2');
    return tag.replace(/\s*\/?>$/, (end) => ' href="' + url + '"' + end);
  });
}

function breadcrumbLd(crumbs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c[0], item: SITE + c[1],
    })),
  });
}

function serviceLd(name, description) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: name,
    serviceType: name,
    description: description,
    areaServed: { '@type': 'Country', name: 'KR' },
    provider: {
      '@type': 'Organization',
      name: BRAND,
      url: SITE + '/',
    },
  });
}

// FAQ 페이지의 질문/답변을 페이지 소스에서 그대로 읽어 FAQPage 구조화 데이터를 만듭니다.
// (답변이 JSX로 되어 있는 항목은 건너뛰고, 문자열로 된 항목만 넣습니다.)
function readFaqPairs(file) {
  if (!fs.existsSync(file)) return [];
  const source = fs.readFileSync(file, 'utf-8');
  const re = /q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*\n?\s*a:\s*"((?:[^"\\]|\\.)*)"/g;
  const pairs = [];
  let m;
  while ((m = re.exec(source)) !== null) {
    const q = m[1].replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();
    const a = m[2].replace(/\\"/g, '"').replace(/\\n/g, ' ').trim();
    if (q && a) pairs.push({ q, a });
  }
  return pairs;
}

const faqLd = () => {
  const pairs = readFaqPairs(path.resolve(process.cwd(), 'src/pages/FAQ.tsx'));
  if (pairs.length === 0) return null;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pairs.map((p) => ({
      '@type': 'Question',
      name: p.q,
      acceptedAnswer: { '@type': 'Answer', text: p.a },
    })),
  });
};

// JS를 실행하지 않는 환경에서 보이는 최소 안내문 (디자인 CSS를 쓰지 않고 인라인 스타일만 사용)
function noscriptBlock(route, heading, description) {
  const selfPath = route === '/' ? '/' : route + '/';
  const links = NAV_LINKS
    .filter(([, href]) => href !== selfPath)
    .map(([label, href]) => `          <li><a href="${href}">${esc(label)}</a></li>`)
    .join('\n');
  return `<!--seo-noscript-start-->
    <noscript>
      <div style="max-width: 720px; margin: 56px auto; padding: 0 24px; font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif; color: #0b1020; line-height: 1.75">
        <h1 style="font-size: 24px; font-weight: 700; margin: 0 0 12px">${esc(heading)}</h1>
        <p style="margin: 0 0 18px; color: #48536b">${esc(description)}</p>
        <p style="margin: 0 0 6px; font-size: 13px; font-weight: 600; color: #334155">바로가기</p>
        <ul style="margin: 0; padding-left: 18px; font-size: 14px">
${links}
        </ul>
        <p style="margin: 18px 0 0; font-size: 13px; color: #6e7789">${esc(BRAND)} · 채널톡 1:1 상담 24시간 접수 · 전화 010-2138-0790</p>
      </div>
    </noscript>
    <!--seo-noscript-end-->`;
}

function inject(html, route, m) {
  const title = esc(m.title);
  const desc = esc(m.description);
  const url = pageUrl(route);
  const heading = m.crumbs[m.crumbs.length - 1][0];
  let out = html;

  out = out.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
  out = setMetaContent(out, 'description', desc);
  out = setCanonical(out, url);
  out = setMetaContent(out, 'og:title', title);
  out = setMetaContent(out, 'og:description', desc);
  out = setMetaContent(out, 'og:url', url);
  out = setMetaContent(out, 'twitter:title', title);
  out = setMetaContent(out, 'twitter:description', desc);

  // 구조화 데이터: BreadcrumbList + (서비스 안내 페이지) Service + (FAQ 페이지) FAQPage
  const blocks = ['<script type="application/ld+json">' + breadcrumbLd(m.crumbs) + '<\/script>'];
  if (route.startsWith('/services/')) {
    blocks.push('<script type="application/ld+json">' + serviceLd(heading, m.description) + '<\/script>');
  }
  if (route === '/faq') {
    const faq = faqLd();
    if (faq) blocks.push('<script type="application/ld+json">' + faq + '<\/script>');
  }
  out = out.replace('</head>', blocks.join('\n    ') + '</head>');

  // noscript 안내문: 홈페이지에 심어둔 구간을 라우트별 문구로 교체
  const block = noscriptBlock(route, heading, m.description);
  if (/<!--seo-noscript-start-->[\s\S]*?<!--seo-noscript-end-->/.test(out)) {
    out = out.replace(/<!--seo-noscript-start-->[\s\S]*?<!--seo-noscript-end-->/, block);
  } else {
    out = out.replace('<div id="root"></div>', '<div id="root"></div>\n    ' + block);
  }
  return out;
}

let count = 0;
for (const [route, m] of Object.entries(ROUTE_META)) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), inject(indexHtml, route, m));
  count++;
}
console.log('Prerendered ' + count + ' routes with static meta, structured data and noscript body.');
