#!/usr/bin/env node

var fs = require('fs')
var test = require('tape')
var postcss = require('postcss')
var postcssCriticalCSS = require('..');
const basePath = `${process.cwd()}/test/fixtures`;
const chalk = require('chalk');

function compareCritical(t, name, testNonCritical) {
  t.equal(
    fs.readFileSync(
`${basePath}/${name}.${testNonCritical ? 'non-critical.actual' : 'critical.actual'}.css`, 'utf8'
    ).trim(),
    fs.readFileSync(
`${basePath}/${name}.${testNonCritical ? 'non-critical.expected' : 'critical.expected'}.css`, 'utf8'
    ).trim(),
    `processed fixture ${chalk.bold(name)} should be equal to expected output`
  );
}

test('Testing "this" critical result', function(t) {
  compareCritical(t, 'this');
  t.end();
});

test('Testing "this" non-critical result', function(t) {
  compareCritical(t, 'this');
  t.end();
});
//
// test('Testing "this" critical result', function(t) {
//   compareCritical(t, 'atRule');
//   t.end();
// });
//
// test('Testing "this" non-critical result', function(t) {
//   compareFixtures(t, 'atRule');
//   t.end();
// });
