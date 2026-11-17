import type React from "react";
import type { ServiceIcon as ServiceIconName } from "../data/services";

const paths: Record<ServiceIconName, React.ReactNode> = {
  voucher: (
    <>
      <path
        d="M3 7.6a1.8 1.8 0 0 1 1.8-1.8h14.4A1.8 1.8 0 0 1 21 7.6v1.8a2.6 2.6 0 0 0 0 5.2v1.8a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 16.4v-1.8a2.6 2.6 0 0 0 0-5.2V7.6Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M9.4 9.2v5.6" stroke="currentColor" strokeWidth="1.3" strokeDasharray="1.6 2" />
      <path d="M12.6 11.1h4.6M12.6 13.4h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  phone: (
    <>
      <rect x="7.1" y="2.8" width="9.8" height="18.4" rx="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.6 5.4h2.8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path
        d="M10.4 10.4v1.8M10.4 14.6v1.8M13.6 10.4v1.8M13.6 14.6v1.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </>
  ),
  card: (
    <>
      <rect x="2.8" y="5.6" width="18.4" height="12.8" rx="2.2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M2.8 9.8h18.4" stroke="currentColor" strokeWidth="2.2" opacity="0.45" />
      <rect x="5.8" y="12.6" width="4.2" height="3.2" rx="1" stroke="currentColor" strokeWidth="1.1" />
      <path d="M13.6 14.8h4.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </>
  ),
  game: (
    <>
      <path
        d="M8.2 8.4h7.6a4.6 4.6 0 0 1 4.5 3.7l.6 3.1a2.5 2.5 0 0 1-4.5 1.9l-1.5-2.1H9.1l-1.5 2.1a2.5 2.5 0 0 1-4.5-1.9l.6-3.1a4.6 4.6 0 0 1 4.5-3.7Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M8.2 11.4v3M6.7 12.9h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="15.1" cy="12.1" r="1" fill="currentColor" />
      <circle cx="17.3" cy="13.9" r="1" fill="currentColor" />
    </>
  ),
};

export const ServiceIcon: React.FC<{ name: ServiceIconName; className?: string }> = ({
  name,
  className = "h-6 w-6",
}) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    {paths[name]}
  </svg>
);

/** 헤더·푸터 상단의 작은 링크 표시 */
export const ArrowGlyph: React.FC<{ className?: string }> = ({ className = "h-3 w-3" }) => (
  <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
    <path d="M1 6h9M6.5 2l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);
