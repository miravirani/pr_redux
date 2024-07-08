import { REQUEST_DETAIL_SUCCESS, REQUEST_START, REQUEST_SUCCESS } from "./allAction";

export const requestStartAction = () => ({
    type: REQUEST_START,

})

export const requestSuccessAction = (data) => {
    return {
    type: REQUEST_SUCCESS,
    data: data
}}
// export const requestSuccessAction = async () => {
//     try {
//         const data = axios.get("https://6620acad3bf790e070b04045.mockapi.io/user/user").then((data) => {
//             return {
//                 type:REQUEST_SUCCESS,
//                 data: data.data
//             }
//         }).catch((err) => {
//             return{
//                 type:REQUEST_SUCCESS,
//                 err
//             }
//         })
        
//     } catch (error) {
//         return {
//             type: REQUEST_SUCCESS,
//             error
//         }
//     }
// }

export const requestDetailSuccessAction = (data) => ({
    type: REQUEST_DETAIL_SUCCESS,
    data: data
})