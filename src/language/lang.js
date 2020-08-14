export default {
    setLang(lang) {
        window.localStorage.setItem('wemeroUserLang', lang)
    },
    getLang(defaultLang) {
        const localLang = window.localStorage.getItem('wemeroUserLang')
        if (localLang === null) {
            // window.localStorage.setItem('wemeroUserLang', defaultLang)
            return defaultLang
        } else {
            return localLang
        }
    }
}