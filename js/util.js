window.licker = window.licker || {};
window.licker.util = window.licker.util || {};
(function(ns) {
  'use strict';

  //prefixにマッチするクラスを一括で削除するremoveClass用コールバック
  //参考: http://kachibito.net/snippets/removeclass-wildcard
  function removeClassCallback(prefix) {
    var regExp = new RegExp("\\b" + prefix + "-\\S+", "g");
    var callback = (function(index, css) {
      return (css.match(regExp) || []).join(" ");
    });

    return callback;
  }

  function getClass(className) {
    return $('[data-js-class~="' + className + '"]');
  }

  function findClass($elm ,className) {
    return $elm.find('[data-js-class~="' + className + '"]');
  }

  ns.util = {
    getClass: getClass,
    findClass: findClass,
    removeClassCallback: removeClassCallback
  }
}(window.licker));
