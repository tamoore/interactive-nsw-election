'use strict';
define([], function() {
    function addCSS(url) {
        var head = document.querySelector('head');
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', url);
        head.appendChild(link);
    }

    return {
        boot: function(el, context, config, mediator) {
            // Load CSS
            addCSS('css/main.css');

            // Load main application
            require(['lib/main.js'], function(req) {
                req(['main'], function(main) {
                    main.init(el, context, config, mediator);
                });
            }, function(err) { console.error('Error loading boot.', err); });
        }
    };
});