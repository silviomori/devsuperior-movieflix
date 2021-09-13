export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'ds-movieflix';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'ds-movieflix-123';
export const basicHeader = () =>
  'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET);
