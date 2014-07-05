require.config({
    baseUrl: 'js',
    deps: ['main'], // load main.js and all global modules
    paths: {
        jquery: 'lib/jquery'
    },
    modules: [
        {
            name: 'main'
        },
        {
            name: 'sections/section1',
            exclude: ['main']
        }
    ]
});