const { browser } = require('protractor');

const SpecReporter = require('jasmine-allure-reporter');

module.exports.config = {
    specs: ['./specs/*spec.js'],
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true
            },
            spec: {
                displayFailed: true,
                displayPending: true,
                displayDuration: true,
                displayStackTrace: true
            },
            summary: {
                displayFailed: true
            }
        }))
    },
    jasmineNodeOpts: {
        print: function() {}
    },
    capabilities: {
        'browserName': 'firefox'
    }
}