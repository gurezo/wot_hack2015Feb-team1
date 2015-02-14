window.licker = window.licker || {};
window.licker.page = window.licker.page || {};
(function(ns, app) {
  'use strict';

  function init() {
    update();
  }

  /*
   */
  function update(user) {
    console.log('update top');
//    $.getJSON('./js/data/sample.json', function(json) {
//      json.content.forEach(function(elm) {
//      });
//    });
  }

  app.top = {
    init: init,
    update: update
  }
}(window.licker, window.licker.page));
