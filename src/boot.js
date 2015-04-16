define([], function() {
    'use strict';

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

            addCSS(
                'http://interactive.guim.co.uk/next-gen/au/2015/mar/interactive-nsw-election/css/reset.css'
            );
            addCSS(
                'http://interactive.guim.co.uk/next-gen/au/2015/mar/interactive-nsw-election/css/main.css'
            );


            // Add Traceur Runtime
            var traceur = document.createElement('script');
            traceur.setAttribute("type", "text/javascript");
            traceur.setAttribute("src",
                "http://interactive.guim.co.uk/next-gen/au/2015/mar/interactive-nsw-election/babel-polyfill.js"
            );
            document.getElementsByTagName("head")[0].appendChild(traceur);
            traceur.addEventListener("load", function() {
                // Add minified build
                var build = document.createElement('script');
                build.setAttribute("type", "text/javascript");
                build.setAttribute("src",
                    "http://interactive.guim.co.uk/next-gen/au/2015/mar/interactive-nsw-election/build.js"
                );
                build.addEventListener("load", function(){
                    var element = document.createElement("div");
                    element.style.padding = "1rem";
                    element.style.overflow = "hidden";
                    el.insertBefore(element,el.firstChild);
                    __boot__(element);
                });
                document.getElementsByTagName("head")[0].appendChild(build);
            });

        }
    };
});
