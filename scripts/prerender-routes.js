// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + BreadcrumbList 스키마 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로를 읽을 수 있습니다.
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

function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

function breadcrumbLd(crumbs) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem', position: i + 1, name: c[0], item: SITE + c[1],
    })),
  });
}

function inject(html, route, m) {
  const title = esc(m.title);
  const desc = esc(m.description);
  const url = SITE + route + '/';
  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, '<title>' + title + '</title>');
  // 메타 태그는 여러 줄로 쓰일 수 있어 속성 사이 공백을 허용합니다.
  out = out.replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, '$1' + desc + '$2');
  const bc = '<script type="application/ld+json">' + breadcrumbLd(m.crumbs) + '<\/script>';
  out = out.replace('</head>', bc + '</head>');
  return out;
}

let count = 0;
for (const [route, m] of Object.entries(ROUTE_META)) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), inject(indexHtml, route, m));
  count++;
}
console.log('Prerendered ' + count + ' routes with static meta + breadcrumbs.');
