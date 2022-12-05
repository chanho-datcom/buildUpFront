const REST_API_KEY="4bbaa0c25585670c114953b8376fda4d";
const REDIRECT_URI =  "http://localhost:8080/login/oauth2/code/kakao";
const AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;


export const KAKAO_AUTH_URL = `${AUTH_URL}`