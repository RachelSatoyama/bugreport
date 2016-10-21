
// stryker.conf.js
module.exports = function(config){
  config.set({
    files: [
        // Add your files here, this is just an example:
        { pattern: 'src/**/*.js', mutated: true, included: false},
        'specs/**/*.js'
    ],
    testSelector: null,
    testRunner: 'mocha',
    testFramework: 'mocha',
    reporter: ['clear-text', 'progress']
  });
}

