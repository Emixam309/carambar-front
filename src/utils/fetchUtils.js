const BASE_URL = 'https://carambar-back-saob.onrender.com'

export const fetchApi = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return Promise.reject(response.status)
      }
    })
    .catch(error => {
      console.error("Error: ", error)
    })
}