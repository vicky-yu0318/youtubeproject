import axios from "axios"
// ==========================================================================
// https://ithelp.ithome.com.tw/articles/10230336
// 主設定
// axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

// baseURL是API的主要Domain
// console.log(process.env.VUE_APP_PATH)
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_PATH,
    // baseURL: process.env.BASE_URL || process.env.API_URL, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
  timeout: 120 * 1000 // request timeout
})

// axios 攔截器
// 根據不同 request 來添加不同的 config
axiosInstance.interceptors.request.use(
    // request 送出前攔截到此次的 config，讓你可以做最後的處理
    config => {
      return config
    },
    // request 發生錯誤時做一些額外的處理
    error => {
      return Promise.reject(error)
    }
)

// 攔截到 response 發生錯誤時的 error 處理
axiosInstance.interceptors.response.use(
    res => {
      return res
    },
    error => {
      if (error.response){
        switch (error.response.status) {
          case 401: // go to 401 pagebreak
            console.log("登入狀態有問題")
             /* falls through */
          case 404: // go to 404 pagebreak
            console.log("你要找的頁面不存在")
             /* falls through */
          case 500: // go to 500 pagebreak
            console.log("程式發生問題")
             /* falls through */
          default:
            console.log(error.message)
        }
      }
    //   response 回應錯誤時做相關的處理，例如導頁
      if (!window.navigator.onLine) {
        alert("網路出了點問題，請重新連線後重整網頁");
        return;
      }
      return Promise.reject(error)
    }
  )

// error Expected a 'break' statement before 'case'
// 解法: 加falls through
// 可以把實體 export 出去就可以使用了，但為了更有系統性的管理後端提供的API，我們可以設計成 function 再 export 出去。
export default function(method, url, data = null, config) {
  method = method.toLowerCase();
  switch (method) {
    // case "post":
    //   return axiosInstance.post(url, data, config);
    case "post":
      return axiosInstance({method: 'post', url, params: data, config}); // 使用 query string parameters
     /* falls through */
    case "get":
      return axiosInstance.get(url, { params: data });
     /* falls through */
    case "delete":
      return axiosInstance.delete(url, { params: data });
     /* falls through */
    case "put":
      return axiosInstance.put(url, data);
     /* falls through */
    case "patch":
      return axiosInstance.patch(url, data);
     /* falls through */
    default:
      console.log(`未知的 method: ${method}`);
      return false;
     /* falls through */
  }
}