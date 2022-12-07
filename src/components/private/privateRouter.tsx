import React from 'react'
import { Navigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";

export const PrivateRouterLender = ({children }:any) => {
    const token =  localStorage.getItem('token')
    const convertStringToken = JSON.stringify(token)
    const decodedToken = jwt_decode<any>(convertStringToken)
    if (decodedToken?.role != 1) {
        <Navigate to="/"/> 
    }
    return children
};

export const PrivateRouterAdmin = ({children }:any) => {
    const token =  localStorage.getItem('token')
    const convertStringToken = JSON.stringify(token)
    const decodedToken = jwt_decode<any>(convertStringToken)
    if (decodedToken?.role != 2) {
        <Navigate to="/"/> 
    }
    return children
};
// const PrivateRouter = async (props: PrivateRouterProps) => {
//     console.log(props?.children)
//     // console.log(props?.children[0])
// 	// const token = await localStorage.getItem('token')
//     // const convertStringToken = await JSON.stringify(token)
//     // const decodedToken = jwt_decode<any>(convertStringToken)
//     // console.log(decodedToken?.role)
// 	// if (decodedToken?.role == 1) {
//     //     const data = await props.children   
//     //     console.log(data)
// 	// }
//     return <div>{props?.children}</div>
// }
