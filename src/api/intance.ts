import axios from "axios";
const intance = axios.create({
    baseURL:"http://localhost:9000/api",
    headers: {
        "Content-Type": "application/json"
    }
})
export default intance