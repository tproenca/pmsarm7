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
  .element('//div[contains(@class, "tooltipster-content")]//a[text()="ARMv7"]')
  .getAttribute('href')
  .then(function(href) {
    console.log(href);
  })
  .url('https://www.plex.tv/media-server-downloads')
  .waitForVisible('.plex-downloads-pms-platform', 5000)
  .selectByVisibleText('.plex-downloads-pms-platform', 'Netgear')
  .click('//button[text()="Choose Package"]')
  .waitForVisible('.tooltipster-content', 5000)
  .element('//div[contains(@class, "tooltipster-content")]//a[text()="ARM 6.x RN2xx"]')
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
