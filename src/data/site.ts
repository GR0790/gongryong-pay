import { services } from "./services";

export const site = {
  name: "공룡페이",
  nameEn: "Gongryong Pay",
  tagline: "상품권 · 결제 절차 안내",
  phone: "010-2138-0790",
  phoneHref: "tel:01021380790",
  hours: "24시간 연중무휴",
  hoursNote: "채널톡 1:1 상담",
  url: "https://xn--ob0b39t2wlgzl.com",
  channelPluginKey: "66c596c9-3225-4678-b746-0c024efd6f01",
  year: 2026,
};

export interface NavItem {
  label: string;
  to: string;
  children?: { label: string; to: string; desc: string }[];
}

export const nav: NavItem[] = [
  {
    label: "이용 안내",
    to: "/services/gift-card",
    children: services.map((s) => ({
      label: s.nav,
      to: s.slug,
      desc: s.cardKicker,
    })),
  },
  { label: "이용 절차", to: "/how-to-use" },
  { label: "이야기", to: "/blog" },
  { label: "FAQ", to: "/faq" },
  { label: "상담", to: "/contact" },
];
