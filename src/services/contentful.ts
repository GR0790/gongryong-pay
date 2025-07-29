import { createClient } from 'contentful';

// .env.local 파일에 저장된 API 키를 안전하게 불러옵니다.
const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string,
});

export default client;
