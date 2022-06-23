// user.js
import req from '@/service/axiosInstance'


// 取得會員資料 (try)
export const getUserInfoApi = (data) => {
  return req("post", 'api/selectOtcUserPublicByToken', data)
}
// 新增修改使用者暱稱
export const modifyNicknameApi = (data) => {
  return req("post", 'api/addModifyUserNickname', data)
}
// 實名認證狀態 0: 未提交 1: 審核中 2. 已完成 3. 已駁回
export const selectVerifiedApi = (data) => {
  return req("post", 'api/selectVerified', data)
}
// 實名認證
export const insertVerifiedApi = (data) => {
  return req("post", 'api/insertVerified', data)
}
// 實名認證身分證上傳  手持 type=0 正面 type=１ 反面 type=２
// export const verifiedUploadPhotosApi = (data) => {
//   return req("post", 'api/verifiedUploadPhotos', data)
// }
// 實名認證護照上傳    手持 type=0 正面 type=１
// export const verifiedUploadPhotosForPassportApi = (data) => {
//   return req("post", 'api/verifiedUploadPhotosForPassport', data)
// }
// 重設密碼
export const resetPasswordApi = (data) => {
  return req("post", 'api/resetPassword', data)
}
// 取得 Google Authenticator 金鑰
export const getGaKeyApi = (data) => {
  return req("post", 'wallet/user/getGaKey', data)
}
// 綁定 GA
export const bindGaApi = (data) => {
  return req("post", 'wallet/user/bindGa', data)
}
// 解除綁定 GA
export const cancelGaApi = (data) => {
  return req("post", 'wallet/user/cancelGa', data)
}
// 寄送 GA 信箱驗證碼(解除綁定)
export const sendCancelGaMailApi = (data) => {
  return req("post", 'wallet/user/sendCancelGaMail', data)
}
// 驗證 GA
export const checkGaApi = (data) => {
  return req("post", 'wallet/user/checkGa', data)
}
// GA 驗證狀態
export const getGaStatusApi = (data) => {
  return req("post", 'wallet/user/getGaStatus', data)
}
// 取得資產
export const getUserAssetsApi = (data) => {
  return req("post", 'wallet/user/getUserAssets', data)
}
// 取得財務紀錄
export const getUserFinancialRecordsApi = (data) => {
  return req("post", 'wallet/user/getUserFinancialRecords', data)
}
