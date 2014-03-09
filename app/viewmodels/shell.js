define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        year: moment().utc().year(),
        router: router,
        activate: function () {
            router.map([
                { route: '500', title: 'Server Error', moduleId: 'viewmodels/500', nav: false },
                { route: '403', title: 'Access Denied', moduleId: 'viewmodels/403', nav: false },
                { route: '', title: 'Welcome', moduleId: 'viewmodels/home', nav: true },
                { route: 'our-story', title: 'Our Story', moduleId: 'viewmodels/about', nav: true }
            ]).buildNavigationModel()
              .mapUnknownRoutes('viewmodels/404', '404')
              .activate();
        }
    };
});