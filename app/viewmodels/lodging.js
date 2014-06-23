define(['plugins/router'], function (router) {

    return {
        lessThanAYear: moment('2015-09-26 20:25:00 Z').diff(moment().utc(), 'days') <= 365
    };
});
