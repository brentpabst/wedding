define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        year: moment().utc().year(),
        daysToGo: 'Married ' + moment('2015-09-26 20:25:00 Z').fromNow(),
        lessThanAYear: moment('2015-09-26 20:25:00 Z').diff(moment().utc(), 'days') <= 365,
        router: router,
        activate: function () {
            router.on('router:navigation:complete', function () {
                ga('send', { 'hitType': 'pageview', 'page': this.activeInstruction().config.hash });
            });

            router.map([
                { route: '500', title: 'Server Error', moduleId: 'viewmodels/500', nav: false },
                { route: '403', title: 'Access Denied', moduleId: 'viewmodels/403', nav: false },
                { route: '', title: 'Welcome', moduleId: 'viewmodels/home', nav: true },
                { route: 'story', title: 'Our Story', moduleId: 'viewmodels/about', nav: true },
                { route: 'party', title: 'Wedding Party', moduleId: 'viewmodels/party', nav: true },
                { route: 'registry', title: 'Registries', moduleId: 'viewmodels/registry', nav: true },
                { route: 'venues', title: 'Ceremony & Reception', moduleId: 'viewmodels/venues', nav: true },
                { route: 'lodging', title: 'Lodging & Travel', moduleId: 'viewmodels/lodging', nav: true }
                //{ route: 'contact', title: 'Contact', moduleId: 'viewmodels/contact', nav: true }
            ]).buildNavigationModel()
              .mapUnknownRoutes('viewmodels/404', '404')
              .activate();
        },
        menuClick: function () {
            // Close bootstrap's dropdown menu after clicking
            var menu = $('.navbar-collapse');
            menu.animate({ 'height': '1px' }, function () {
                menu.removeClass('in').addClass('collapse');
            });
        }
    };
});

// TODO: These are ideas we might want to look at...
// Using this sample demo site for content: http://demo.wedshare.com/
// Cool HTML5 mapping mechanism: http://www.developerdrive.com/2013/07/html5-geo-location-api-and-google-maps-api/
