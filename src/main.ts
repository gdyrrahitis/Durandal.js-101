let config: RequireConfig = {
    paths: {
        "text": "../node_modules/requirejs-text/text",
        "plugins": "../node_modules/durandal/js/plugins",
        "durandal": "../node_modules/durandal/js",
        "transitions": "../node_modules/durandal/js/transitions",
        "knockout": "../node_modules/knockout/build/output/knockout-latest",
        "jquery": "../node_modules/jquery/dist/jquery",
        "bootstrap": "../node_modules/bootstrap/dist/js/bootstrap",
        "pad": "../node_modules/pad/lib/index",
        "i18n-iso-countries": "../node_modules/i18n-iso-countries/index",
        "json": "../node_modules/requirejs-plugins/src/json",
        "alpha2codes": "../node_modules/i18n-iso-countries/alpha2codes",
        "codes": "../node_modules/i18n-iso-countries/codes.json",
        "languages": "../node_modules/i18n-iso-countries/languages",
        "ar": "../node_modules/i18n-iso-countries/langs/ar.json",
        "cs": "../node_modules/i18n-iso-countries/langs/cs.json",
        "de": "../node_modules/i18n-iso-countries/langs/de.json",
        "en": "../node_modules/i18n-iso-countries/langs/en.json",
        "es": "../node_modules/i18n-iso-countries/langs/es.json",
        "et": "../node_modules/i18n-iso-countries/langs/et.json",
        "fi": "../node_modules/i18n-iso-countries/langs/fi.json",
        "fr": "../node_modules/i18n-iso-countries/langs/fr.json",
        "hu": "../node_modules/i18n-iso-countries/langs/hu.json",
        "it": "../node_modules/i18n-iso-countries/langs/it.json",
        "nb": "../node_modules/i18n-iso-countries/langs/nb.json",
        "nl": "../node_modules/i18n-iso-countries/langs/nl.json",
        "nn": "../node_modules/i18n-iso-countries/langs/nn.json",
        "pl": "../node_modules/i18n-iso-countries/langs/pl.json",
        "pt": "../node_modules/i18n-iso-countries/langs/pt.json",
        "ru": "../node_modules/i18n-iso-countries/langs/ru.json",
        "sv": "../node_modules/i18n-iso-countries/langs/sv.json",
        "tr": "../node_modules/i18n-iso-countries/langs/tr.json",
        "zh": "../node_modules/i18n-iso-countries/langs/zh.json"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        "i18n-iso-countries": {
            deps: ["pad", "alpha2codes", "languages"]
        }
    },
    urlArgs: `=${new Date().getTime()}`
};

requirejs.config(config);
require(['jquery', 'bootstrap'], () => {
    require(["./bootstrapper"], (b) => {
        var instance = new b();
        instance.init();
    });
});