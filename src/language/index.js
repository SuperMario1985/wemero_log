import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangStorage from './lang'
// element-ui 里的多语言包
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import twLocale from 'element-ui/lib/locale/lang/zh-TW'
import ruLocale from 'element-ui/lib/locale/lang/ru-RU'
import jaLocale from 'element-ui/lib/locale/lang/ja'
Vue.use(VueI18n)
const DEFAULT_LANG = 'en'
// const LOCALE_KEY = 'wemeroUserLang'
const locales = {
    en: Object.assign(require('./en.json'), enLocale),
    // zh: Object.assign(require('./zh.json'), zhLocale),
    hk: Object.assign(require('./hk.json'), twLocale),
    // tw: Object.assign(require('./tw.json'), twLocale),
    ru: Object.assign(require('./ru.json'), ruLocale),
    ja: Object.assign(require('./jp.json'), jaLocale)
}
export const localesMap = {
    en: 'English',
    // zh: '中文(简体)',
    hk: '中文（繁體）',
    // tw: '台湾-中文',
    ru: 'Pусский',
    ja: '日本語'
}
const i18n = new VueI18n({
    locale: LangStorage.getLang('en'),
    messages: locales
})
export const setup = lang => {
    if (lang === undefined) {
        lang = langInfo.getLang('en');
        if (locales[lang] === undefined) {
            lang = DEFAULT_LANG
        }
    }
    LangStorage.setLang(lang);
    Object.keys(locales).forEach(lang => {
        document.body.classList.remove(`lang-${lang}`)
    })
    document.body.classList.add(`lang-${lang}`)
    document.body.setAttribute('lang', lang)
    Vue.config.lang = lang
    i18n.locale = lang
}
window.i18n = i18n
export default i18n