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
        "codes": "../node_modules/i18n-iso-countries/codes.json"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
        "i18n-iso-countries": {
            deps: ["pad"]
        }
    },
    urlArgs: `=${new Date().getTime()}`
};

define("pad", [], function (pad) {
    return pad;
});
requirejs.config(config);
require(['jquery', 'bootstrap', 'i18n-iso-countries'], () => {
    require(["./bootstrapper"], (b) => {
        var instance = new b();
        instance.init();
    });
});