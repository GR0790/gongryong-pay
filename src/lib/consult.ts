/**
 * 채널톡 1:1 상담 연결.
 *
 * 실제 상담 흐름은 index.html의 인라인 스크립트(startConsult / submitUserInfo)가 담당합니다.
 * GTM(컨테이너 GTM-M2CFRWBD)의 커스텀 HTML 태그가 window.submitUserInfo 를 감싸
 * consultation_submit 이벤트를 push 하고 Google Ads 전환(AW-16536776533)을 발동시키므로,
 * 여기서는 그 함수들을 그대로 호출만 합니다. (이름·시그니처를 바꾸면 전환이 끊깁니다.)
 */
export const CHANNEL_PLUGIN_KEY = "66c596c9-3225-4678-b746-0c024efd6f01";

declare global {
  interface Window {
    startConsult?: () => void;
    closeModal?: () => void;
    submitUserInfo?: () => void;
    autoHyphen?: (target: HTMLInputElement) => void;
    checkValidation?: () => void;
    bootChannelAndShow?: (name: string, phone: string) => void;
    dataLayer?: Record<string, unknown>[];
    ChannelIO?: {
      (command: string, payload?: unknown, callback?: (error: unknown, user: unknown) => void): void;
      q?: unknown[];
    };
  }
}

/**
 * 상담 버튼의 단일 진입점.
 * 저장된 이름·번호가 있으면 채널톡만 열고, 없으면 이름·번호 입력 모달을 엽니다.
 */
export function openConsult() {
  if (typeof window === "undefined") return;

  if (typeof window.startConsult === "function") {
    window.startConsult();
    return;
  }

  // 예외: index.html 스크립트가 아직 준비되지 않은 경우 채널톡만 바로 엽니다.
  const ChannelIO = window.ChannelIO;
  if (typeof ChannelIO !== "function") return;
  ChannelIO(
    "boot",
    { pluginKey: CHANNEL_PLUGIN_KEY, hideChannelButtonOnBoot: true },
    () => ChannelIO("showMessenger"),
  );
}
