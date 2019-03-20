import { getLogger } from 'domain/logger';
const logger = getLogger('Middleware/network');

function genQueryParams(params) {
  return Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
}


export function _fetch(url:string, options:any, queryParams:any) {
  if(queryParams) {
      url += (url.indexOf('?') === -1 ? '?' : '&') + genQueryParams(queryParams);
  }
  return fetch(url, options);
}

const url =  `https://dialogflow-diagnose.now.sh/chat/`

export async function postMessage(message) {
  const r = await fetch(`${url}${message}`, { method: 'GET'})
  return r.json();
}