import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP1234';

//const ROOT_URL = 'http://clientside-api.herokuapp.com/api/v1/listings';
//const API_KEY = 'd0aed402a00bd1c7188373ba8dd20aab';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/${API_KEY}`);
    console.log(request);
    return {
        type: FETCH_POSTS,
        payload: request,
    };

    console.log(request);
}

export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/${id}${API_KEY}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    }
}
