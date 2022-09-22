import axios from 'axios'

export const AxiosPost = (url, path, data, headers = {}) => {
  const promise = new Promise((resolve, reject) => {
    axios
      .post(`${url}/${path}`, data, {
        headers: {
          ...headers,
          // Authorization: "Bearer " + localStorage.getItem("access_token"),
          Accept: 'application/json'
        }
      })
      .then(
        result => {
          resolve(result)
        },
        err => {
          reject(err)
        }
      )
  })
  return promise
}
