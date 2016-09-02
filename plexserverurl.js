#!/usr/bin/env node

var webdriverio = require('webdriverio');
var phantomjs = require('phantomjs-prebuilt')

phantomjs.run('--webdriver=4444').then(program => {
  webdriverio
  .remote()
  .init()
  .url('https://www.plex.tv/downloads')
  .click('#block-pms')
  .waitForVisible('.plex-downloads-pms-platform', 5000)
  .selectByVisibleText('.plex-downloads-pms-platform', 'Synology')
  .element('//div[contains(@class, "plex-downloads-pms-releases")]//a[text()="ARMv7"]')
  .getAttribute('href')
  .then(function(href) {
     console.log(href);
  })
  .end()
  .then(function(){
    program.kill();
  });
});
