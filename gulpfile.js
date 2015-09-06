"use strict";

var gulp = require('gulp'),
    boilerplate = require('appium-gulp-plugins').boilerplate.use(gulp);

boilerplate({
  build: 'appium-ios-driver',
  jscs: false,
  test: {
    files: ['${testDir}/**/*-specs.js', '!${testDir}/e2e/**']
  },
  coverage: {
    files: ['./test/**/*-specs.js', '!./test/e2e/**'],
   },
  e2eTest: {
    files: '${testDir}/e2e/**/*-specs.js',
  },
  testReporter: 'spec'
});
