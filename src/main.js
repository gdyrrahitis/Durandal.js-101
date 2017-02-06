var config = {
    paths: {
        "text": "../node_modules/requirejs-text/text",
        "durandal": "../node_modules/durandal/js",
        "transitions": "../node_modules/durandal/js/transitions",
        "knockout": "../node_modules/knockout/build/output/knockout-latest",
        "jquery": "../node_modules/jquery/dist/jquery"
    },
    urlArgs: "=" + new Date().getTime()
};
requirejs.config(config);
require(["./bootstrap"]);
//# sourceMappingURL=main.js.map