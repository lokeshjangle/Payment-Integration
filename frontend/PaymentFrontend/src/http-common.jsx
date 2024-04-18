import axios from 'axios';

export default axios.create({
    baseURL:"http://localhost:5000/api",
    // baseURL:"https://tangerine-salamander-0cfea6.netlify.app/api",
    headers: {
        'Content-Type' : "application/json",
    },
});