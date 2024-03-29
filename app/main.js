﻿requirejs.config({
    paths: {
        'text': '../scripts/text',
        'durandal': '../scripts/durandal',
        'plugins': '../scripts/durandal/plugins',
        'transitions': '../scripts/durandal/transitions'
    }
});

define('jquery', function () { return jQuery; });
define('knockout', ko);
define('moment', moment);

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {
    system.debug(true);

    app.title = 'Brenton & Alana';

    app.configurePlugins({
        router: true,
        dialog: true,
        widget: true
    });

    setTimeout(function () {
        app.start().then(function () {
            viewLocator.useConvention();
            app.setRoot('viewmodels/shell', 'entrance');
        });
    }, 0);
})