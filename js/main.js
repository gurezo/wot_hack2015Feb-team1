window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();

    $.getJSON('http://team-one.azurewebsites.net/api/users', function(json) {
      ns.userList = json;
    });
  });

  function init() {
    ns.page.top.init();
    ns.page.daily.init();
    
    ns.page.top.update();
  }
}(window.licker));
