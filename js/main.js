window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();

// stub
//    ns.userList = $.getJSON('http://team-one.azurewebsites.net/api/users');
  });

  function init() {
    ns.page.top.init();
    ns.page.daily.init();
    
    ns.page.top.update();
  }
}(window.licker));
