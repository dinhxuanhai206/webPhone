import axios from "axios";

const sendRequest = axios.create({
    baseURL: "http://localhost:5050",
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    }
})

// =========================== GET METHOD =============================== //
const get = async (path="",options = {}) => {
    const response = await sendRequest.get('/api' + path, options)
    return response.data
}


// =========================== POST METHOD =============================== //
const post = async (path="",data = {}, options = {}) => {
    const response = await sendRequest.post('/api' + path, data, options)
    return response.data
}

export {get, post}
export default sendRequest