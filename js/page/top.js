window.licker = window.licker || {};
window.licker.page = window.licker.page || {};
(function(ns, app) {
  'use strict';

  function init() {
    var $screen = ns.util.getClass('page-top');
    ns.util.findClass($screen, 'user-1');
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
