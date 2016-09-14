// ==UserScript==
// @name         Kanboard
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       Marc-Antoine BM
// @match        https://kanban.libeo.com/board/*
// @updateURL    https://rawgit.com/bouchardm/kanboard-view/master/kanboard.user.js 
// @downloadURL  https://rawgit.com/bouchardm/kanboard-view/master/kanboard.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var main = function() {
        $('.task-board-age-total').each(function(key, item) {
            $(item).css('font-size', $(item).html().replace('d', '') * 2 + 'px');
        });

        $('.task-board-title').each(function(key, item) {
            var value = $($(item).find('a')[0]).html();
            $(item).html(value);
        });

        $('#board th.board-column-header').css('width','150px');
        setTimeout(main, 2000);
    };
    main();
})();
