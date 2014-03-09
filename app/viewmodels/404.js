define(['plugins/router'], function (router) {

    var goBack = function () {
        router.navigateBack();
    };

    return {
        goBack: goBack
    };
});