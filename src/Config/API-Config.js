let url1;
let url2;
let host;

const hostname = window && window.location && window.location.hostname;
if (hostname === "localhost") {
  url1 = "http://localhost:8080";
}

host = url1;

export const API_BASE_URL = `${host}`;