export const isAuthenticate = () => {
    if(!localStorage.getItem('persist:root')) return
    else {
    const user = JSON.parse(localStorage.getItem('persist:root'))
    return JSON.parse(user.auth)
    }
}