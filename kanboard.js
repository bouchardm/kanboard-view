// ==UserScript==
// @name         Kanboard
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Marc-Antoine BM
// @match        https://kanban.libeo.com/board/*
// @updateURL    https://cdn.rawgit.com/bouchardm/kanboard-view/master/kanboard.js 
// @downloadURL  https://cdn.rawgit.com/bouchardm/kanboard-view/master/kanboard.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    $('.task-board-age-total').each(function(key, item) {
        $(item).css('font-size', $(item).html().replace('d', '') * 2 + 'px');
    });

    $('.task-board-title').each(function(key, item) {
        var value = $($(item).find('a')[0]).html();
        $(item).html(value);
    });
})();
