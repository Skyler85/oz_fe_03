import axios from "axios";

const instance = axios.create({
    baseURL: process.env.MOVIE_DB_URL,
    params: {
        api_key: process.env.MOVIE_DB_API_KEY,
        language: "ko-KR",
    }
});

export default instance;