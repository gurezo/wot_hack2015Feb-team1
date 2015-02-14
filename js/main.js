window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();
  });

  function init() {
    ns.page.top.init();
    ns.page.daily.init();
  }
}(window.licker));
