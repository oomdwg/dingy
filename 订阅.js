export default {
  async fetch(request) {
    let url = new URL(request.url);
    url.hostname = 'v2node.aby8.de';
    return fetch(new Request(url, request));
  },
};
