import Vue from 'vue';
import VueI18n from 'vue-i18n';
import portugues from './portugues'
import english from './english'
import espanol from "@/plugins/espanol";

Vue.use(VueI18n);

const messages = {
    "en" : english,
    "pt_BR" : portugues,
    "es" : espanol
}
// eslint-disable-next-line no-unused-vars
const i18n = new VueI18n({
    lazy:true,
    locale: 'pt_BR', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages
});

export default i18n