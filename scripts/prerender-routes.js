// 각 라우트에 index.html 복사 + 라우트별 정적 메타(title/desc/canonical/OG) + BreadcrumbList 스키마 주입
// JS를 실행하지 않는 크롤러(네이버 등)도 페이지별 고유 메타와 경로를 읽을 수 있습니다.
import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const indexHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const SITE = 'https://xn--ob0b39t2wlgzl.com';

const ROUTE_META = {
  "/services/micropayment": {
    "title": "소액결제 현금화 80% 수수료 싼곳 | 공룡페이",
    "description": "휴대폰 소액결제 현금화, 미납 정책 99.9% 승인! 업계 최저 수수료와 3분 입금을 보장하는 공룡페이 공식 안내 페이지입니다. SKT, KT, LGU+ 모두 가능합니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "소액결제 현금화",
        "/services/micropayment/"
      ]
    ]
  },
  "/services/information-fee": {
    "title": "정보이용료 현금화 콘텐츠이용료 현금화 수수료 싼곳 | 공룡페이",
    "description": "정보이용료 현금화, 콘텐츠이용료 현금화 전문! 구글 정보이용료 미납 한도 100% 현금화 가능. SKT KT LGU+ 수수료 최저가, 3분 즉시 입금 공룡페이입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "정보이용료 현금화",
        "/services/information-fee/"
      ]
    ]
  },
  "/services/credit-card": {
    "title": "신용카드 현금화 카드깡 아님 수수료 싼곳 88% 보장 | 공룡페이",
    "description": "신용카드 현금화, 카드깡 절대 아님! 합법적인 결제 한도 현금화 서비스. 수수료 싼곳, 지급률 88% 보장. 삼성/신한/현대 등 전 카드사 3분 즉시 입금 공룡페이.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "신용카드 현금화",
        "/services/credit-card/"
      ]
    ]
  },
  "/services/gift-card": {
    "title": "상품권 현금화 문화상품권 해피머니 85% 보장 수수료 싼곳 | 공룡페이",
    "description": "상품권 현금화 업계 최고가 매입! 문화상품권, 해피머니, 신세계상품권, 도서문화상품권 현금화. 24시간 5분 즉시 입금, 수수료 싼곳 공룡페이입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "상품권 현금화",
        "/services/gift-card/"
      ]
    ]
  },
  "/how-to-use": {
    "title": "이용 방법 - 소액결제현금화 4단계 안내 | 공룡페이",
    "description": "공룡페이 소액결제현금화 이용 방법. 상담 신청부터 3분 즉시입금까지 간단 4단계. 소액결제·정보이용료·신용카드·상품권 현금화 이용 가이드.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "이용 방법",
        "/how-to-use/"
      ]
    ]
  },
  "/reviews": {
    "title": "고객 후기 | 공룡페이",
    "description": "공룡페이 실제 고객 후기 1,247건. 소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화 서비스 평균 평점 4.8점. 3분 입금, 24시간 상담 만족 후기를 확인하세요.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "고객 후기",
        "/reviews/"
      ]
    ]
  },
  "/faq": {
    "title": "자주묻는질문 (FAQ) | 공룡페이",
    "description": "소액결제현금화, 정보이용료현금화, 신용카드현금화, 상품권현금화에 대한 자주묻는질문. 미납 99.9% 승인, 3분 입금, 지급률, 이용방법, 안전성 등 공룡페이의 모든 궁금증을 해결해드립니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "자주묻는질문",
        "/faq/"
      ]
    ]
  },
  "/safety": {
    "title": "안전 거래 시스템 - 100% 안전보장 | 공룡페이",
    "description": "공룡페이 안전 거래 시스템. 정식 사업자 등록, 개인정보 보호, 100% 안전거래 보장으로 소액결제현금화를 안심하고 이용하세요.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "안전 거래 안내",
        "/safety/"
      ]
    ]
  },
  "/blog": {
    "title": "정보 블로그 - 소액결제현금화 최신 정보 | 공룡페이",
    "description": "소액결제현금화, 정보이용료·신용카드·상품권 현금화 최신 정보와 한도·수수료·안전 이용 가이드를 공룡페이 블로그에서 확인하세요.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ]
    ]
  },
  "/contact": {
    "title": "상담센터 - 24시간 1:1 문의 | 공룡페이",
    "description": "공룡페이 소액결제현금화 24시간 1:1 상담센터. 전화·채팅으로 언제든 문의하세요. 3분 즉시입금, 미납·정책 99.9% 승인 상담 안내.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "상담센터",
        "/contact/"
      ]
    ]
  },
  "/privacy": {
    "title": "개인정보처리방침 | 공룡페이",
    "description": "공룡페이 개인정보처리방침. 고객님의 개인정보 수집·이용·보관·파기에 관한 안내입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "개인정보처리방침",
        "/privacy/"
      ]
    ]
  },
  "/terms": {
    "title": "이용약관 | 공룡페이",
    "description": "공룡페이 소액결제현금화 서비스 이용약관 안내입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "이용약관",
        "/terms/"
      ]
    ]
  },
  "/blog/1": {
    "title": "컬쳐랜드·해피머니·문화상품권 차이점과 사용처 완벽 정리 | 공룡페이",
    "description": "컬쳐랜드·해피머니·문화상품권의 발행사·사용처·전환방식 차이와 잔액 확인, 안전 이용 팁까지 정리한 상품권 완벽 가이드입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "컬쳐랜드·해피머니·문화상품권 차이점과 사용처 완벽 정리",
        "/blog/1/"
      ]
    ]
  },
  "/blog/2": {
    "title": "구글플레이 기프트카드 구매하고 게임·앱에 사용하는 방법 | 공룡페이",
    "description": "구글플레이 기프트카드 구매처, 코드 등록 방법, 게임·앱 결제 사용법과 지역 제한·사기 예방 등 주의사항을 정리한 가이드입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "구글플레이 기프트카드 구매하고 게임·앱에 사용하는 방법",
        "/blog/2/"
      ]
    ]
  },
  "/blog/3": {
    "title": "휴대폰 소액결제 안전하게 쓰는 법 — 스미싱·명의도용 예방 | 공룡페이",
    "description": "소액결제 스미싱·명의도용 예방 체크리스트와 안전 이용 습관, 결제 차단 방법, 사고 의심 시 대처법을 정리한 안전 가이드입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "휴대폰 소액결제 안전하게 쓰는 법 — 스미싱·명의도용 예방",
        "/blog/3/"
      ]
    ]
  },
  "/blog/4": {
    "title": "모바일 기프티콘·상품권 선물하는 방법과 유효기간·환불 규정 | 공룡페이",
    "description": "모바일 기프티콘 선물 방법, 유효기간 연장 신청, 기간 만료 시 90% 환불 규정과 잔액형 상품권 환불 기준까지 정리한 가이드입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "모바일 기프티콘·상품권 선물하는 방법과 유효기간·환불 규정",
        "/blog/4/"
      ]
    ]
  },
  "/blog/5": {
    "title": "정보이용료(콘텐츠이용료) 결제 차단·해제 방법 — 통신사별 정리 | 공룡페이",
    "description": "통신사별 정보이용료 차단·해제 신청 방법, 월 한도 설정, 구독 자동결제 정리, 미성년 자녀 결제 보호 설정까지 정리한 관리 가이드입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "정보이용료(콘텐츠이용료) 결제 차단·해제 방법 — 통신사별 정리",
        "/blog/5/"
      ]
    ]
  },
  "/blog/6": {
    "title": "상품권 완전 정복 — 종류별 특징·구매처·사용법·환불 규정 A to Z | 공룡페이",
    "description": "지류·온라인·모바일 상품권의 종류별 특징, 안전한 구매처, 핀번호 등록·잔액 관리, 유효기간·90% 환불 규정, 사기 예방 체크리스트와 FAQ까지 담은 완전 가이드입니다.",
    "crumbs": [
      [
        "공룡페이",
        "/"
      ],
      [
        "정보 블로그",
        "/blog/"
      ],
      [
        "상품권 완전 정복 — 종류별 특징·구매처·사용법·환불 규정 A to Z",
        "/blog/6/"
      ]
    ]
  }
};

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
  out = out.replace(/(<meta name="description" content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<link rel="canonical" href=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta property="og:title" content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta property="og:description" content=")[^"]*(")/, '$1' + desc + '$2');
  out = out.replace(/(<meta property="og:url" content=")[^"]*(")/, '$1' + url + '$2');
  out = out.replace(/(<meta name="twitter:title" content=")[^"]*(")/, '$1' + title + '$2');
  out = out.replace(/(<meta name="twitter:description" content=")[^"]*(")/, '$1' + desc + '$2');
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
