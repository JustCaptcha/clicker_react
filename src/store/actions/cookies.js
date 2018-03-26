export const saveCookies = (state) => {
    return {
        type: 'COOKIES_SAVE',
        payload: state,
    }
}
export const loadCookies = () => {
    return {
        type: 'COOKIES_LOAD'
    }
}
export const deleteCookies = () => {
    return {
        type: 'COOKIES_DELETE'
    }
}
export const getCookies = () => {
    return {
        type: 'COOKIES_GET'
    }
}