// Karma configuration
// Generated on Fri Feb 05 2016 18:18:14 GMT+0000 (UTC)

module.exports = function(config) {
  config.set({
    basePath: 'client/application',
    frameworks: [
      'jasmine'
    ],
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-material/angular-material.js',
      'application.js',
      'templates/**/*.js',
      'components/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    hostname: process.env.IP,
    port: process.env.PORT,
    runnerPort: 0,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  });
};