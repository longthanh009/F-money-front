import jwt_decode from "jwt-decode";

export const formatDate = (dateString: Date) => {
    const date = new Date(dateString || "");
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
export const getTokenUser = () => {
    const token =  localStorage.getItem('token')
    const convertStringToken = JSON.stringify(token)
    const decodedToken = jwt_decode<any>(convertStringToken)
    return decodedToken;
};