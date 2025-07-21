/// <reference types="vite/client" />

declare global {
  interface Window {
    // biome-ignore lint/suspicious/noExplicitAny: ChannelIO is an external library
    ChannelIO: any;
  }
}
