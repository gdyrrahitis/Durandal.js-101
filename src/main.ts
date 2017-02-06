let config: RequireConfig = {
    paths: {
        "text": "../node_modules/requirejs-text/text",
        "plugins": "../node_modules/durandal/js/plugins",
        "durandal": "../node_modules/durandal/js",
        "transitions": "../node_modules/durandal/js/transitions",
        "knockout": "../node_modules/knockout/build/output/knockout-latest",
        "jquery": "../node_modules/jquery/dist/jquery",
        "bootstrap": "../node_modules/bootstrap/dist/js/bootstrap"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
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