window.licker = window.licker || {};
window.licker.page = window.licker.page || {};
(function(ns, app) {
  'use strict';

  var $page;
  var $user;

  function init() {
    $page = ns.util.getClass('page-top');

    $user = ns.util.findClass($page, 'user');

    $user.on('click', function(evt) {
      var id = $(evt.target).attr('data-id');
      ns.page.daily.update(id);
    });
  }

  /*
   */
  function update() {
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
