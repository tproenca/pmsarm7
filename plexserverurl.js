#!/usr/bin/env node

var webdriverio = require('webdriverio');
var phantomjs = require('phantomjs-prebuilt')

phantomjs.run('--webdriver=4444').then(program => {
  webdriverio
  .remote()
  .init()
  .url('https://www.plex.tv/media-server-downloads')
  .waitForVisible('.plex-downloads-pms-platform', 5000)
  .selectByVisibleText('.plex-downloads-pms-platform', 'Synology')
  .click('//button[text()="Choose Package"]')
  .waitForVisible('.tooltipster-content', 5000)
  .element('//div[contains(@class, "tooltipster-content")]//a[contains(text(), "ARMv7 (x13 Series")]')
  .getAttribute('href')
  .then(function(href) {
    console.log(href);
  })
  .catch(function(err) {
    console.log(err);
  })
  .end()
  .then(function(){
    program.kill();
  });
});
