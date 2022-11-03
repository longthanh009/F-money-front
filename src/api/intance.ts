import axios from "axios";
const intance = axios.create({
    baseURL:"http://localhost:9000/api",
    
})
export default intance