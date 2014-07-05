define([

    'require',

    // namespaced obj
    'NS',

    // global modules and/or plugins
    'global/module1',
    'global/module2'

], function(require) {

    if (NS.section) {
        console.time('section load');
        require(['sections/' + NS.section], function() {
            console.timeEnd('section load');
        });
    }

});