import { URL_API } from '../../App/config'
import { AxiosPost } from '../../helper/axiosHelper'

export const loginUser = async data => {
  try {
    let result = null
    result = await AxiosPost(`${URL_API}`, `api/login`, data)
    return [result, null]
  } catch (error) {
    return [null, error]
  }
}
