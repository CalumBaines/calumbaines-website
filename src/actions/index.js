import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const FETCH_CASESTUDIES = 'FETCH_CASESTUDIES';
export const FETCH_CASESTUDY = 'FETCH_CASESTUDY';
export const FETCH_ASSET = 'FETCH_ASSET';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'aj39ebymekt3';
const API_TOKEN = '11bc9f9aa11b9f45d2ff81349bee533258de05d32a32fb9a20bbf6b660396e4b';


export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blogPost&order=sys.createdAt`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchPost(slug) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blogPost&fields.slug=${slug}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

export function fetchCaseStudies() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=caseStudy&order=sys.createdAt`);
  return {
    type: FETCH_CASESTUDIES,
    payload: request
  };
}

export function fetchCaseStudy(slug) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=caseStudy&fields.slug=${slug}`);
  return {
    type: FETCH_CASESTUDY,
    payload: request
  };
}

export function fetchAsset(id) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/assets/${id}?access_token=${API_TOKEN}`);
  return {
    type: FETCH_ASSET,
    payload: request
  };
}
