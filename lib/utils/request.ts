// @/utils/request.ts
import axios, { AxiosRequestConfig } from 'axios'
import { MyResponseType } from './response'


const instance = axios.create({
    baseURL: '/api'
})

const request = async <T = any>(config: AxiosRequestConfig): Promise<MyResponseType<T>> => {
    const { data } = await instance.request<MyResponseType<T>>(config)
    data.code === 0
        ? console.log(data.message) // 成功消息提示
        : console.error(data.message) // 失败消息提示
    return data
}


export default request


// request.interceptors.response.use((response) => {
//     const { data } = response
//     data.code === 0
//         ? console.log(data.message) // 成功消息提示
//         : console.error(data.message) // 失败消息提示
//     return data
// })



