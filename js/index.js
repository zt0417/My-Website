jQuery(function ($) {
    function changeColor(selector, colors, time) {
        /* Params:
         * selector: string,
         * colors: array of color strings,
         * every: integer (in mili-seconds)
         */
        var curCol = 0,
            timer = setInterval(function () {
                if (curCol === colors.length) curCol = 0;
                $(selector).css("background-color", colors[curCol]);
                curCol++;
            }, time);
    }
    $(window).load(function () {
        changeColor(".mainDiv", ["#074788", "#368ce2", "#ffffff", "#e8d92c","#bf1f18"], 3000);
    });
});