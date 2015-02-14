window.licker = window.licker || {};
window.licker.page = window.licker.page || {};
(function(ns, app) {
  'use strict';

  var $listEvent = ns.util.getClass('list-event');

  function init() {
    $listEvent.attr('data-display', 'all');
    ns.util.getClass('filter-action').on('change', function(evt) {
      $listEvent.attr('data-display', evt.target.value);
    });
    
    update();
  }

  /*
   *  user: user ID (stub)
   */
  function update(user) {
    var $tmpl = $(ns.util.getClass('template-item-event').text());

    $.getJSON('./js/data/sample.json', function(json) {
      json.content.forEach(function(elm) {
        var $tmpEvent = $tmpl.clone();

        var timeStart = elm.time_start;
        var place = elm.place;
        var action = elm.action;

        var $timeStart = ns.util.findClass($tmpEvent, 'time-start');
        var $place = ns.util.findClass($tmpEvent, 'place');
        var $action = ns.util.findClass($tmpEvent, 'action');

        $tmpEvent.attr('data-time-start', timeStart);
        $tmpEvent.attr('data-place', place);
        $tmpEvent.attr('data-action', action);

        $timeStart.text(timeStart);
        $place.text(place);
        $action.text(action);

        $listEvent.append($tmpEvent);
      });
    });
  }

  app.daily = {
    init: init,
    update: update
  }
}(window.licker, window.licker.page));
