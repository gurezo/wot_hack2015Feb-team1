window.licker = window.licker || {};
(function(ns) {
  'use strict';

  $(function() {
    init();
  });

  function init() {
    var $listEvent = ns.util.getClass('list-event');
    var $tmpl = $(ns.util.getClass('template-item-event').text());

    $.getJSON('./js/data/sample.json', function(json) {
      json.content.forEach(function(elm) {
        var $tmpEvent = $tmpl.clone();

        var timeStart = elm.time_start;
        var place = elm.place;
        var action = elm.action;

        ns.util.findClass($tmpEvent, 'time-start').text(timeStart);
        ns.util.findClass($tmpEvent, 'place').text(place);
        ns.util.findClass($tmpEvent, 'action').text(action);
        $listEvent.append($tmpEvent);
      });
    });
  }
}(window.licker));
